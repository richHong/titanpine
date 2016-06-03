'use strict';
var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var favicon = require('serve-favicon');
var publicPath = path.resolve(__dirname, 'public');
var bodyParser = require('body-parser');
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var multiparty = require('connect-multiparty');
var helmet = require('helmet');
var fetch = require('isomorphic-fetch');

var proxy = httpProxy.createProxyServer({
    changeOrigin: true
});

var app = express();

//serving our index.html
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(helmet());
app.use(multiparty());
app.use(favicon(__dirname + '/public/assets/black-house.ico'));
require('./server/S3ListingsMiddleware.js')(app);
require('./server/S3AvatarMiddleware.js')(app);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  app.route('/email')
   .post(function(req, res) {
        console.log(req.body)
        fetch("https://api.sendgrid.com/v3/mail/send/beta", {
            "method": "POST",
            "headers": {
                "authorization": "Bearer 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",
                "content-type": "application/json",
                "cache-control": "no-cache",
                "postman-token": "d1d73c00-90fc-fcb0-1246-d7f416a65443"
            },
            "body": JSON.stringify(req.body)
    }).then((response) => {
        // console.log(response)
        res.send(response)})
    });

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//server/compiler.js runs webpack-dev-server which creates the bundle.js which index.html serves
//will not see a physical bundle.js because webpack-dev-server runs it from memory
if (!isProduction) {
    var bundle = require('./server/compiler.js');
    bundle();
    // express now processes all requests to localhost:8080
    // app.all is a special routing method used for loading middleware functions
    app.all('/build/*', function(req, res) {
        proxy.web(req, res, {
            target: 'http://localhost:8080'
        });
    });
}

proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function() {
    console.log('Server running on port ' + port);
});

var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var path = require('path');
var morgan = require('morgan');
var publicPath = path.resolve(__dirname, 'public');
var bodyParser = require('body-parser');
var port = 3000;
//THIS IS ALL FILE UPLOAD STUFFFFFF=============================================
var config = require('./config.json');
var fs = require('fs');
var S3FS = require('s3fs');
var multiparty = require('connect-multiparty')();

// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

var app = express();

//serving our index.html
app.use(express.static(publicPath));

//server/compiler.js runs webpack-dev-server which creates the bundle.js which index.html serves
//the compiler adds some console logs for some extra sugar
//notice that you will not see a physical bundle.js because webpack-dev-server runs it from memory
var bundle = require('./server/compiler.js');
bundle();

//express now processes all requests to localhost:8080
//app.all is a special routing method used for loading middleware functions
app.all('/build/*', function (req, res) {
  proxy.web(req, res, {
      target: 'http://localhost:8080'
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extened:true}));
//THIS IS ALL FILE UPLOAD STUFFFFFF=============================================
var s3fsImplementation1 = new S3FS('hackerhabitatavatars', {
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
  endpoint: config.endpoint,
  region: config.region
});

var s3fsImplementation2 = new S3FS('hackerhabitatlistings', {
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
  endpoint: config.endpoint,
  region: config.region
});

app.use(multiparty);
app.post('/v1/avatars', function (req,res) {
  var file = req.files.file;
  console.log('THE FILE',file);
  var stream = fs.createReadStream(file.path);

  return s3fsImplementation1.writeFile(file.originalFilename, stream)
    .then(function(err) {
      fs.unlink(file.path, function() {
        if (err) {
          console.log('Error');
        }
        console.log('Success');
    });
    res.send('File Upload Complete');
  });
});

app.post('/v1/listings', function (req,res) {
  var file = req.files.file;
  console.log('THE FILE',file);
  var stream = fs.createReadStream(file.path);

  return s3fsImplementation2.writeFile(file.originalFilename, stream)
    .then(function(err) {
      fs.unlink(file.path, function() {
        if (err) {
          console.log('Error');
        }
        console.log('Success');
    });
    res.send('File Upload Complete');
  });
});
//THIS IS ALL FILE UPLOAD STUFFFFFF=============================================

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...')
});

app.listen(port, function () {
  console.log('Server running on port ' + port)
});

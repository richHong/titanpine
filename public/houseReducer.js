var getHouseReducer = function(state = {}, action){
    // console.log("here is the State: ", state, "Here is the Action: ", action.name)
        switch (action.type) {
        case 'GET_LISTINGS':
            return action
        default:
            return state;
    }
};

export default getHouseReducer

// var combined = combineReducers({
//     listings: getHouseReduce
// })

// var store1 = createStore(combined);

// var setNameActionCreator = function (name) {
//     return {
//         type: 'GET_LISTINGS',
//         name
//     }
// }

// console.log("%%%%%%%%",store1.getState().users)

// store1.subscribe(function(){
//     console.log("I am Subscribing to Store1: ", store1.getState())
// })

// var getHouseListing = function (){
//     var searchable = this.search.value.replace(" ", "+").toLowerCase();;
//     fetch('http://localhost:3001/v1/house_listings/?city=' + searchable)
//     .then(response => response.json())
//     .then(json => store1.dispatch(setNameActionCreator(json)))
// }
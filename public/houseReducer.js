var getHouseReducer = function(state = {}, action){
  switch (action.type) {
    case 'GET_LISTINGS':
      return action
    default:
      return state;
  };
};

export default getHouseReducer
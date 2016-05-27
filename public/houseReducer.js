var getHouseReducer = function(state = {}, action){
  switch (action.type) {
    case 'GET_LISTINGS':
      return action
    case 'SINGLE_LISTING':
    	return action
    default:
      return state;
  };
};

export default getHouseReducer
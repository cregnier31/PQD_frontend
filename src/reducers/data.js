export const dataReducer = (state = {}, action) => {
  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SET_DATA":
      newState = action.data
      break;
    default:
      break;
  }
  return newState;
};
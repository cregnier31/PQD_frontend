export const defaultCounterState = {
  count: 0
};

export const counterReducer = (state = defaultCounterState, action) => {
  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "INCREMENT_COUNTER":
      newState["count"] = newState["count"] + 1;
      break;
    case "DECREMENT_COUNTER":
      newState["count"] = newState["count"] - 1;
      break;
    case "RESET_COUNTER":
      newState["count"] = 0;
      break;
    default:
      break;
  }
  return newState;
};
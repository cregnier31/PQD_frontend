export function incrementCounter() {
  return {
    type: "INCREMENT_COUNTER"
  };
}

export function decrementCounter() {
  return {
    type: "DECREMENT_COUNTER"
  };
}

export function setCounterToZero() {
  return {
    type: "RESET_COUNTER"
  };
}

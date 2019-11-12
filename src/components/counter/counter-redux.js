import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  setCounterToZero
} from "../../actions";
import { CounterContainer } from "./counter-container";

const mapStateToProps = state => {
  return { count: state.counterReducer.count };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter()),
    setToZero: () => dispatch(setCounterToZero())
  };
};

export const CounterRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);

import { connect } from "react-redux";
import { setData } from "../../actions";
import { AppContainer } from "./app-container";

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    setData: (data) => dispatch(setData(data))
  };
};

export const AppRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);

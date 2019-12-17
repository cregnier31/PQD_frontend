import { connect } from "react-redux";
import { setAllFilters } from "../../actions";
import { AppContainer } from "./app-container";

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    setAllFilters: (data) => dispatch(setAllFilters(data))
  };
};

export const AppRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);

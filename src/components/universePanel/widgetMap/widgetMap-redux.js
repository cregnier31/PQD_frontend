import { connect } from "react-redux";
import { WidgetMapContainer } from "./widgetMap-container";

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const WidgetMapRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetMapContainer);


import { connect } from "react-redux";
import { LeafletMapContainer } from "./leafletMap-container";

const mapStateToProps = (state, props) => {
  const universe = state.filtersReducer && state.filtersReducer.universe;
  return {
    area: state.filtersReducer && state.filtersReducer.area,
    subArea: state.filtersReducer && state.filtersReducer[universe].subarea,
    filtersReducer: state.filtersReducer && state.filtersReducer[universe]
  }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export const LeafletMapRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeafletMapContainer);

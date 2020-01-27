import { connect } from "react-redux";
import { LeafletMapContainer } from "./leafletMap-container";
import {setUniverseFilter} from "../../../../actions/filters"

const mapStateToProps = (state, props) => {
  const universe = state.filtersReducer && state.filtersReducer.universe;
  return {
    area: state.filtersReducer && state.filtersReducer.area,
    subArea: state.filtersReducer && state.filtersReducer[universe].subarea,
    filtersReducer: state.filtersReducer && state.filtersReducer[universe],
    open: props.open,
    showFloats: props.showFloats,
    universe: universe
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setSubarea: (universe, name, value) => dispatch(setUniverseFilter(universe, name, value))
    }
}

export const LeafletMapRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeafletMapContainer);

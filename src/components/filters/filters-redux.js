import { connect } from "react-redux";
import { applyUniversFilters, setUniversFilter } from "../../actions";
import { FiltersContainer } from "./filters-container";

const mapStateToProps = (state, props) => {
    var concerned_data = {} 
    var concerned_filters = {}
    if(state.dataReducer['univers']){
        concerned_data = state.dataReducer['univers'].filter(univers => univers.name === props.univers)[0];
        concerned_filters = state.filtersReducer['univers'][concerned_data['name']]
    }
    return {
        data: concerned_data,
        filters: concerned_filters
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        set: (univers_id, name, value) => dispatch(setUniversFilter(univers_id, name, value)),
        apply: (univers_id) => dispatch(applyUniversFilters(univers_id))
    };
};

export const FiltersRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(FiltersContainer);

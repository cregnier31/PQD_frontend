import { connect } from "react-redux";
import { clearUniversFilter, setUniversFilter } from "../../actions";
import { FiltersContainer } from "./filters-container";

const mapStateToProps = (state, props) => {
    var concerned_data = {}
    if(state.dataReducer['univers']){
        concerned_data = state.dataReducer['univers'].filter(univers => univers.id === props.univers)[0];
    }
    return {
        data: concerned_data,
        filters: state.filtersReducer["univers"][props.univers_id]
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        set: (univers_id, name, value) => dispatch(setUniversFilter(univers_id, name, value)),
        clear: (univers_id) => dispatch(clearUniversFilter(univers_id))
    };
};

export const FiltersRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(FiltersContainer);

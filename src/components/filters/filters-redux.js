import { connect } from "react-redux";
import { clearUniversFilter, setUniversFilter } from "../../../actions";
import { FiltersContainer } from "./filters-container";

const mapStateToProps = (state, props) => {
    return {
        data: state.dataReducer["univers"][props.univers_id],
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

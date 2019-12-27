import { connect } from "react-redux";
import { setZoneFilter } from "../../actions";
import { HeaderContainer } from "./header-container";

const mapStateToProps = (state, props) => {
    var concerned_data = {} 
    var concerned_filters = {}
    if(state.dataReducer['areas']){
        concerned_data = state.dataReducer['areas']
        concerned_filters = state.filtersReducer['zone']
    }
    return {
        data: concerned_data,
        filters: concerned_filters
    }
};

const mapDispatchToProps = dispatch => {
    return {
        set: (what, value) => dispatch(setZoneFilter(what, value)),
    };
};

export const HeaderRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);

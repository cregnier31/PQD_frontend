import { connect } from "react-redux";
import { setAreaFilter } from "../../actions";
import { HeaderContainer } from "./header-container";

const mapStateToProps = (state, props) => {
    var concerned_data = {} 
    var concerned_filters = {}
    if(state.dataReducer['areas']){
        concerned_data = state.dataReducer['areas']
        concerned_filters = state.filtersReducer['area']
    }
    return {
        data: concerned_data,
        filters: concerned_filters
    }
};

const mapDispatchToProps = dispatch => {
    return {
        set: (value) => dispatch(setAreaFilter(value)),
    };
};

export const HeaderRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);

import { connect } from "react-redux";
import { setAreaFilter, setCurrentUniverse } from "../../actions";
import { HeaderContainer } from "./header-container";

const mapStateToProps = (state, props) => {
    var concerned_data = {} 
    const concerned_filters = state.filtersReducer['area']
    const universe = state.filtersReducer['universe']
    if(state.dataReducer['areas']){
        concerned_data = state.dataReducer['areas']
    }
    return {
        data: concerned_data,
        filters: concerned_filters,
        universe: universe
    }
};

const mapDispatchToProps = dispatch => {
    return {
        set: (value) => dispatch(setAreaFilter(value)),
        setUniverse: (value) => dispatch(setCurrentUniverse(value)),
    };
};

export const HeaderRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);

import { connect } from "react-redux";
import { setAreaFilter, setCurrentUniverse } from "../../actions";
import { HeaderContainer } from "./header-container";

const mapStateToProps = (state, props) => {
    var concerned_data = {} 
    const area = state.filtersReducer['area']
    const universe = state.filtersReducer['universe']
    if(state.dataReducer['areas']){
        concerned_data = state.dataReducer['areas']
    }
    return {
        data: concerned_data,
        area: area,
        universe: universe,
        currentArea: state.filtersReducer && state.filtersReducer.area,
        product: state.filtersReducer && state.filtersReducer[universe] && state.filtersReducer[universe].product,
        openTour: props.openTour
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setArea: (value) => dispatch(setAreaFilter(value)),
        setUniverse: (value) => dispatch(setCurrentUniverse(value)),
    };
};

export const HeaderRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);

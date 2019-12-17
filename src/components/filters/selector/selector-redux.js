import { connect } from "react-redux";
import { defineActiveFilter } from "../../../actions";
import { SelectorContainer } from "./selector-container";

const mapStateToProps = (state, props) => {
    return {
        filters: state.filtersReducer,
        value: state.selectorsReducer[props.name],
        parent_value: state.selectorsReducer[props.parent],
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        defineActiveFilter: (name, value) => dispatch(defineActiveFilter(name, value))
    };
};

export const SelectorRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectorContainer);

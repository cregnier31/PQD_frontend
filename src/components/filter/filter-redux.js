import { connect } from "react-redux";
import {defineActiveFilter} from "../../actions";
import { FilterContainer } from "./filter-container";

const mapStateToProps = state => {
    return {}
};
  
const mapDispatchToProps = dispatch => {
    return {
        defineActiveFilter: (name, value) => dispatch(defineActiveFilter(name, value))
    };
};

export const FilterRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterContainer);

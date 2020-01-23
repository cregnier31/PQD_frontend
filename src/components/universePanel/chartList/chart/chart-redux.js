import { connect } from "react-redux";
import { ChartContainer } from "./chart-container";

const mapStateToProps = (state, props) => {
    var area, variable = {}
    try {
        area = state.filtersReducer['area']
        variable = state.filtersReducer[props.universe]['variable']
    } catch (error) {
        console.log(error)
    }
    return {
        area: area,
        variable: variable,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export const ChartRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChartContainer);

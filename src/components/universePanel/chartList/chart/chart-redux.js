import { connect } from "react-redux";
import { ChartContainer } from "./chart-container";

const mapStateToProps = (state, props) => {
    var area, variable, dataset, product = {}
    try {
        area = state.filtersReducer['area']
        variable = state.filtersReducer[props.universe]['variable']
        dataset = state.filtersReducer[props.universe]['dataset']
        product = state.filtersReducer[props.universe]['product']
    } catch (error) {
        console.log(error)
    }
    return {
        area: area,
        variable: variable,
        dataset: dataset,
        product: product
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export const ChartRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChartContainer);

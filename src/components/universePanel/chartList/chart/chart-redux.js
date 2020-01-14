import { connect } from "react-redux";
import { ChartContainer } from "./chart-container";

const mapStateToProps = (state, props) => {
    var concerned_data = {}
    try {
        concerned_data = state.resultsReducer[props.universe]['kpis'][props.kind]
    } catch (error) {
        console.log(error)
    }
    return {
        data: concerned_data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export const ChartRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChartContainer);

import { connect } from "react-redux";
import { PlotContainer } from "./plot-container";

const mapStateToProps = (state, props) => {
    var concerned_data = {}
    try {
        concerned_data = state.resultsReducer[props.universe]['plot']
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

export const PlotRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlotContainer);

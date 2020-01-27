import { connect } from "react-redux";
import { setUniverseFilter, setPlot } from "../../actions";
import { FiltersContainer } from "./filters-container";

const mapStateToProps = (state, props) => {
    const selected_area = state.filtersReducer['area']
    const selected_universe = state.filtersReducer['universe']
    var concerned_filters = state.filtersReducer[selected_universe]
    var concerned_data = {} 
    try {
        if(state.dataReducer['areas']){
            if(typeof(selected_area) === "string"){
                concerned_data = state.dataReducer['areas']
                .filter(area => area.name === selected_area)[0]['universes']
                .filter(universe => universe.name === selected_universe)[0]
            }else{
                concerned_data = state.dataReducer['areas']
                .filter(area => area.id === selected_area)[0]['universes']
                .filter(universe => universe.name === selected_universe)[0]
            }
        }
    } catch (error) {
        console.log(error)
    }
    return {
        data: concerned_data,
        filters: concerned_filters,
        area: selected_area,
        universe: selected_universe,
        kpi: state.resultsReducer[selected_universe]['kpis'],
        plot: state.resultsReducer[selected_universe]['plot'],
        name: props.name
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        set: (universe_id, name, value) => dispatch(setUniverseFilter(universe_id, name, value)),
        setPlot: (universe_id, data) => dispatch(setPlot(universe_id, data)),
    };
}; 

export const FiltersRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(FiltersContainer);

import { connect } from "react-redux";
import { setUniverseFilter, setPlot, setKpis } from "../../actions";
import { FiltersContainer } from "./filters-container";

const mapStateToProps = (state, props) => {
    var concerned_data = {} 
    var concerned_filters = {}
    const selected_area = state.filtersReducer['area']
    try {
        if(state.dataReducer['areas']){
            if(typeof(selected_area) === "string"){
                concerned_data = state.dataReducer['areas']
                .filter(area => area.name === selected_area)[0]['universes']
                .filter(universe => universe.name === props.universe)[0]
            }else{
                concerned_data = state.dataReducer['areas']
                .filter(area => area.id === selected_area)[0]['universes']
                .filter(universe => universe.name === props.universe)[0]
            }
            concerned_filters = state.filtersReducer[concerned_data['name']]
        }
    } catch (error) {
        console.log(error)
    }
    return {
        data: concerned_data,
        filters: concerned_filters,
        zone: selected_area,
        kpi: state.resultsReducer[props.universe]['kpis'],
        plot: state.resultsReducer[props.universe]['plot'],
        name: props.name
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        set: (universe_id, name, value) => dispatch(setUniverseFilter(universe_id, name, value)),
        setPlot: (universe_id, data) => dispatch(setPlot(universe_id, data)),
        setKpis: (universe_id, data) => dispatch(setKpis(universe_id, data)),
    };
}; 

export const FiltersRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(FiltersContainer);

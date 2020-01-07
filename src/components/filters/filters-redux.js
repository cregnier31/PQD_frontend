import { connect } from "react-redux";
import { setUniverseFilter, setPlot, setKpi } from "../../actions";
import { FiltersContainer } from "./filters-container";

const mapStateToProps = (state, props) => {
    var concerned_data = {} 
    var concerned_filters = {}
    const zone = state.filtersReducer['zone']
    try {
        if(state.dataReducer['areas']){
            if(typeof(zone['subarea']) === "string"){
                concerned_data = state.dataReducer['areas']
                .filter(area => area.id === zone['area'])[0]['subareas']
                .filter(subarea => subarea.name === zone['subarea'])[0]['universes']
                .filter(universe => universe.name === props.universe)[0]
            }else{
                concerned_data = state.dataReducer['areas']
                .filter(area => area.id === zone['area'])[0]['subareas']
                .filter(subarea => subarea.id === zone['subarea'])[0]['universes']
                .filter(universe => universe.name === props.universe)[0]
            }
            concerned_filters = state.filtersReducer['universe'][concerned_data['name']]
        }
    } catch (error) {
        console.log(error)
    }
    console.log(concerned_data)
    return {
        data: concerned_data,
        filters: concerned_filters,
        zone: zone
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        set: (universe_id, name, value) => dispatch(setUniverseFilter(universe_id, name, value)),
        setPlot: (universe_id, data) => dispatch(setPlot(universe_id, data)),
        setKpi: (universe_id, what, data) => dispatch(setKpi(universe_id, what, data)),
    };
}; 

export const FiltersRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(FiltersContainer);

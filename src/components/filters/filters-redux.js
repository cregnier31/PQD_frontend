import { connect } from "react-redux";
import { setUniverseFilter } from "../../actions";
import { FiltersContainer } from "./filters-container";

const mapStateToProps = (state, props) => {
    var concerned_data = {} 
    var concerned_filters = {}
    const zone = state.filtersReducer['zone']
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
    return {
        data: concerned_data,
        filters: concerned_filters,
        zone: zone
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        set: (universe_id, name, value) => dispatch(setUniverseFilter(universe_id, name, value)),
    };
}; 

export const FiltersRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(FiltersContainer);

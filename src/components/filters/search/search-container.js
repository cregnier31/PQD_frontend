import React, { useState } from 'react'
import { config } from './../../../utils'
import { SearchView } from './search-view'
import { useDispatch, useSelector } from "react-redux";
import { forceFilters } from './../../../actions'

function findTreeByProductName(allData, productName) {
    var res = null
    if (typeof (allData) !== 'undefined') {
        // Area
        if (typeof (allData['areas']) !== 'undefined') {
            for(var i_a=0; i_a < allData['areas'].length; i_a++){
                const area = allData['areas'][i_a]
                // Universe
                if (typeof (area['universes']) !== 'undefined') {
                    for(var i_u=0; i_u < area['universes'].length; i_u++){
                        const universe = area['universes'][i_u]
                        // Variable
                        if (typeof (universe['variables']) !== 'undefined') {
                            for(var i_v=0; i_v < universe['variables'].length; i_v++){
                                const variable = universe['variables'][i_v]
                                // Dataset
                                if (typeof (variable['datasets']) !== 'undefined') {
                                    for(var i_d=0; i_d < variable['datasets'].length; i_d++){
                                        const dataset = variable['datasets'][i_d]
                                        // Product
                                        if (typeof (dataset['products']) !== 'undefined') {
                                            for(var i_p=0; i_p < dataset['products'].length; i_p++){
                                                const product = dataset['products'][i_p]
                                                // If product name match
                                                if (product['name'] === productName) {
                                                    // Subarea
                                                    if (typeof (product['subareas']) !== 'undefined') {
                                                        for(var i_s=0; i_s < product['subareas'].length; i_s++){
                                                            const subarea = product['subareas'][i_s]
                                                            // Depth
                                                            if (typeof (subarea['depths']) !== 'undefined') {
                                                                for(var i_de=0; i_de < subarea['depths'].length; i_de++){
                                                                    const depth = subarea['depths'][i_de]
                                                                    // Stat
                                                                    if (typeof (depth['stats']) !== 'undefined') {
                                                                        for(var i_st=0; i_st < depth['stats'].length; i_st++){
                                                                            const stat = depth['stats'][i_st]
                                                                            // Plot_type
                                                                            if (typeof (stat['plot_types']) !== 'undefined') {
                                                                                for(var i_pt=0; i_pt < stat['plot_types'].length; i_pt++){
                                                                                    const plot_type = stat['plot_types'][i_pt]
                                                                                    res = {
                                                                                        area: area['name'],
                                                                                        universe: universe['name'],
                                                                                        variable: variable['name'],
                                                                                        dataset: dataset['name'],
                                                                                        product: product['name'],
                                                                                        subarea: subarea['name'],
                                                                                        depth: depth['name'],
                                                                                        stat: stat['name'],
                                                                                        plot_type: plot_type['name']
                                                                                    }
                                                                                    if(variable['name'] === 'Temperature'){
                                                                                        console.log('TEMPERATURE AVAILABLE')
                                                                                        return res
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return res
}


export function SearchContainer() {
    const [options, setOptions] = useState()
    const allData = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();

    async function updateOptions(slug) {
        setOptions(null)
        const args = {
            "slug": slug
        }
        if (slug.length >= 3) {
            const options = {
                method: "post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(args),
            }
            fetch(config['urls']['autocomplete'], options)
                .then(response => response.json())
                .then(data => {
                    if ("products" in data) {
                        const names = data["products"].map(p => (p.name))
                        setOptions(names)
                    }
                }
                )
        }
    }

    const setSelection = (productName) => {
        setOptions(null)
        const values = findTreeByProductName(allData, productName)
        if (values !== null) {
            dispatch(forceFilters(values))
        }
    }

    return <SearchView options={options} updateOptions={updateOptions} onClick={setSelection} />
}
export const host = "http://127.0.0.1:8000"

export const config = {
  urls:{
    filters: host + "/data/filters",
    plot: host + "/data/plot",
    kpi_insitu: host + "/data/kpi_insitu",
    kpi_sat: host + "/data/kpi_sat",
    kpi_scores: host + "/data/scores",
    png: host + "/data/png?filename=",
    product: host + "/data/product?name=",
    autocomplete: host + "/data/autocomplete",
  }
}

export const color = {
  BLUE:{
    background: '#286E9F',
    icon: 'blue'
  },
  GREEN:{
    background: '#DAEFE7',
    icon: 'green'
  },
  WHITE:{
    background: '#F4F4F4',
    icon: 'grey'
  } 
}

export const colorUniverses = (universe) => {
  switch (universe) {
    case 'BLUE':
      return 'white'
    case 'WHITE':
      return 'grey'
    case 'GREEN':
      return 'black'
    default:
      return 'black'
  }
}

export const changeNameFilter = (name) => {
  switch (name) {
    case 'variable':
      return ('Parameter')
    case 'dataset':
      return 'Dataset used for validation'
    case 'product':
      return 'Product name'
    case 'subarea':
      return 'Geographical area'
    case 'depth':
      return 'Depth of subsurface layer'
    case 'stat':
      return 'Type of metric'
    default:
  }
}

export const changeNameWidget = (name) => {
  switch (name) {
    case 'SAT':
      return 'Daily number of incoming satellite observations'
    case 'INSITU':
      return 'Daily number of incoming in situ observations'
    case 'SKILL_SCORE':
      return 'Forecast uncertainty'
    default:
  }
}

export const changeTooltipWidget = (name) => {
  switch (name) {
    case 'INSITU':
      return 'Basin scale (on the geographical area of the product) estimate of the daily number of satellite observations used to produce CMEMS observational and model products: the number ofgood input observations used to produce one given L3 product per parameter is used to monitor changes in time in the observations number effectively used by CMEMS products. A drop in the observations number indicatesa potential drop in quality for this parameter in all CMEMS products except in situ only products.'
    case 'SAT':
      return 'Basin scale (on the geographical area of the product) estimate of the dailynumber of in situ observations (platforms) used to produce CMEMS observational and model products: the number of good platforms (quality controlled) per parameter is used to monitor changes in time in theobservations number effectively used by CMEMS products. A drop in the observations number indicatesa potential drop in quality for this parameter in all CMEMS products except satellite only products.'
    case 'SKILL_SCORE':
      return 'Uncertainty at basin scale formodel forecast products: 1- day forecast skill score, explained variance, and scatter index'
    default:
  }
}

export const changeNameAreas = (name) => {
  switch (name) {
    case 'arctic':
      return 'ART'
    case 'balticsea':
      return 'BAL'
    case 'global':
      return 'GLO'
    case 'ibi':
      return 'IBI'
    case 'medsea':
      return 'MD'
    case 'nws':
      return 'NWS'
    case 'blacksea':
      return 'BL'
    default:
  }
}

export const infoPlot = "Estimated Accuracy Numbers or EANs are computed on a given geographical area for a given day. The EANs are mean or root mean square departures at several forecast lengths. These statistics provide an estimate of the uncertainty depending on the validation datasets available (you can choose between validation datasets available using the filters). It is acknowledged that the uncertainty as recorded by users can be larger than EANs locally, especially in high variability areas (strong currents, meanders, mesoscalevariability areas, coastal areas,upwelling areas etc...)."

export const infoMap = "Estimated Accuracy Numbers or EANs are computed on a given geographical area for a given day. The EANs are mean or root mean square departures at several forecast lengths. These statistics provide an estimate of the uncertainty depending on the validation datasets available (you can choose between validation datasets available using the filters). It is acknowledged that the uncertainty as recorded by users can be larger than EANs locally, especially in high variability areas (strong currents, meanders, mesoscalevariability areas, coastal areas,upwelling areas etc...)."

export const changeNameAreasForTitle = (name) => {
  switch (name) {
    case 'arctic':
      return 'Arctic'
    case 'balticsea':
      return 'Baltic sea'
    case 'global':
      return 'Global'
    case 'ibi':
      return 'Iberian-Biscay-Island'
    case 'medsea':
      return 'Mediterranean sea'
    case 'nws':
      return 'North western shelves'
    case 'blacksea':
      return 'Black sea'
    default:
  }
}

export const producers = (area) => {
  switch (area) {
    case 'arctic':
      return 'http://marine.copernicus.eu/about-us/about-producers/arc-mfc/'
    case 'balticsea':
      return 'http://marine.copernicus.eu/about-us/about-producers/bal-mfc/'
    case 'global':
      return 'http://marine.copernicus.eu/about-us/about-producers/glo-mfc/'
    case 'ibi':
      return 'http://marine.copernicus.eu/about-us/about-producers/ibi-mfc/'
    case 'medsea':
      return 'http://marine.copernicus.eu/about-us/about-producers/med-mfc/'
    case 'nws':
      return 'http://marine.copernicus.eu/about-us/about-producers/nws-mfc/'
    case 'blacksea':
      return 'http://marine.copernicus.eu/about-us/about-producers/bs-mfc/'
    default:
  }
}
export const host = "http://127.0.0.1:8000"

export const config = {
  urls:{
    filters: host + "/data/filters",
    plot: host + "/data/plot",
    kpi: host + "/data/kpi",
    png: host + "/data/png?filename=",
  }
}

export const color = {
  BLUE:{
    background: '#D1DDE5',
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
    case 'INSITU':
      return 'Daily number of incoming satellite observations'
    case 'SAT':
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
      return 'uncertainty at basin scale formodel forecast products: 1- day forecast skill score, explained variance, and scatter index'
    default:
  }
}

export const infoPlot = "Estimated Accuracy Numbers or EANs are computed on a given geographical area for a given day. The EANs are mean or root mean square departures at several forecast lengths. These statistics provide an estimate of the uncertainty depending on the validation datasets available (you can choose between validation datasets available using the filters). It is acknowledged that the uncertainty as recorded by users can be larger than EANs locally, especially in high variability areas (strong currents, meanders, mesoscalevariability areas, coastal areas,upwelling areas etc...)."

export const infoMap = "Estimated Accuracy Numbers or EANs are computed on a given geographical area for a given day. The EANs are mean or root mean square departures at several forecast lengths. These statistics provide an estimate of the uncertainty depending on the validation datasets available (you can choose between validation datasets available using the filters). It is acknowledged that the uncertainty as recorded by users can be larger than EANs locally, especially in high variability areas (strong currents, meanders, mesoscalevariability areas, coastal areas,upwelling areas etc...)."
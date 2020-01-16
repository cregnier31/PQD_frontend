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
    case 'variables':
      return 'parameter'
    case 'datasets':
      return 'dataset used for validation'
    case 'products':
      return 'product name'
    case 'depths':
      return 'depth of subsurface layer'
    case 'stats':
      return 'geographical area'
    case 'plot_types':
      return 'type of metric'
    default:
  }
}
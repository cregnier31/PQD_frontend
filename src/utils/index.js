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
  console.log('name', name);
  switch (name) {
    case 'variable':
      return ('parameter')
    case 'dataset':
      return 'dataset used for validation'
    case 'product':
      return 'product name'
    case 'subarea':
      return 'geographical area'
    case 'depth':
      return 'depth of subsurface layer'
    case 'stat':
      return 'type of metric'
    default:
  }
}
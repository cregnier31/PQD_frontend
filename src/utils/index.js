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
    background: '#92AFCD',
    icon: 'blue'
  },
  GREEN:{
    background: '#C6FAE0',
    icon: 'green'
  },
  WHITE:{
    background: '#DEE2E0',
    icon: 'grey'
  } 
}
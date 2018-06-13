import {
  DATA,
  CHART_ATENDIMIENTO,
  CHART_QUALIDADE,
  CHART_VARIEDADE,
  CHART_PACOTE,
  CHART_PRECIO,
  CHART_CONOCIO,
  CHART_ENCONTRO
} from './../actions';


export const reducerChartConocio = (state = {}, action) => {
  switch (action.type) {
    case CHART_CONOCIO:
      action.payload.push(0)
      return { ...state,
        labels: state.labels,
        datasets: [{
          label: state.datasets[0].label,
          data: action.payload,
          backgroundColor: state.datasets[0].backgroundColor
        }]
      }

    default:
      return state;
  }

}

export const reducerChartEncontro = (state = {}, action) => {
  switch (action.type) {
    case CHART_ENCONTRO:
      action.payload.push(0)
      return { ...state,
        labels: state.labels,
        datasets: [{
          label: state.datasets[0].label,
          data: action.payload,
          backgroundColor: state.datasets[0].backgroundColor
        }]
      }

    default:
      return state;
  }

}


export const reducerChartAtendimiento = (state = {}, action) => {
  switch (action.type) {
    case CHART_ATENDIMIENTO:
      action.payload.push(0)
      return { ...state,
        labels: state.labels,
        datasets: [{
          label: state.datasets[0].label,
          data: action.payload,
          backgroundColor: state.datasets[0].backgroundColor
        }]
      }

    default:
      return state;
  }

}


export const reducerChartQualidade = (state = {}, action) => {
  switch (action.type) {
    case CHART_QUALIDADE:
      action.payload.push(0)
      return {...state, 
              labels: state.labels,
              datasets: [{
                  label: state.datasets[0].label, 
                  data: action.payload,
                  backgroundColor: state.datasets[0].backgroundColor
                }]
              
            }

    default:
      return state;
  }

}
export const reducerChartVariedade = (state = {}, action) => {
  switch (action.type) {
    case CHART_VARIEDADE:
      action.payload.push(0)
      return { ...state,
              labels: state.labels,
              datasets: [{
                  label: state.datasets[0].label, 
                  data: action.payload,
                  backgroundColor: state.datasets[0].backgroundColor
                }]
              }

    default:
      return state;
  }

}

export const reducerChartPacote = (state = {}, action) => {
  switch (action.type) {
    case CHART_PACOTE:
      action.payload.push(0)
      return { ...state,
        labels: state.labels,
        datasets: [{
          label: state.datasets[0].label,
          data: action.payload,
          backgroundColor: state.datasets[0].backgroundColor
        }]
      }

    default:
      return state;
  }

}


export const reducerChartPrecio = (state = {}, action) => {
  switch (action.type) {
    case CHART_PRECIO:
      action.payload.push(0)
      
      return {...state,
        labels: state.labels,
        datasets: [{
          label: state.datasets[0].label,
          data: action.payload,
          backgroundColor: state.datasets[0].backgroundColor
        }]
      }

    default:
      return state;
  }

}



export const reducerData = (state = {}, action) => {
  switch (action.type) {
    case DATA:
      return action.payload

    default:
      return state;
  }

}


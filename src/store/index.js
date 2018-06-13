import {
  createStore
} from 'redux';
import reducers from './../reducer';
let labels = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco']


const initialState = {
  reducerData: null,
  reducerChartConocio: {
    //propiedades dentro del data
    labels: ['R.Sociais', 'I.Amigos', 'Google', 'Panfleto', 'Outdoor', 'Outros'],
    datasets: [{
      label: 'Conocio',
      //numero de datos
      data: [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      backgroundColor: [
        'rgba(114, 0, 38, 0.7)',//redes sociais
        'rgba(241, 136, 5, 0.6)',//I. amigos
        'rgba(0, 147, 9, 0.6)',//google
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(152, 139, 142, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ]
    }]
  },
  reducerChartEncontro: {
    //propiedades dentro del data
    labels: ['Sim', 'Não'],
    datasets: [{
      label: 'Encontro o que procurava?',
      //numero de datos
      data: [
        0,
        0,
        0
      ],
      backgroundColor: [
        'rgba(153, 102, 255, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(152, 139, 142, 0.6)'
      ]
    }]
  },
  reducerChartAtendimiento: {
    //propiedades dentro del data
    labels: labels,
    datasets: [{
      label: 'Atendimiento',
      //numero de datos
      data: [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ]
    }]
  },
  reducerChartQualidade: {
    //propiedades dentro del data
    labels: labels,
    datasets: [{
      label: 'Atendimiento',
      //numero de datos
      data: [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ]
    }]
  },
  reducerChartVariedade: {
    //propiedades dentro del data
    labels: labels,
    datasets: [{
      label: 'Atendimiento',
      //numero de datos
      data: [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ]
    }]
  },
  reducerChartPacote: {
    //propiedades dentro del data
    labels: labels,
    datasets: [{
      label: 'Atendimiento',
      //numero de datos
      data: [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ]
    }]
  },
  reducerChartPrecio: {
    //propiedades dentro del data
    labels: labels,
    datasets: [{
      label: 'Atendimiento',
      //numero de datos
      data: [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ]
    }]
  }

}


export const store = createStore(reducers, initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
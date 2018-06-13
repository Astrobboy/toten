import { combineReducers } from 'redux';

import {
  reducerData,
  reducerChartAtendimiento,
  reducerChartQualidade,
  reducerChartVariedade,
  reducerChartPacote,
  reducerChartPrecio,
  reducerChartConocio,
  reducerChartEncontro
  
} from './reducerFull';

export default combineReducers({
  reducerData,
  reducerChartAtendimiento,
  reducerChartQualidade,
  reducerChartVariedade,
  reducerChartPacote,
  reducerChartPrecio,
  reducerChartConocio,
  reducerChartEncontro
})
import { combineReducers } from 'redux';

import {
  reducerData,
  reducerChartAtendimiento,
  reducerChartQualidade,
  reducerChartVariedade,
  reducerChartPacote,
  reducerChartPrecio,
  reducerChartConocio,
  reducerChartEncontro,
  reducerDataCLient, 
  reducerShow
  
} from './reducerFull';

export default combineReducers({
  reducerData,
  reducerChartAtendimiento,
  reducerChartQualidade,
  reducerChartVariedade,
  reducerChartPacote,
  reducerChartPrecio,
  reducerChartConocio,
  reducerChartEncontro,
  reducerDataCLient, 
  reducerShow
})
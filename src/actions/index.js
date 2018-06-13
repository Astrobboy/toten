export const DATA = 'DATA';

export const CHART_ATENDIMIENTO = 'CHART_ATENDIMIENTO';
export const CHART_QUALIDADE = 'CHART_QUALIDADE';
export const CHART_VARIEDADE = 'CHART_VARIEDADE';
export const CHART_PACOTE = 'CHART_PACOTE';
export const CHART_PRECIO = 'CHART_PRECIO';

export const CHART_CONOCIO = 'CHART_CONOCIO';
export const CHART_ENCONTRO = 'CHART_ENCONTRO';




//actions
export const data = payload => ({ type: DATA, payload});

export const chartAtendimiento = payload => ({ type: CHART_ATENDIMIENTO, payload});
export const chartQualidade = payload => ({ type: CHART_QUALIDADE, payload});
export const chartVariedade = payload => ({ type: CHART_VARIEDADE, payload});
export const chartPacote = payload => ({ type: CHART_PACOTE, payload});
export const chartPrecio = payload => ({ type: CHART_PRECIO, payload});

export const chartConocio = payload => ({ type: CHART_CONOCIO, payload});
export const chartEncontro = payload => ({ type: CHART_ENCONTRO, payload});
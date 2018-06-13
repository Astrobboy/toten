import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import Slider from '../slider';
import '../style.css';
import Mapbar from '../mapa/bar';
import Mapline from '../mapa/line';
import Mappie from '../mapa/pie';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../../actions';
import { firebaseDataBase } from './../../../firebase';


class DashStartQualidade extends Component {
  
  getStartRef = id => {
    return firebaseDataBase.ref(`start/${id}`)
  }

  componentDidMount(){
    const { chartQualidade } = this.props;
    this.getStartRef('qualidade').on('value', snapshot => {
      const qualidade = snapshot.val()
      if (qualidade) {
        chartQualidade([qualidade.uno, qualidade.dos, qualidade.tres, qualidade.cuatro, qualidade.cinco])
      }
    })
  }

  render() {
    const { reducerChartQualidade } = this.props;
    return (
      <div>
        <Slider/>
       { reducerChartQualidade ?
      
        <div> 
          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Qualidade</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mappie chartData={reducerChartQualidade} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div>


          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Qualidade</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mapbar chartData={reducerChartQualidade} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div> 

          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Qualidade</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mapline chartData={reducerChartQualidade} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div> </div>
        :
        <div className='car-center'><div><p>Cargando...</p></div><div><CircularProgress size={300} thickness={5} /></div></div>}
        
      </div>
    );
  }

}

const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

const MapStateToProps = ({
  reducerChartQualidade
}) => ({
  reducerChartQualidade
})

export default connect(MapStateToProps, MapDispatchToPropsActions)(DashStartQualidade);


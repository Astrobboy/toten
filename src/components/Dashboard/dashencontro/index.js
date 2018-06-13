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

class DashEncontro extends Component {

  getStartRef = id => {
    return firebaseDataBase.ref(`start/${id}`)
  }

  componentDidMount(){
    const { chartEncontro } = this.props;
    this.getStartRef('encontro').on('value', snapshot => {
      const encontro = snapshot.val()
      if (encontro) {
        chartEncontro([encontro.uno, encontro.dos, encontro.tres, encontro.cuatro, encontro.cinco])
      }
    })
  }

  render() {
    const { reducerChartEncontro } = this.props
    return (
      <div>
        <Slider/>
        { reducerChartEncontro ?
      
        <div>
          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Encontro</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mappie chartData={reducerChartEncontro} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div>


          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Encontro</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mapbar chartData={reducerChartEncontro} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div> 

          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Encontro</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mapline chartData={reducerChartEncontro} location="Atacado" legendPosition="bottom"/>
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
  reducerChartEncontro
}) => ({
  reducerChartEncontro
})

export default connect(MapStateToProps, MapDispatchToPropsActions)(DashEncontro);



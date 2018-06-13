import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import  Slider  from '../slider';
import '../style.css';
import Mapbar from '../mapa/bar';
import Mapline from '../mapa/line';
import Mappie from '../mapa/pie';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../../actions';
import { firebaseDataBase } from './../../../firebase';

class DashStartAtendimiento extends Component {
  getStartRef = id => {
    return firebaseDataBase.ref(`start/${id}`)
  }

  componentDidMount(){
    const { chartAtendimiento } = this.props;
    this.getStartRef('atendimiento').on('value', snapshot => {
      const atendimiento = snapshot.val()
      if (atendimiento) {
        chartAtendimiento([atendimiento.uno, atendimiento.dos, atendimiento.tres, atendimiento.cuatro, atendimiento.cinco])
      }
    })
  }

  render() {
    const { reducerChartAtendimiento } = this.props
    return (
      <div>
        <Slider/>
      { reducerChartAtendimiento ?
      
      <div>  <div className="content-start-grap">
          <div className="widget-header">
            <h2>Atendimiento</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mappie chartData={reducerChartAtendimiento} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div>


        <div className="content-start-grap">
          <div className="widget-header">
            <h2>Atendimiento</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mapbar chartData={reducerChartAtendimiento} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div> 

        <div className="content-start-grap">
          <div className="widget-header">
            <h2>Atendimiento</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mapline chartData={reducerChartAtendimiento} location="Atacado" legendPosition="bottom"/>
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
  reducerChartAtendimiento
}) => ({
  reducerChartAtendimiento
})

export default connect(MapStateToProps, MapDispatchToPropsActions)(DashStartAtendimiento);



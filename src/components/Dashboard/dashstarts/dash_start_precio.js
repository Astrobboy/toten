import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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


class DashStartPrecio extends Component {

  getStartRef = id => {
    return firebaseDataBase.ref(`start/${id}`)
  }

  componentDidMount(){
    const { chartPrecio } = this.props;
    this.getStartRef('precio').on('value', snapshot => {
      const precio = snapshot.val()
      if (precio) {
        chartPrecio([precio.uno, precio.dos, precio.tres, precio.cuatro, precio.cinco])
      }
    })
  }

  render() {
    const { reducerChartPrecio } = this.props;
    return (
      <div>
        <Slider/>
          { reducerChartPrecio ?
      
        <div>
          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Precio</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mappie chartData={reducerChartPrecio} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div>


          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Precio</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mapbar chartData={reducerChartPrecio} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div> 

          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Precio</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mapline chartData={reducerChartPrecio} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div>  </div>
        :
        <div className='car-center'><div><p>Cargando...</p></div><div><CircularProgress size={300} thickness={5} /></div></div>}
      
      </div>
    );
  }

}

const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

const MapStateToProps = ({ reducerChartPrecio }) => ({ reducerChartPrecio })

export default withRouter(connect(MapStateToProps, MapDispatchToPropsActions)(DashStartPrecio));



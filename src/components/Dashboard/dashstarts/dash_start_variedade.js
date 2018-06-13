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

class DashStartVariedade extends Component {
  
  getStartRef = id => {
    return firebaseDataBase.ref(`start/${id}`)
  }

  componentDidMount(){
    const { chartVariedade } = this.props;
    this.getStartRef('variedade').on('value', snapshot => {
      const variedade = snapshot.val()
      if (variedade) {
        chartVariedade([variedade.uno, variedade.dos, variedade.tres, variedade.cuatro, variedade.cinco])
      }
    })
  }

  render() {
    const { reducerChartVariedade } = this.props;
    return (
      <div>
        <Slider/>
       { reducerChartVariedade ?
      
        <div>
          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Variedade</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mappie chartData={reducerChartVariedade} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div>


          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Variedade</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mapbar chartData={reducerChartVariedade} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div> 

          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Variedade</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mapline chartData={reducerChartVariedade} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div> </div>
        :
        <div className='car-center'>
          <div><p>Cargando...</p></div>
          <div><CircularProgress size={300} thickness={5} /></div>
        </div>
      }
  
      </div>
    );
  }

}

const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

const MapStateToProps = ({
  reducerChartVariedade
}) => ({
  reducerChartVariedade
})

export default connect(MapStateToProps, MapDispatchToPropsActions)(DashStartVariedade);


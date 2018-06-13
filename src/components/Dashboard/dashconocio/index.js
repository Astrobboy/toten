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

class DashConocio extends Component {

  getStartRef = id => {
    return firebaseDataBase.ref(`start/${id}`)
  }

  componentDidMount(){
    const { chartConocio } = this.props;
    this.getStartRef('conocio').on('value', snapshot => {
      const conocio = snapshot.val()
      if (conocio) {
        chartConocio([conocio.uno, conocio.dos, conocio.tres, conocio.cuatro, conocio.cinco])
      }
    })
  }

  render() {
    const { reducerChartConocio } = this.props
    return (
      <div>
        <Slider/>
        { reducerChartConocio ?
      
        <div>
          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Donde conocio Atacado?</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mappie chartData={reducerChartConocio} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div>


          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Donde conocio Atacado?</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mapbar chartData={reducerChartConocio} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div> 

          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Donde conocio Atacado?</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mapline chartData={reducerChartConocio} location="Atacado" legendPosition="bottom"/>
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
  reducerChartConocio
}) => ({
  reducerChartConocio
})

export default connect(MapStateToProps, MapDispatchToPropsActions)(DashConocio);



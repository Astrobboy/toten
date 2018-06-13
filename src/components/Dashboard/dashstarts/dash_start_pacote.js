import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { withRouter  } from "react-router-dom";

import Slider from '../slider';
import '../style.css';
import Mapbar from '../mapa/bar';
import Mapline from '../mapa/line';
import Mappie from '../mapa/pie';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../../actions';
import { firebaseDataBase } from './../../../firebase';

class DashStartPacote extends Component {

  getStartRef = id => {
    return firebaseDataBase.ref(`start/${id}`)
  }

  componentDidMount(){
    const { chartPacote } = this.props;
    this.getStartRef('pacote').on('value', snapshot => {
      const pacote = snapshot.val()
      if (pacote) {
        chartPacote([pacote.uno, pacote.dos, pacote.tres, pacote.cuatro, pacote.cinco])
      }
    })
  }

  render() {
    const { reducerChartPacote } = this.props
    return (
      <div>
        <Slider history={this.props.history}/>
        { reducerChartPacote ?
      
        <div>
          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Pacote</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mappie chartData={reducerChartPacote} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div>


          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Pacote</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mapbar chartData={reducerChartPacote} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div> 

          <div className="content-start-grap">
            <div className="widget-header">
              <h2>Pacote</h2>
            </div>
            <div className="widget-content">
              <div className='chart'>
                <Mapline chartData={reducerChartPacote} location="Atacado" legendPosition="bottom"/>
              </div>
            </div>
          </div> 
        </div>
        :
        <div className='car-center'>
          <div>
            <p>Cargando...</p>
          </div>
          <div>
            <CircularProgress size={300} thickness={5} />
          </div>
        </div>
      }
        
        </div>
    );
  }

}

const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

const MapStateToProps = ({
  reducerChartPacote
}) => ({
  reducerChartPacote
})

export default withRouter(connect(MapStateToProps, MapDispatchToPropsActions)(DashStartPacote));



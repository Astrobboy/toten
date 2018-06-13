import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import Slider from '../slider';
import '../style.css';
import Mapbar from '../mapa/bar';
import Mapline from '../mapa/line';
import Mappie from '../mapa/pie';

import { firebaseDataBase } from './../../firebase';

class DashStartAtendimiento extends Component {
  constructor(){
    super();
    this.state = {
      chartAtendimiento: null
    }
  }

  getUsersRef = () => {
    return firebaseDataBase.ref(`users/`)
  }


  componentWillMount(){
    
    let [contAtendimiento1, contAtendimiento2, contAtendimiento3, contAtendimiento4, contAtendimiento5] = [0, 0, 0, 0, 0]
    let labels = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco']
    this.getUsersRef().on('value', snapshot => {
      const users = snapshot.val()
      let keys = Object.values(users)

      for (let i = 0; i < keys.length; i++) {
        if (keys[i].atendimiento === 1){
          contAtendimiento1 += 1
        }else if (keys[i].atendimiento === 2){
          contAtendimiento2 += 1
        }else if (keys[i].atendimiento === 3){
          contAtendimiento3 += 1
        }else if (keys[i].atendimiento === 4){
          contAtendimiento4 += 1
        }else if (keys[i].atendimiento === 5){
          contAtendimiento5 += 1
        }

      }
    // Ajax calls here
    this.setState({
      chartAtendimiento: {
        //propiedades dentro del data
        labels: labels,
        datasets: [{
          label: 'Atendimiento',
          //numero de datos
          data: [
            contAtendimiento1,
            contAtendimiento2,
            contAtendimiento3,
            contAtendimiento4,
            contAtendimiento5,
            0
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ]
        }]
      }
    })
    
  });
}

  render() {
    return (
      <div>
        <Slider/>
      { this.state.chartAtendimiento ?
      
      <div>  <div className="content-start-grap">
          <div className="widget-header">
            <h2>Atendimiento</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mappie chartData={this.state.chartAtendimiento} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div>


        <div className="content-start-grap">
          <div className="widget-header">
            <h2>Atendimiento</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mapbar chartData={this.state.chartAtendimiento} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div> 

        <div className="content-start-grap">
          <div className="widget-header">
            <h2>Atendimiento</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mapline chartData={this.state.chartAtendimiento} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div> </div>
      :
       <div className='car-center'><div><p>Cargando...</p></div><div><CircularProgress size={300} thickness={5} /></div></div>}
      </div>
    );
  }

}



export default DashStartAtendimiento;



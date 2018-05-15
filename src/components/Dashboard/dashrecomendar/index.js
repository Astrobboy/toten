import React, { Component } from 'react';
import axios from 'axios';
import Slider from '../slider';
import '../style.css';
import Mapbar from '../mapa/bar';
import Mapline from '../mapa/line';
import Mappie from '../mapa/pie';

class DashStartProbabilidad extends Component {
  constructor(){
    super();
    this.state = {
      chartProbabilidad: {}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    let [contProbabilidad1, contProbabilidad2, contProbabilidad3, contProbabilidad4, contProbabilidad5, contProbabilidad6, contProbabilidad7, contProbabilidad8, contProbabilidad9, contProbabilidad10] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let labels = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez']
    axios.get('http://localhost:5000/data').then((res) => {
      
      for (let i = 0; i < res.data.datos.length; i++) {
        if (res.data.datos[i].probabilidad === '1'){
          contProbabilidad1 += 1
        }else if (res.data.datos[i].probabilidad === '2'){
          contProbabilidad2 += 1
        }else if (res.data.datos[i].probabilidad === '3'){
          contProbabilidad3 += 1
        }else if (res.data.datos[i].probabilidad === '4'){
          contProbabilidad4 += 1
        }else if (res.data.datos[i].probabilidad === '5'){
          contProbabilidad5 += 1
        } else if (res.data.datos[i].probabilidad === '6') {
            contProbabilidad6 += 1
        } else if (res.data.datos[i].probabilidad === '7') {
            contProbabilidad7 += 1
        } else if (res.data.datos[i].probabilidad === '8') {
            contProbabilidad8 += 1
        } else if (res.data.datos[i].probabilidad === '9') {
            contProbabilidad9 += 1
        } else if (res.data.datos[i].probabilidad === '10') {
            contProbabilidad10 += 1
        }

      }
    localStorage.setItem('bool', true)
    // Ajax calls here
    this.setState({
      chartProbabilidad: {
        //propiedades dentro del data
        labels: labels,
        datasets: [{
          label: 'Probabilidad',
          //numero de datos
          data: [
            contProbabilidad1,
            contProbabilidad2,
            contProbabilidad3,
            contProbabilidad4,
            contProbabilidad5,
            contProbabilidad6,
            contProbabilidad7,
            contProbabilidad8,
            contProbabilidad9,
            contProbabilidad10
          ],
          backgroundColor: [
            'rgba(23, 134, 45, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(55, 185, 81, 0.6)'
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
        
        <div className="content-start-grap">
          <div className="widget-header">
            <h2>Probabilidad</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mappie chartData={this.state.chartProbabilidad} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div>


        <div className="content-start-grap">
          <div className="widget-header">
            <h2>Probabilidad</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mapbar chartData={this.state.chartProbabilidad} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div> 

        <div className="content-start-grap">
          <div className="widget-header">
            <h2>Probabilidad</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mapline chartData={this.state.chartProbabilidad} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default DashStartProbabilidad;


import React, { Component } from 'react';
import axios from 'axios';
import Slider from '../slider';
import '../style.css';
import Mapbar from '../mapa/bar';
import Mapline from '../mapa/line';
import Mappie from '../mapa/pie';

class DashStartPrecio extends Component {
  constructor(){
    super();
    this.state = {
      chartPrecio: {}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    let [contPrecio1, contPrecio2, contPrecio3, contPrecio4, contPrecio5] = [0, 0, 0, 0, 0]
    let labels = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco']
    axios.get('http://10.10.10.35:5000/data').then((res) => {
      
      for (let i = 0; i < res.data.datos.length; i++) {
        if (res.data.datos[i].precio === '1'){
          contPrecio1 += 1
        }else if (res.data.datos[i].precio === '2'){
          contPrecio2 += 1
        }else if (res.data.datos[i].precio === '3'){
          contPrecio3 += 1
        }else if (res.data.datos[i].precio === '4'){
          contPrecio4 += 1
        }else if (res.data.datos[i].precio === '5'){
          contPrecio5 += 1
        }

      }
    localStorage.setItem('bool', true)
    // Ajax calls here
    this.setState({
      chartPrecio: {
        //propiedades dentro del data
        labels: labels,
        datasets: [{
          label: 'Precio',
          //numero de datos
          data: [
            contPrecio1,
            contPrecio2,
            contPrecio3,
            contPrecio4,
            contPrecio5
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
        
        <div className="content-start-grap">
          <div className="widget-header">
            <h2>Precio</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mappie chartData={this.state.chartPrecio} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div>


        <div className="content-start-grap">
          <div className="widget-header">
            <h2>Precio</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mapbar chartData={this.state.chartPrecio} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div> 

        <div className="content-start-grap">
          <div className="widget-header">
            <h2>Precio</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mapline chartData={this.state.chartPrecio} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default DashStartPrecio;


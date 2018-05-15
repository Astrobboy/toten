import React, { Component } from 'react';
import axios from 'axios';
import Slider from '../slider';
import '../style.css';
import Mapbar from '../mapa/bar';
import Mapline from '../mapa/line';
import Mappie from '../mapa/pie';

class DashStartVariedade extends Component {
  constructor(){
    super();
    this.state = {
      chartVariedade: {}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    let [contVariedade1, contVariedade2, contVariedade3, contVariedade4, contVariedade5] = [0, 0, 0, 0, 0]
    let labels = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco']
    axios.get('http://localhost:5000/data').then((res) => {
      
      for (let i = 0; i < res.data.datos.length; i++) {
        if (res.data.datos[i].variedade === '1'){
          contVariedade1 += 1
        }else if (res.data.datos[i].variedade === '2'){
          contVariedade2 += 1
        }else if (res.data.datos[i].variedade === '3'){
          contVariedade3 += 1
        }else if (res.data.datos[i].variedade === '4'){
          contVariedade4 += 1
        }else if (res.data.datos[i].variedade === '5'){
          contVariedade5 += 1
        }

      }
    localStorage.setItem('bool', true)
    // Ajax calls here
    this.setState({
      chartVariedade: {
        //propiedades dentro del data
        labels: labels,
        datasets: [{
          label: 'Variedade',
          //numero de datos
          data: [
            contVariedade1,
            contVariedade2,
            contVariedade3,
            contVariedade4,
            contVariedade5
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
            <h2>Variedade</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mappie chartData={this.state.chartVariedade} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div>


        <div className="content-start-grap">
          <div className="widget-header">
            <h2>Variedade</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mapbar chartData={this.state.chartVariedade} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div> 

        <div className="content-start-grap">
          <div className="widget-header">
            <h2>Variedade</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mapline chartData={this.state.chartVariedade} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default DashStartVariedade;


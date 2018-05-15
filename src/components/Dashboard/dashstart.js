import React, { Component } from 'react';
import axios from 'axios';
import Slider from './slider';
import './style.css';
import Mapbar from './mapa/bar';
import Mapline from './mapa/line';
import Mappie from './mapa/pie';

class DashStart extends Component {
  constructor(){
    super();
    this.state = {
      chartAtencion: {},
      chartCualidade: {}, 
      chartVariedade: {},
      chartPacote: {},
      chartPrecio: {}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    let contAtencion1 = 0,  contQualidade1 = 0, contVariedade1 = 0, contPacote1 = 0, contPrecio1 = 0
    let contAtencion2 = 0,  contQualidade2 = 0, contVariedade2 = 0, contPacote2 = 0, contPrecio2 = 0
    let contAtencion3 = 0,  contQualidade3 = 0, contVariedade3 = 0, contPacote3 = 0, contPrecio3 = 0
    let contAtencion4 = 0,  contQualidade4 = 0, contVariedade4 = 0, contPacote4 = 0, contPrecio4 = 0
    let contAtencion5 = 0,  contQualidade5 = 0, contVariedade5 = 0, contPacote5 = 0, contPrecio5 = 0
    let labels = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco']
    axios.get('http://localhost:5000/data').then((res) => {
      
      for (let i = 0; i < res.data.datos.length; i++) {
        
        if (res.data.datos[i].atendimiento === '1'){
          contAtencion1 += 1
        }else if (res.data.datos[i].atendimiento === '2'){
          contAtencion2 += 1
        }else if (res.data.datos[i].atendimiento === '3'){
          contAtencion3 += 1
        }else if (res.data.datos[i].atendimiento === '4'){
          contAtencion4 += 1
        }else if (res.data.datos[i].atendimiento === '5'){
          contAtencion5 += 1
        }

        if (res.data.datos[i].qualidade === '1'){
          contQualidade1 += 1
        }else if (res.data.datos[i].qualidade === '2'){
          contQualidade2 += 1
        }else if (res.data.datos[i].qualidade === '3'){
          contQualidade3 += 1
        }else if (res.data.datos[i].qualidade === '4'){
          contQualidade4 += 1
        }else if (res.data.datos[i].qualidade === '5'){
          contQualidade5 += 1
        }

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

        if (res.data.datos[i].pacote === '1'){
          contPacote1 += 1
        }else if (res.data.datos[i].pacote === '2'){
          contPacote2 += 1
        }else if (res.data.datos[i].pacote === '3'){
          contPacote3 += 1
        }else if (res.data.datos[i].pacote === '4'){
          contPacote4 += 1
        }else if (res.data.datos[i].pacote === '5'){
          contPacote5 += 1
        }

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
      chartAtencion:{
        //propiedades dentro del data
        labels: labels,
        datasets:[
          {
            label:'Atención',
            //numero de datos
            data:[
              contAtencion1,
              contAtencion2,
              contAtencion3,
              contAtencion4,
              contAtencion5
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)'
            ]
          }
        ]
      },
      chartCualidade: {
        //propiedades dentro del data
        labels: labels,
        datasets: [{
          label: 'Qualidade',
          //numero de datos
          data: [
            contQualidade1,
            contQualidade2,
            contQualidade3,
            contQualidade4,
            contQualidade5
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
      },
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
      },
      chartPacote: {
        //propiedades dentro del data
        labels: labels,
        datasets: [{
          label: 'Pacote',
          //numero de datos
          data: [
            contPacote1,
            contPacote2,
            contPacote3,
            contPacote4,
            contPacote5
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
      },
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
            <h2>Atención 2</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mapline chartData={this.state.chartAtencion} location="Atacado2" legendPosition="bottom"/>
            </div>
          </div>

          <div className="widget-header">
            <h2>Atención 2</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mappie chartData={this.state.chartAtencion} location="Atacado2" legendPosition="bottom"/>
            </div>
          </div>


          <div className="widget-header">
            <h2>Atención</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mapbar chartData={this.state.chartAtencion} location="Atacado" legendPosition="bottom"/>
            </div>
          </div>
        </div>
        
    
        <div className="content-start-grap">
          <div className="widget-header">
            <h2>Cualidade</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mapbar chartData={this.state.chartCualidade} location="Atacado" legendPosition="bottom"/>
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
            <h2>Pacote</h2>
          </div>
          <div className="widget-content">
            <div className='chart'>
              <Mapbar chartData={this.state.chartPacote} location="Atacado" legendPosition="bottom"/>
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
        
      </div>
    );
  }

}

export default DashStart;

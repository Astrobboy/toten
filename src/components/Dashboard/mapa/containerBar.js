import React, { Component } from 'react';
import Mapbar from './bar';

class containerPie extends Component{
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        //propiedades dentro del data
        labels: ['Atnción', 'Pacote', 'Precio', 'nose1', 'nose2', 'Nose3'],
        datasets:[
          {
            label:'Valoración',
            //numero de datos
            data:[
              10,
              15,
              20,
              30,
              3,
              2
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }
  render(){
    return(
      <div className='chart'>
        <Mapbar chartData={this.state.chartData} location="Atacado" legendPosition="bottom"/>
      </div>
    )
  }
}

export default containerPie;
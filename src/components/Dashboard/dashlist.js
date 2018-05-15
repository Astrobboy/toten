import React, { Component } from 'react';
import axios from 'axios';
import Slider from './slider';
import Listatest from './list';
import './style.css';


class DashboardList extends Component {
 constructor(props) {
    super(props);
    this.state = { data: 
      [
        {},
        {}
      ]
    }
 }

 componentDidMount(){
  let array = [];
  axios.get('http://10.10.10.35:5000/data').then((res) => {
    for (let i = 0; i < res.data.datos.length; i++){
      array.push(res.data.datos[i])
    }
    this.setState({data: array})
 
  })
 }

 handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    //this.setState({activePage: pageNumber});
  }

  render() {
    return (
      <div>
        <Slider/>
        <Listatest data={this.state} handlePageChange={this.handlePageChange}/>
      </div>
    );
  }

}

export default DashboardList;


/* state de prueba
this.state = {
  data: [{
      nome: 'William',
      gmail: 'aswili@gamil.com',
      telefone: '0971112476',
      comentario: 'e super boom v e super boom v e super boom e super boom e super boom e super boom e super boom',
      probabilidad: '10',
      conocio: 'Redes Sociales',
      buscaba: 'sim',
      atendimiento: '5',
      qualidade: '5',
      variedade: '5',
      pacote: '5',
      precio: '5'
    },
    {
      nome: 'William',
      gmail: 'aswili@gamil.com',
      telefone: '0971112476',
      comentario: 'e super boom',
      probabilidad: '10',
      conocio: 'Redes Sociales',
      buscaba: 'sim',
      atendimiento: '5',
      qualidade: '5',
      variedade: '5',
      pacote: '5',
      precio: '5'
    }
  ]
}
*/
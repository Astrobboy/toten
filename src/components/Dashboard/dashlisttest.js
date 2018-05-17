import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios';
import Slider from './slider';
import Datado from './listtest';
import './style.css';
 

class DashboardList extends Component {
 constructor(props) {
    super(props);
    this.state = { data: 
      [
        null
      ]
    }
 }

 componentDidMount() {
   let array = [];
   axios.get('http://10.10.10.35:5000/limite/0/1').then((res) => {
     console.log(res.data.datos)
     for (let i = 0; i < res.data.datos.length; i++) {
       array.push(res.data.datos[i])
     }
     this.setState({
       data: array
     })

   })
  }

 componentWillMount(){
  console.log("1")
  let array = [];
  axios.get('http://10.10.10.35:5000/dataclient').then((res) => {
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
        { this.state.data[0] ? <Datado data={this.state} handlePageChange={this.handlePageChange}/> :
         <div className='car-center'><div><p>Cargando...</p></div><div><CircularProgress size={300} thickness={5} /></div></div>}
        
      </div>
    );
  }

}

export default DashboardList;

import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import  Slider  from './slider';
import Datado from './list';
import './style.css';


import * as actions from './../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { firebaseDataBase } from './../../firebase';

class DashboardList extends Component {
  getUsersRef = () => {
    return firebaseDataBase.ref(`users/`)
  }

  constructor(props) {
    super(props)
    const {
      data, showHide
    } = this.props

    this.getUsersRef().on('value', snapshot => {
      const users = snapshot.val()
      let array = [];
      let keys = Object.values(users)

      for (let i = 0; i < keys.length; i++) {
        array.push(keys[i])
      }
      data(array)
      showHide(false)
    });
  }



 handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    //this.setState({activePage: pageNumber});
  }

  render() {
    const { reducerData } = this.props;
    return (
      <div>
        <Slider/>
        { !!reducerData ? <Datado dataArray={reducerData} handlePageChange={this.handlePageChange}/> :
         <div className='car-center'><div><p>Cargando...</p></div><div><CircularProgress size={300} thickness={5} /></div></div>}
    
      </div>
    );
  }

}

const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

const MapStateToProps = ({
  reducerData
}) => ({
  reducerData
})

export default connect(MapStateToProps, MapDispatchToPropsActions)(DashboardList);




/*
 componentWillMount() {
   console.log("1")
  let array = [];
  axios.get('http://10.10.10.35:5000/dataclient').then((res) => {
    for (let i = 0; i < res.data.datos.length; i++){
      array.push(res.data.datos[i])
    }
    this.setState({data: array})
 
  })
 }
*/
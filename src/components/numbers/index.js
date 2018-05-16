import React, { Component } from 'react';
//import Webcam from 'react-webcam';
//import axios from 'axios';

import './style.css';


var cargar = (num) => {
  localStorage.setItem('probabilidad', num);
  window.location.href = '/start'
  /*var data = {'bool':true}
  /*axios({
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      url: 'http://localhost:5000/',
      data: JSON.stringify(data)
    })
    .then(function (res) {
      localStorage.setItem('probabilidad', num);
      //localStorage.setItem('image', image);
      window.location.href = '/start'
    })
    .catch(function (response) {
	console.log(response);
    });*/

}

class Number extends Component {
  
  /*setRef = (webcam) => {
    this.webcam = webcam;
  }*/

  mandar = (e) => {
    //para probar en python
    //const imageSrc = this.webcam.getScreenshot();
    if(e.target.id === "10") {
        cargar(10);
    } else if (e.target.id === "9") {
      cargar(9);
    } else if (e.target.id === "8") {
      cargar(8);
    } else if (e.target.id === "7") {
      cargar(7);
    } else if (e.target.id === "6") {
      cargar(6);
    } else if (e.target.id === "5") {
      cargar(5);
    } else if (e.target.id === "4") {
      cargar(4);
    } else if (e.target.id === "3") {
      cargar(3);
    } else if (e.target.id === "2") {
      cargar(2);
    } else if (e.target.id === "1") {
      cargar(1);
    }
    
  }
  
  render() { 
    return (
      <div className='number'>
        <p className='title'>Qual a probabilidade de voce recomendar a</p>
        <p className='title'> Atacado Games a un amigo?</p>
        <div className='con-label'>
          <p>Extremadamente provável</p>
          <div className='con-label2'/>
          <p>Nada provável</p>
        </div>
        <div className='flo'>
          <div className='num'>
            <div className = "div1" >
              <button id='10' className='but' onClick={this.mandar}>10</button>
            </div>
            <div className="div2">
            <button id='9' className='but' onClick={this.mandar}>9</button>          
            </div>
          </div>
          <div className='num'>
            < div className = "div1" >
              <button id='8' className='but' onClick={this.mandar}>8</button>
            </div>
            <div className="div2">
            <button id='7' className='but' onClick={this.mandar}>7</button>          
            </div>
          </div>
          <div className='num'>
            < div className = "div1" >
              <button id='6' className='but' onClick={this.mandar}>6</button>
            </div>
            <div className="div2">
            <button id='5' className='but' onClick={this.mandar}>5</button>          
            </div>
          </div>
          <div className='num'>
            < div className = "div1" >
              <button id='4' className='but' onClick={this.mandar}>4</button>
            </div>
            <div className="div2">
            <button id='3' className='but' onClick={this.mandar}>3</button>          
            </div>
          </div>
          <div className='num'>
            < div className = "div1" >
              <button id='2' className='but' onClick={this.mandar}>2</button>
            </div>
            <div className="div2">
            <button id='1' className='but' onClick={this.mandar}>1</button>          
            </div>
          </div>
        </div>

        {/*
        <div className="mostrar">
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
          />
        </div>
        */}
      </div>
    );
  }
}

export default Number;

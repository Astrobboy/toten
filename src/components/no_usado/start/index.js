import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import './style.css';

var env_start = (nom, value) => {
  localStorage.setItem(`${nom}`, `${value}`)
}

class Start extends Component {
  start() {
    window.location.href = '/conociste'
  }
  handleStart(e) {
    let atendimiento = 'atendimiento', qualidade = 'qualidade',
      variedade = 'variedade', pacote = 'pacote',
      precio = 'precio';
    if (e.target.id === "radio15"){
      env_start(atendimiento, '5')
    } else if (e.target.id === "radio14") {
      env_start(atendimiento, '4')
    } else if (e.target.id === "radio13") {
      env_start(atendimiento, '3')
    } else if (e.target.id === "radio12") {
      env_start(atendimiento, '2')
    } else if (e.target.id === "radio11") {
      env_start(atendimiento, '1')
    } else if (e.target.id === "radio25") {
      env_start(qualidade, '5')
    } else if (e.target.id === "radio24") {
      env_start(qualidade, '4')
    } else if (e.target.id === "radio23") {
      env_start(qualidade, '3')
    } else if (e.target.id === "radio22") {
      env_start(qualidade, '2')
    } else if (e.target.id === "radio21") {
      env_start(qualidade, '1')
    } else if (e.target.id === "radio35") {
      env_start(variedade, '5')
    } else if (e.target.id === "radio34") {
      env_start(variedade, '4')
    } else if (e.target.id === "radio33") {
      env_start(variedade, '3')
    } else if (e.target.id === "radio32") {
      env_start(variedade, '2')
    } else if (e.target.id === "radio31") {
      env_start(variedade, '1')
    } else if (e.target.id === "radio45") {
      env_start(pacote, '5')
    } else if (e.target.id === "radio44") {
      env_start(pacote, '4')
    } else if (e.target.id === "radio43") {
      env_start(pacote, '3')
    } else if (e.target.id === "radio42") {
      env_start(pacote, '2')
    } else if (e.target.id === "radio41") {
      env_start(pacote, '1')
    } else if (e.target.id === "radio55") {
      env_start(precio, '5')
    } else if (e.target.id === "radio54") {
      env_start(precio, '4')
    } else if (e.target.id === "radio53") {
      env_start(precio, '3')
    } else if (e.target.id === "radio52") {
      env_start(precio, '2')
    } else if (e.target.id === "radio51") {
      env_start(precio, '1')
    }
  }


  render() {
    return (
    <div className='cont-valoration'> 
        <h1>Por favor, avalie os items abaixo:</h1>
          <form className='start-form' action='/enseveremos' method='post'>
            <p className='atri'>Atendimiento: </p>
            <p className="clasificacion">
              <input id="radio15" type="radio" name="atendimiento" value="5"/>
              <label id="radio15" htmlFor="radio15" onClick={this.handleStart}>★</label>
              <input id="radio14" type="radio" name="atendimiento" value="4"/>
              <label id="radio14" htmlFor="radio14" onClick={this.handleStart}>★</label>
              <input id="radio13" type="radio" name="atendimiento" value="3"/>
              <label id="radio13" htmlFor="radio13" onClick={this.handleStart}>★</label>
              <input id="radio12" type="radio" name="atendimiento" value="2"/>
              <label id="radio12" htmlFor="radio12" onClick={this.handleStart}>★</label>
              <input id="radio11" type="radio" name="atendimiento" value="1"/>
              <label id="radio11" htmlFor="radio11" onClick={this.handleStart}>★</label>
            </p><br/>
            <p className='atri'>Qualidade dos Productos: </p>
            <p className="clasificacion">
              <input id="radio25" type="radio" name="qualidade" value="5"/>
              <label id="radio25" htmlFor="radio25" onClick={this.handleStart}>★</label>
              <input id="radio24" type="radio" name="qualidade" value="4"/>
              <label id="radio24" htmlFor="radio24" onClick={this.handleStart}>★</label>
              <input id="radio23" type="radio" name="qualidade" value="3"/>
              <label id="radio23" htmlFor="radio23" onClick={this.handleStart}>★</label>
              <input id="radio22" type="radio" name="qualidade" value="2"/>
              <label id="radio22" htmlFor="radio22" onClick={this.handleStart}>★</label>
              <input id="radio21" type="radio" name="qualidade" value="1"/>
              <label id="radio21" htmlFor="radio21" onClick={this.handleStart}>★</label>
            </p><br/>
            <p className='atri'>Variedade dos productos: </p>
            <p className="clasificacion">
              <input id="radio35" type="radio" name="variedade" value="5"/>
              <label id="radio35" htmlFor="radio35" onClick={this.handleStart}>★</label>
              <input id="radio34" type="radio" name="variedade" value="4"/>
              <label id="radio34" htmlFor="radio34" onClick={this.handleStart}>★</label>
              <input id="radio33" type="radio" name="variedade" value="3"/>
              <label id="radio33" htmlFor="radio33" onClick={this.handleStart}>★</label>
              <input id="radio32" type="radio" name="variedade" value="2"/>
              <label id="radio32" htmlFor="radio32" onClick={this.handleStart}>★</label>
              <input id="radio31" type="radio" name="variedade" value="1"/>
              <label id="radio31" htmlFor="radio31" onClick={this.handleStart}>★</label>
            </p><br/>
            <p className='atri'>Pacote de entregas: </p>
            <p className="clasificacion">
              <input id="radio45" type="radio" name="pacote" value="5"/>
              <label id="radio45" htmlFor="radio45" onClick={this.handleStart}>★</label>
              <input id="radio44" type="radio" name="pacote" value="4"/>
              <label id="radio44" htmlFor="radio44" onClick={this.handleStart}>★</label>
              <input id="radio43" type="radio" name="pacote" value="3"/>
              <label id="radio43" htmlFor="radio43" onClick={this.handleStart}>★</label>
              <input id="radio42" type="radio" name="pacote" value="2"/>
              <label id="radio42" htmlFor="radio42" onClick={this.handleStart}>★</label>
              <input id="radio41" type="radio" name="pacote" value="1"/>
              <label id="radio41" htmlFor="radio41" onClick={this.handleStart}>★</label>
            </p><br/> 
            <p className='atri'>Precio: </p>
            <p className="clasificacion">
              <input id="radio55" type="radio" name="precio" value="5"/>
              <label id="radio55"htmlFor="radio55" onClick={this.handleStart}>★</label>
              <input id="radio54" type="radio" name="precio" value="4"/>
              <label id="radio54"htmlFor="radio54" onClick={this.handleStart}>★</label>
              <input id="radio53" type="radio" name="precio" value="3"/>
              <label id="radio53"htmlFor="radio53" onClick={this.handleStart}>★</label>
              <input id="radio52" type="radio" name="precio" value="2"/>
              <label id="radio52"htmlFor="radio52" onClick={this.handleStart}>★</label>
              <input id="radio51" type="radio" name="precio" value="1"/>
              <label id="radio51"htmlFor="radio51" onClick={this.handleStart}>★</label>
            </p><br/>
            <p>
              <FlatButton color="primary" onClick={this.start}
                icon={<i className="material-icons">done</i>}
                label = 'Enviar'
              />

            </p>
          </form>
        </div> 
    );
  }
}

export default Start;

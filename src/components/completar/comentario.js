import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Keyboard from 'react-material-ui-keyboard';
import { extendedKeyboard } from 'react-material-ui-keyboard/layouts';

import './style.css';
var valores = (nombre, value) =>{
  localStorage.setItem(`${nombre}`, `${value}`)
} 


class Comentario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: ''
    };

    this.onInputComentario = this.handleInputComentario.bind(this);
  }

  handleInputComentario(input) {
    valores('comentario', input)
    this.setState({
      comentario: input
    });
  }
  proximo() {
    window.location.href = '/completar';
  }
    
    
  
  render() {
    return (
      <div id="container">
        <form>
          <div className='contenedor-comentario'>
            <div className='uno'>
              <i className="material-icons">comment</i> 
            </div>
            <div className='dos'>
              <Keyboard
                textField={
                  <TextField
                    id="text"
                    value={this.state.comentario}
                    floatingLabelText="Comentario"
                    multiLine = {true}
                  />
                }
                automatic
                onInputValueChange={this.onInputComentario}
                layouts={[extendedKeyboard]}
                keyboardKeyHeight={50}
                keyboardKeyWidth={100}
                keyboardKeySymbolSize={36}
              />
            </div>

          </div>
          
          <div className='button-comentario'>
            <FlatButton color="primary" onClick={this.proximo}
              icon={<i className="material-icons">check_circle</i>}
              label = 'Proximo'
            />
          </div>
        </form>
      </div>

    );
  }
}

export default Comentario;


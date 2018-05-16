import React, { Component } from 'react';
import './style.css';
import Button from 'material-ui/Button';
import Keyboard from 'react-virtual-keyboard';

var valores = (nombre, value) =>{
  localStorage.setItem(`${nombre}`, `${value}`)
} 


class Comentario extends Component {
  handleValueComentario(e){
    valores('comentario', e)
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
                  id = 'comentario'
                  name='comentario'
                  placeholder='Espaco para comentário'
                  options={{
                      type:"input",
                      layout: "qwerty",
                      alwaysOpen: false,
                      usePreview: false,
                      useWheel: false,
                      stickyShift: false,
                      appendLocally: true,
                      color: "white",
                      updateOnChange: true,
                      initialFocus: true,
                      display: {
                      "accept" : "Aceptar",
                      "cancel": "↑"
                      }
                  }}
                  onChange={this.handleValueComentario}
                  
                  />
            </div>

          </div>
          
          <div className='button-comentario'>
            <Button color="primary" onClick={this.proximo}>
              <i className="material-icons">check_circle</i>
              Proximo
            </Button>
          </div>
        </form>
      </div>

    );
  }
}

export default Comentario;


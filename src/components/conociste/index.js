import React, { Component } from 'react';
import './style.css';

var lugar = (lugar) => {
  localStorage.setItem('conocio', lugar);
  window.location.href = '/encontro'
}

class Conociste extends Component {

  handleConociste(e) {
    if (e.target.id === "redes") {
      lugar('Redes Sociais')
    } else if (e.target.id === "amigos") {
      lugar('Indicacao de amigos')
    } else if (e.target.id === "google") {
      lugar('Google')
    } else if (e.target.id === "panfleto") {
      lugar('Panfleto')
    } else if (e.target.id === "outdoor") {
      lugar('Outdoor')
    } else if (e.target.id === "outros") {
      lugar('Outros')
    }
  }
  
  render() {
    return (
      <div className='prin-co'>
        <p className='titlec'>Como voce conheceu a atacado Games?</p>
        <div className='conociste'>
          <div>
            <button id='redes' className='cono' onClick={this.handleConociste}>Redes Sociais</button>
          </div>
          <div>
            <button id='amigos' className='cono' onClick={this.handleConociste}>Indicacao de amigos</button>
          </div>
          <div>
            <button id='google' className='cono' onClick={this.handleConociste}>Google</button>
          </div>
          <div>
            <button id='panfleto' className='cono' onClick={this.handleConociste}>Panfleto</button>
          </div>
          <div>
            <button id='outdoor' className='cono' onClick={this.handleConociste}>Outdoor</button>
          </div>
          <div>
            <button id='outros' className='cono' onClick={this.handleConociste}>Outros</button>
          </div>

        </div>
      </div>
    );
  }
}

export default Conociste;

import React, { Component } from 'react';
import './style.css';

var sim_nao = (res) => {
  localStorage.setItem('res_procurava', res)
  window.location.href = '/comentario';
}

class Encontro extends Component {
  handleProcurava(e){
    if (e.target.id === 'sim'){
      sim_nao('sim')
    } else if (e.target.id === 'nao') {
      sim_nao('nao')
    }
  }
  render() {
    return (
      <div className='prin-en'>
        <p className='titlec'>Encontrou tudo o que procurava?</p>
        <div className='encontro'>
          <div>
            <button id='sim' className='enco' onClick={this.handleProcurava}>Sim</button>
          </div>
          <div>
            <button id='nao' className='enco' onClick={this.handleProcurava}>Nao</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Encontro;

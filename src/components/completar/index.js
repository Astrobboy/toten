import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Keyboard from 'react-material-ui-keyboard';
import { extendedKeyboard } from 'react-material-ui-keyboard/layouts';


import axios from 'axios';
import './style.css';


const numericKeyboard = [
  ['Escape', '-', 'Backspace'],
  ['7',      '8',         '9'],
  ['4',      '5',         '6'],
  ['1',      '2',         '3'],
  ['0',      '+',     'Enter']
]; 

var valores = (nombre, value) =>{
  localStorage.setItem(`${nombre}`, `${value}`)
} 


class Completar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      nome: '',
      telefone: '',
      gmail: ''
    };
    this.onInputNome = this.handleInputNome.bind(this);
    this.onInputTelefone = this.handleInputTelefone.bind(this);
    this.onInputGmail = this.handleInputGmail.bind(this);
  }

  handleInputNome(input) {
    valores('nome', input)
    this.setState({
      nome: input
    });
  }

  handleInputTelefone(input) {
    valores('telefone', input)
    this.setState({
      telefone: input
    });
  }

  handleInputGmail(input) {
    valores('gmail', input)
    this.setState({
      gmail: input
    });
  }

  
  enviar(){
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    var f = new Date();
    var fecha = diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
    var hora = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();
    var mes = meses[f.getMonth()]
    var anho = f.getFullYear();
    var data = {'nome' : localStorage.getItem('nome'), 'comentario': localStorage.getItem('comentario'),
                'telefone': localStorage.getItem('telefone'), 'gmail': localStorage.getItem('gmail'),
                'probabilidad': localStorage.getItem('probabilidad'), 'conocio': localStorage.getItem('conocio'),
                'res_procurava': localStorage.getItem('res_procurava'), 'atendimiento': localStorage.getItem('atendimiento'),
                'qualidade': localStorage.getItem('qualidade'), 'variedade': localStorage.getItem('variedade'),
                'pacote': localStorage.getItem('pacote'), 'precio': localStorage.getItem('precio'),
                'hora':hora, 'fecha': fecha, 'mes': mes, 'anho':anho
    }
    axios({
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      url: 'http://localhost:5000/data',
      data: JSON.stringify(data)
    }).then((res) =>{
		window.location.href = 'http://localhost:3000/';
	}).catch(function (response) {
        console.log(response);
    });
    
  }
  
  render() {
    return (
      <div id="container">
        <form>

          <div className='contenedor'>
            <div className='uno'>
              <i className="material-icons">account_box</i> 
            </div>
            <div className='dos'>
              <Keyboard
                textField={
                  <TextField
                    id="text"
                    value={this.state.nome}
                    floatingLabelText="Nome"
                  />
                }
                automatic
                onInputValueChange={this.onInputNome}
                layouts={[extendedKeyboard]}
                keyboardKeyHeight={50}
                keyboardKeyWidth={100}
                keyboardKeySymbolSize={36}
              />
            </div>
          </div>

           <div className='divide'></div>

          <div className='contenedor'>
            <div className='uno'>
              <i className="material-icons">settings_cell</i> 
            </div>
            <div className='dos'>
              <Keyboard
                textField={
                  <TextField
                    id="text"
                    value={this.state.telefone}
                    floatingLabelText="Telefone"
                  />
                }
                automatic
                onInputValueChange={this.onInputTelefone}
                layouts={[numericKeyboard]}
                keyboardKeyHeight={50}
                keyboardKeyWidth={100}
                keyboardKeySymbolSize={36}
              />
            </div>
          </div>

           <div className='divide'></div>

          <div className='contenedor'>
            <div className='uno'>
              <i className="material-icons">perm_contact_calendar</i> 
            </div>
            <div className='dos'>
              <Keyboard
                textField={
                  <TextField
                    id="text"
                    value={this.state.gmail}
                    floatingLabelText="Gmail"
                  />
                }
                automatic
                onInputValueChange={this.onInputGmail}
                layouts={[extendedKeyboard]}
                keyboardKeyHeight={50}
                keyboardKeyWidth={100}
                keyboardKeySymbolSize={36}
              />
            </div>
          </div>
    
          <div className='button'>
            <FlatButton color="primary" onClick={this.enviar}
            icon={<i className="material-icons">check_circle</i>}
            label = 'Finalizar'
            />
          </div>
        </form>
      </div>

    );
  }
}

export default Completar;


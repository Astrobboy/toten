import React, { Component } from 'react';
import './style.css';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import axios from 'axios';

var valores = (nombre, value) =>{
  localStorage.setItem(`${nombre}`, `${value}`)
} 


class Completar extends Component {
  handleValue(e){
    if (e.target.name === 'comentario'){
      valores('comentario', e.target.value)
    } else if (e.target.name === 'nome'){
      valores('nome', e.target.value)
    } else if (e.target.name === 'telefone') {
      valores('telefone', e.target.value)
    } else if (e.target.name === 'gmail') {
      valores('gmail', e.target.value)
    }
    
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
      url: 'http://localhost:5000/hello',
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
          <div className='nome'>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <i className="material-icons">comment</i>
              </Grid>
              <Grid item>
                <TextField 
                  name='comentario' 
                  id="input-with-icon-grid"
                  label="Espaco para comentários"
                  multiline={true} 
                  style = {{width: 350}}
                  onChange={this.handleValue}/>
              </Grid>
            </Grid>
          </div>


          <div className='nome'>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <i className="material-icons">account_box</i>
              </Grid>
              <Grid item>
                <TextField 
                  name='nome' 
                  id="input-with-icon-grid" 
                  label="Nome" 
                  style = {{width: 350}}
                  onChange={this.handleValue}
                />
              </Grid>
            </Grid>
          </div>

          <div className='nome'>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <i className="material-icons">settings_cell</i>
              </Grid>
              <Grid item>
                <TextField 
                  name='telefone' 
                  id="input-with-icon-grid" 
                  label="Telefone" 
                  style = {{width: 350}}
                  onChange={this.handleValue}
                />
              </Grid>
            </Grid>
          </div>

          <div className='nome'>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <i className="material-icons">perm_contact_calendar</i>
              </Grid>
              <Grid item>
                <TextField 
                  name='gmail' 
                  id="input-with-icon-grid"
                  label="Gmail"
                  style = {{width: 350}}
                  onChange={this.handleValue}
               />
              </Grid>
            </Grid>
          </div>
          <div className='button'>
            <Button color="primary" onClick={this.enviar}>
              <i className="material-icons">check_circle</i>
              Finalizar
            </Button>
          </div>
        </form>
      </div>

    );
  }
}

export default Completar;

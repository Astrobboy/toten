import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css'; 


/*const handleOnClick = () => {
  this.props.history.push('/startprecio');
}*/


//const Slider = () => (
class Slider extends Component {
  render() {
    const valores = [
      {ruta: '/', icon: 'ballot', name:'Dashboard', key:1},
      {ruta: '/list', icon: 'list', name:'Lista General', key:2},
      {ruta: '/dashprobabilidad', icon: 'assessment', name:'Probabilidad Recomendar', key:3},
      {ruta: '/startatendimiento', icon: 'grade', name:'Gráfico Atendimiento', key:4},
      {ruta: '/startqualidade', icon: 'star_half', name:'Gráfico Qualidade', key:5},
      {ruta: '/startvariedade', icon: 'grade', name:'Gráfico Variedade', key:6},
      {ruta: '/startpacote', icon: 'store', name:'Gráfico de Pacote', key:7},
      {ruta: '/startprecio', icon: 'grade', name:'Gráfico de Precio', key:8},
      {ruta: '/dashconocio', icon: 'create', name:'Conocio', key:9 },
      {ruta: '/dashencontro', icon: 'playlist_add_check', name:'Encontro', key:10 },
      {ruta: '/list', icon: '', name:'  ', key:11 }


    ]
    return (
      <div>
        <section id="sidebar"> 
          <div className="white-label">
          </div> 
          <div id="sidebar-nav">   
            <ul>
              { valores.map(valor => (
                valor.ruta === '/'?
                <li className="active" key={valor.key.toString()}><button className="button" onClick={() => this.props.history.push(valor.ruta)}><i className="material-icons">{valor.icon}</i>{valor.name}</button></li>:
                <li key={valor.key.toString()}><button className="button"  onClick={() => this.props.history.push(valor.ruta)}><i className="material-icons">{valor.icon}</i>{valor.name}</button></li>
              ))

              }
            </ul>
          </div>
        </section>

        <section id="content">
          <div id="header">
            <div className="header-nav">
              <div className="nav">
                <ul>
                  <li className="nav-profile">
                    <div className="nav-profile-image">
                      <img src = "https://4.bp.blogspot.com/-evFQddAcl1s/VziejLK7DvI/AAAAAAAAOjU/rOe2QbZ32BMIe9SUuzAogmDtHCvQQO5rACLcB/s1600/Atacado%2BGames.png"
                      alt = "profile-img"
                      alt = "profile image"/>
                      <div className="nav-profile-name">Atacado<i className="fa fa-caret-down"></i></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="content-header">
              <h1>Dashboard</h1>
              <p>Bienvenido a los datos de su toten.</p>
            </div>
            </div>
          </div>
        </section>
        </div>
    );
  }
}

export default withRouter(Slider)
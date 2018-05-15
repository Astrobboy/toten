import React from 'react';
import './style.css'; 

const Slider = () => {
    return (
      <div>
        <section id="sidebar"> 
          <div className="white-label">
          </div> 
          <div id="sidebar-nav">   
            <ul>
              <li className="active"><a href="/dashboard"><i className="material-icons">ballot</i> Dashboard</a></li>
              <li><a href="/list"><i className="material-icons">list</i> Lista General</a></li>
              <li><a href="/dashprobabilidad"><i className="material-icons">assessment</i> Probabilidad Recomendar</a></li>     
              <li><a href="/startatendimiento"><i className="material-icons">grade</i> Gráfico Atendimiento</a></li>
              <li><a href="/startqualidade"><i className="material-icons">grade</i> Gráfico Qualidade</a></li>
              <li><a href="/startvariedade"><i className="material-icons">grade</i> Gráfico Variedade</a></li>
              <li><a href="/startpacote"><i className="material-icons">store</i> Gráfico de Pacote</a></li>
              <li><a href="/startprecio"><i className="material-icons">grade</i>Gráfico de Precio</a></li>
              <li><a href="/list"><i className="fa fa-users"></i> </a></li>
              <li><a href="/list"><i className="fa fa-calendar-o"></i> </a></li>
              <li><a href="/list"><i className="fa fa-calendar"></i> </a></li>
              <li><a href="/list"><i className="fa fa-calendar"></i> </a></li>
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
                      < img src = "https://4.bp.blogspot.com/-evFQddAcl1s/VziejLK7DvI/AAAAAAAAOjU/rOe2QbZ32BMIe9SUuzAogmDtHCvQQO5rACLcB/s1600/Atacado%2BGames.png"
                      alt = "profile-img"
                      alt = "profile image" / >
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
};


export default Slider;
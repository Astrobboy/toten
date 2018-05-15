import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Start from './components/start';
import Numbers from './components/numbers';
import Conociste from './components/conociste';
import Encontro from './components/encontro';
import Completar from './components/completar';
import Dashboard from './components/Dashboard';
import DashboardList from './components/Dashboard/dashlist';
import containerBar from './components/Dashboard/mapa/containerBar';
import Dashstart from './components/Dashboard/dashstart';
import DashStartAtentimiento from './components/Dashboard/dashstarts/dash_start_atendimiento';
import DashStartQualidade from './components/Dashboard/dashstarts/dash_start_qualidade';
import DashStartVariedade from './components/Dashboard/dashstarts/dash_start_variedade';
import DashStartPacote from './components/Dashboard/dashstarts/dash_start_pacote';
import DashStartPrecio from './components/Dashboard/dashstarts/dash_start_precio';
import DashStartProbabilidad from './components/Dashboard/dashrecomendar';

class App extends Component {
 
  render() {
    return (
      <Router>
          <div className="App">
            <Route exact path="/" component={Numbers} />
            <Route exact path="/start" component={Start} />
            <Route exact path="/conociste" component={Conociste} />
            <Route exact path="/encontro" component={Encontro} />
            <Route exact path="/completar" component={Completar} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/list" component={DashboardList} />
            <Route exact path="/bar" component={containerBar} />
            <Route exact path="/graficostart" component={Dashstart} />
            <Route exact path="/dashprobabilidad" component={DashStartProbabilidad} />
            <Route exact path="/startatendimiento" component={DashStartAtentimiento} />
            <Route exact path="/startqualidade" component={DashStartQualidade} />
            <Route exact path="/startvariedade" component={DashStartVariedade} />
            <Route exact path="/startpacote" component={DashStartPacote} />
            <Route exact path="/startprecio" component={DashStartPrecio} />
          
          </div>
        </Router>
    );
  }
}

export default App;

/*
import Mapa2 from './components/Dashboard/mapa/';
ruta de graficos test
<Route exact path="/mapa" component={Mapa2} />
*/

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




import DashboardList from './components/Dashboard/dashlist';
import DashStartAtentimiento from './components/Dashboard/dashstarts/dash_start_atendimiento';
import DashStartQualidade from './components/Dashboard/dashstarts/dash_start_qualidade';
import DashStartVariedade from './components/Dashboard/dashstarts/dash_start_variedade';
import DashStartPacote from './components/Dashboard/dashstarts/dash_start_pacote';
import DashStartPrecio from './components/Dashboard/dashstarts/dash_start_precio';
import DashStartProbabilidad from './components/Dashboard/dashrecomendar';
import DashConocio from './components/Dashboard/dashconocio';
import DashEncontro from './components/Dashboard/dashencontro';



class App extends Component {
  renderPrecio = () => <DashStartPrecio/>
  renderPacote = () => <DashStartPacote/>

  render() {
    return (
    <MuiThemeProvider>
      <Router>
          <div className="App">

            <Route exact path="/" component={DashboardList} />
            <Route exact path="/list" component={DashboardList} />
            <Route exact path="/dashprobabilidad" component={DashStartProbabilidad} />
            <Route exact path="/startatendimiento" component={DashStartAtentimiento} />
            <Route exact path="/startqualidade" component={DashStartQualidade} />
            <Route exact path="/startvariedade" component={DashStartVariedade} />
            <Route exact path="/startpacote" component={this.renderPacote} />
            <Route exact path="/startprecio" component={this.renderPrecio} /> 
            <Route exact path="/dashconocio" component={DashConocio} />
            <Route exact path="/dashencontro" component={DashEncontro} />
            


          
          </div>
        </Router>
    </MuiThemeProvider>
    );
  }
}


injectTapEventPlugin();

export default App;


/*
import Mapa2 from './components/Dashboard/mapa/';
ruta de graficos test
<Route exact path="/mapa" component={Mapa2} />

forma antigua

import Start from './components/start';
import Numbers from './components/numbers';
import Conociste from './components/conociste';
import Encontro from './components/encontro';
import Comentario from './components/completar/comentario';
import Completar from './components/completar';
import Keybor from './components/test/keyboard';
import containerBar from './components/Dashboard/mapa/containerBar';
import Dashstart from './components/Dashboard/dashstart';



render() {
    return (
    <MuiThemeProvider>
      <Router>
          <div className="App">
            <Route exact path="/" component={Numbers} />
            <Route exact path="/start" component={Start} />
            <Route exact path="/conociste" component={Conociste} />
            <Route exact path="/encontro" component={Encontro} />
            <Route exact path="/comentario" component={Comentario} />
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
            <Route exact path="/key" component={Keybor} />

          </div>
        </Router>
    </MuiThemeProvider>
    );
  }
*/

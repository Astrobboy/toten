import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DashboardList from './components/Dashboard/dashlisttest';



class App extends Component {
 
  render() {
    return (
    <MuiThemeProvider>
      <Router>
          <div className="App">
            <Route exact path="/list" component={DashboardList} />   
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
*/

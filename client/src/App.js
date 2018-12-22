import React, { Component } from 'react';
import SideNavBar from './components/nav/SideNavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Drinking Game App</h1>
              <SideNavBar />
            </header>
          </div>
          <Router>
            <div>
              <Switch>
                <Route exact path='/' component={Home}/>
                {/* <Route exact path='/games/new' component={GameForm} />
                <Route path='/games' component={Games}/> */}
              </Switch>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
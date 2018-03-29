import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import ErrorNotFound from '../NotFound/ErrorNotFound';
import Login from  '../Login/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path='/' exact strict render={
              () => {
                return (<h1> Wesh </h1>);
              }
            } />
            <Route path='/Login' exact strict component={Login}/>
            <Route component={ErrorNotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

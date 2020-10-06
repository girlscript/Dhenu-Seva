import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup/Signup.js';
import Login from './components/Login/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import './App.css';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />

          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

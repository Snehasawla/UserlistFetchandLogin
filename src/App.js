import { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login/login';
import Dashboard from './components/Dashboard/dashboard';
import Preferances from './components/Preferences/preferences';
import useToken from './components/App/useToken';


function App() {
  const {token, setToken} = useToken();
  

  if(!token){
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h2>Application</h2>
      <BrowserRouter>
        <Switch>
          <Route path='/dashboard'>
             <Dashboard />      
          </Route>
          <Route path='/preferences'>
             <Preferances />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

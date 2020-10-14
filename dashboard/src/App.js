import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/screens/Header';
import Menu from './components/screens/Menu';
import Main from './components/screens/Main'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path= "/students/" component={Main} />
      </Switch>
      <Menu />
    </>
  );
}

export default App;

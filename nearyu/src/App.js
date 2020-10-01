import React from 'react';
import './App.css';
import Footer from './components/screens/Footer';
import ProductView from './components/screens/ProductView';
import Products from './components/screens/Products';
import Header from './components/screens/Header';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Products />
      <Switch>
        <Route path="/" component={App} />
        <Route path="/productview" component={ProductView} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

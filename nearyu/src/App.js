import React from 'react';
import './App.css';
import Footer from './components/screens/Footer';
import ProductView from './components/screens/ProductView';
import Banner from './components/screens/Banner';
import Header from './components/screens/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Products from './components/screens/Products';

function App() {
    return (
        <>
            <Header />
            <Banner />
            <Switch>
                <Route exact path="/" component= {Home} />
                <Route path="/home/" component = {Home} />
                <Route path="/productview/" component = {ProductView} />
                <Route path="/products/" component = {Products} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;

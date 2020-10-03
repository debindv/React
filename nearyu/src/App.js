import React from 'react';
import './App.css';
import Footer from './components/screens/Footer';
import ProductView from './components/screens/ProductView';
import Banner from './components/screens/Banner';
import { Switch, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Products from './components/screens/Products';
import SignUp from './components/screens/auth/SignUp';
import Login from './components/screens/auth/Login';
import Verification from './components/screens/auth/Verification';
import Header from './components/screens/Header';

function App() {
    return (
        <>
            <Header/>
            <Banner />
            <Switch>
                <Route exact path="/" component= {Home} />
                <Route path="/home/" component = {Home} />
                <Route path="/productview/" component = {ProductView} />
                <Route path="/products/" component = {Products} />
                <Route path="/login/" component = {Login} />
                <Route path="/signup/" component = {SignUp} />
                <Route path="/verification/" component = {Verification} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;

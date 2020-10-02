import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductView from '../screens/ProductView';
import Footer from '../screens/Footer';
import Banner from '../screens/Banner';
import Header from '../screens/Header';
import OnSale from '../screens/OnSale'

const Normal = () => {
    return (
        <>  
            <Header />
            <Banner />
            <Switch>
                <Route path="/home/" component={OnSale} />
                <Route path="/productview/" component={ProductView} />
            </Switch>
            <Footer />
        </>
    )
}

export default Normal;


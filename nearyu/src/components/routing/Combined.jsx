import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductView from '../includes/ProductViewHead';
import Blank from '../routing/Blank';
import Normal from '../routing/Normal';

const Combined = () => {
    return(
        <Switch>
            <Route path="/home/" component={Normal} /> 
            <Route path="/productview/" component = {ProductView} />
        </Switch>
    )
}

export default Combined;
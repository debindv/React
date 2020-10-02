import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';

const Blank = () => {
    return (
        <>
            <Switch>
                <Route path="/home/" component={Home} />
            </Switch>
        </>
    )
}

export default Blank;
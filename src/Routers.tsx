import React from 'react';
import { Route, Switch } from 'react-router';
import {MainPage} from './pages';

export const Routers = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
        </Switch>
    );
};
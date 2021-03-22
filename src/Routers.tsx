import React from 'react';
import { Route, Switch } from 'react-router';
import { KpiPage } from './pages';

export const Routers = () => {
    return (
        <Switch>
            <Route exact path="/" component={KpiPage} />
        </Switch>
    );
};
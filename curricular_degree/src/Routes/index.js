import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';

export default function Routes() {

    return (
        <BrowserRouter>

            <Switch>
                <Route path="/" exact>
                    <Redirect to="/login" />
                </Route>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>

        </BrowserRouter>
    )
}
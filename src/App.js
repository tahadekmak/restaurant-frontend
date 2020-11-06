import React from "react";
import { styled } from '@material-ui/core/styles';
import theme from "./theme";
import Home from "./Home";
import {Route, Switch, Redirect, BrowserRouter} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Redirect exact from="/home" to="/home/Restaurants" />
                <Route exact path="/home/:page?" render={props => <Home {...props} />} />
            </Switch>
        </BrowserRouter>

    );
}

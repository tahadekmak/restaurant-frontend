import React from "react";
import Home from "./Pages/Home";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/home"/>
                <Redirect exact from="/home" to="/home/Restaurants"/>
                <Route exact path="/home/:page?" render={props => <Home {...props} />}/>
            </Switch>
        </BrowserRouter>

    );
}

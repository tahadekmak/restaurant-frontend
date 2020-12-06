import React from "react";
import Home from "./Pages/Home";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Test from "./Pages/Test";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home/:page?" render={props => <Home {...props} />}/>
                <Route exact path="/test/:id" render={props => <Test {...props} />}/>
            </Switch>
        </BrowserRouter>
    );
}

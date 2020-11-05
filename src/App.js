import React from "react";
import {Tabs, Tab, AppBar, createMuiTheme} from "@material-ui/core";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Restaurants from "./Restaurants";
import Visited from "./Visited";
import {ThemeProvider} from "@material-ui/styles";
import green from "@material-ui/core/colors/green";
import { styled } from '@material-ui/core/styles';

export default function App() {

    const routes = ["/Restaurants", "/Visited"];

    const MyTheme = createMuiTheme({
        palette: {
            primary: {
                main: green[500],
            },
            secondary: {main:'rgb(255,255,255)',
            },
        },
    });

    const MyTabs = styled(Tabs)({
        background: "primary",
        border: 0,
        borderRadius: 3,
        color: 'white',
    });

    const MyTitle = styled("h2")({
        display: 'flex',
        background: "primary",
        border: 0,
        color: 'white',
        paddingLeft: '20px',
        paddingRight: '60px',
        userSelect: 'none'
    });

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        background: MyTheme
    }

    return (
        <ThemeProvider theme={MyTheme}>
            <div className="App">
                <BrowserRouter>
                    <Route
                        path="/"
                        render={(history) => (
                            <AppBar>
                                <div style = {divStyle}>
                                    <MyTitle>Restos</MyTitle>
                                <MyTabs
                                    value={
                                        history.location.pathname !== "/"
                                            ? history.location.pathname
                                            : routes[0]
                                    }
                                >
                                    {console.log(history.location.pathname)}
                                    <Tab
                                        value={routes[0]}
                                        label="Restaurants"
                                        component={Link}
                                        to={routes[0]}
                                    />
                                    <Tab
                                        value={routes[1]}
                                        label="Visited"
                                        component={Link}
                                        to={routes[1]}
                                    />
                                </MyTabs>
                                </div>
                            </AppBar>
                        )}
                    />

                    <Switch>
                        <Route path="/Restaurants" component={Restaurants} />
                        <Route path="/Visited" component={Visited} />
                    </Switch>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}
import React from "react";
import {ThemeProvider} from "@material-ui/styles";
import theme from "./theme";
import {AppBar, Tab, Tabs} from "@material-ui/core";
import Restaurants from "./Restaurants";
import Visited from "./Visited";
import {styled} from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from 'prop-types';
import Toolbar from "@material-ui/core/Toolbar";

const Home = props => {
    const {match, history} = props;
    const {params} = match;
    const {page} = params;

    const tabNameToIndex = {
        0: "Restaurants",
        1: "Visited"
    };

    const indexToTabName = {
        Restaurants: 0,
        Visited: 1
    };

    const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

    const handleChange = (event, newValue) => {
        history.push(`/home/${tabNameToIndex[newValue]}`);
        setSelectedTab(newValue);
    };

    const MyTitle = styled("h2")({
        display: 'flex',
        background: "primary",
        border: 0,
        paddingLeft: '20px',
        paddingRight: '60px',
        userSelect: 'none'
    });

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        background: theme
    }

    function HideOnScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({ target: window ? window() : undefined });

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    return (
        <ThemeProvider theme={theme}>
            <>
                <CssBaseline />
                <HideOnScroll  {...props}>
                <AppBar>
                    <div style={divStyle}>
                        <MyTitle>Resto</MyTitle>
                        <Tabs value={selectedTab} onChange={handleChange}>
                            <Tab label="Restaurants"/>
                            <Tab label="Visited"/>
                        </Tabs>
                    </div>
                </AppBar>
                </HideOnScroll>
                <Toolbar />
                {selectedTab === 0 && <Restaurants/>}
                {selectedTab === 1 && <Visited/>}
            </>
        </ThemeProvider>
    );
};

export default Home;
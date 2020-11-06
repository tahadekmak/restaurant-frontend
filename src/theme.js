import { createMuiTheme } from '@material-ui/core/styles';

import {grey, deepPurple, amber, yellow} from '@material-ui/core/colors';
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({

    palette: {
        primary: {
            main: green[500],
            contrastText: 'rgb(255,255,255)'
        },
        secondary: {
            main: 'rgb(255,255,255)'
        },
    },
});

theme.props = {

    MuiButton: {
        disableElevation: true,
    },

    MuiTab: {
        background: "primary",
        border: 0,
        borderRadius: 3,   },

};

export default theme;
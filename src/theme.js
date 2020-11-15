import {createMuiTheme} from '@material-ui/core/styles';

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
        color: "primary"
    },

    MuiTab: {
        background: "primary",
        border: 0,
    },

    MuiAlert: {
        variant: "filled"
    }
};

export default theme;
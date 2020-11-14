import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import image1 from "../images/image1.jpg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import PublicIcon from "@material-ui/icons/Public";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import DialogActions from "@material-ui/core/DialogActions";
import {Button} from "@material-ui/core";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import CardMedia from "@material-ui/core/CardMedia";
import {getDateForPost} from "./DateConverter";

const RestaurantDialog = (props) => {

    const dispatch = useDispatch();
    const visits = useSelector(state => state.visits.visits);
    const loadingVisits = useSelector(state => state.visits.loading);
    const visitsError = useSelector(state => state.visits.error);
    const successSnackbarOpen = useSelector(state => state.visits.successSnackbarOpen);
    const errorSnackbarOpen = useSelector(state => state.visits.errorSnackbarOpen);

    const closeDialog = () => {
        props.parentCallback("");
        //event.preventDefault();
    };

    const clearSnackbar = () => {
        dispatch({ type: "POST_VISIT_CLEAR" });
    };

    const createVisitClicked = () => {

        const personID = "1";
        const restaurantID = props.restaurant.id.toString();
        const date = getDateForPost();

        const visitData = {
            personID,
            restaurantID,
            date
        }

        dispatch({type: 'POST_VISIT_REQUESTED', data: {visitData}});
        closeDialog();
    }

    return (
        <div>
            <Snackbar
                open={errorSnackbarOpen}
                autoHideDuration={1000}
                onClose={clearSnackbar}>
                <Alert variant="filled" severity="error">{visitsError}</Alert>
            </Snackbar>
            <Snackbar
                open={successSnackbarOpen}
                autoHideDuration={1000}
                onClose={clearSnackbar}>
                <Alert variant="filled" severity="success">You Checked in!</Alert>
            </Snackbar>

        <Dialog aria-labelledby="customized-dialog-title"
                open={props.dialogState}
                onClose={closeDialog}>

            <DialogContent dividers>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <div>
                                    <div>
                                        <ButtonBase>
                                            <img
                                                height="300px"
                                                src={`data:image/jpg;base64,${props.restaurant.image}`}
                                                alt={""}/>
                                        </ButtonBase>
                                    </div>
                                    <div>
                                        <List>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <RestaurantIcon/>
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary="Name" secondary={props.restaurant.name}/>
                                            </ListItem>
                                            <Divider/>

                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <PublicIcon/>
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary="Type" secondary={props.restaurant.category }/>
                                            </ListItem>
                                            <Divider/>

                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <AttachMoneyIcon/>
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary="Average Cost"
                                                              secondary={props.restaurant.averageCost + " L.L. for 2 persons"}/>
                                            </ListItem>
                                            <Divider/>

                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <LocationOnIcon/>
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary="Address" secondary={props.restaurant.address}/>
                                            </ListItem>
                                            <Divider/>

                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <CallIcon/>
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary="Call us" secondary={props.restaurant.phoneNumber}/>
                                            </ListItem>
                                        </List>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={closeDialog}>
                    Close
                </Button>
                <Button color="primary" onClick={createVisitClicked}>
                    Check in
                </Button>

            </DialogActions>
        </Dialog>
        </div>

    )

}

export default RestaurantDialog;
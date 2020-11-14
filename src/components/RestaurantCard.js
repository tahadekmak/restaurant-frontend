import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import image1 from "../images/image1.jpg";
import CardActions from "@material-ui/core/CardActions";
import {Button} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {getDateForPost} from "./DateConverter";

const RestaurantCard = (props) => {

    const dispatch = useDispatch();
    const visits = useSelector(state => state.visits.visits);
    const loadingVisits = useSelector(state => state.visits.loading);
    const visitsError = useSelector(state => state.visits.error);
    const successSnackbarOpen = useSelector(state => state.visits.successSnackbarOpen);
    const errorSnackbarOpen = useSelector(state => state.visits.errorSnackbarOpen);

    const openDialog = (event) => {
        console.log(props.restaurant.id);
        props.parentCallback(props.restaurant.id);
        event.preventDefault();
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

                    <Card elevation={5} style={{width: "300px"}}>

                        <CardActionArea onClick={openDialog}>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h3">
                                    {props.restaurant.name}
                                </Typography>
                            </CardContent>

                            <CardMedia
                                component="img"
                                alt="Image not available"
                                height="170"
                                image={`data:image/jpg;base64,${props.restaurant.image}`}
                                title="image"
                            />

                        </CardActionArea>
                        <CardActions style={{float: "right"}}>
                            <Button color="primary" onClick={createVisitClicked}>
                                Check in
                            </Button>
                        </CardActions>
                    </Card>
        </div>

    )
}

export default RestaurantCard;
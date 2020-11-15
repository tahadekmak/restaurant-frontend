import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import {Button} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {useDispatch, useSelector} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {getDateForPost} from "./DateConverter";
import React from "react";
import './Components.css';

const RestaurantCard = (props) => {

    const dispatch = useDispatch();
    const visitsError = useSelector(state => state.visits.error);
    const successSnackbarOpen = useSelector(state => state.visits.successSnackbarOpen);
    const errorSnackbarOpen = useSelector(state => state.visits.errorSnackbarOpen);

    const openDialog = (event) => {
        props.parentCallback(props.restaurant.id);
        event.preventDefault();
    };

    const clearSnackbar = () => {
        dispatch({type: "POST_VISIT_CLEAR"});
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
            <Card elevation={5} className="restaurantCard">

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
                <CardActions className="cardActions">
                    <Button onClick={createVisitClicked}>
                        Check in
                    </Button>
                </CardActions>
            </Card>

            <Snackbar
                open={errorSnackbarOpen}
                autoHideDuration={1000}
                onClose={clearSnackbar}>
                <Alert severity="error">{visitsError}</Alert>
            </Snackbar>
            <Snackbar
                open={successSnackbarOpen}
                autoHideDuration={1000}
                onClose={clearSnackbar}>
                <Alert severity="success">You Checked in!</Alert>
            </Snackbar>

        </div>
    )
}

export default RestaurantCard;
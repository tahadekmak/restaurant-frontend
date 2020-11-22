import React, {useEffect, useState} from "react";
import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "../components/Pagination";
import RestaurantDialog from "../components/RestaurantDialog";
import RestaurantCard from "../components/RestaurantCard";
import {useDispatch, useSelector} from "react-redux";
import ColoredLinearProgress from "../components/ColoredLinearProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import SearchControllers from "../components/SearchControllers";

export default function Restaurants() {

    const dispatch = useDispatch();
    const restaurants = useSelector(state => state.restaurants.restaurants);
    const loadingRestaurants = useSelector(state => state.restaurants.loading);
    const restaurantsError = useSelector(state => state.restaurants.error);
    const restaurantErrorSnackbarOpen = useSelector(state => state.restaurants.errorSnackbarOpen);

    const PER_PAGE = 4;
    const dataCount = Math.ceil(restaurants.length / PER_PAGE);

    useEffect(() => {
        dispatch({type: 'GET_ALL_CATEGORIES_REQUESTED'})
    }, [dispatch])

    let [page, setPage] = useState(1);

    const _DATA = usePagination(restaurants, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    const [dialogID, setDialogID] = React.useState("");
    const handleCardCallback = (childData) => {
        setDialogID(childData)
    };
    const handleDialogCallback = (childData) => {
        setDialogID(childData)
    };

    const clearSnackbar = () => {
        dispatch({type: "GET_BY_NAME_RESTAURANTS_CLEAR"});
        dispatch({type: "GET_BY_CATEGORY_RESTAURANTS_CLEAR"});
    };

    return (
        <ThemeProvider theme={theme}>

            <div>

                <div>
                    {loadingRestaurants && <ColoredLinearProgress/>}
                </div>

                <div className="resPageContainer">

                    <div>
                        <SearchControllers/>
                    </div>

                    <Grid container
                          justify={'center'}
                          alignContent={'center'}
                          spacing={5}
                    >
                        <>
                            {restaurants.length === 0 && !loadingRestaurants &&
                            <h1>Search Restaurants by Name or Category</h1>}
                            {restaurants.length > 0 && _DATA.currentData().map((restaurant) => (
                                <Grid item key={restaurant.id}>

                                    <RestaurantCard restaurant={restaurant} parentCallback={handleCardCallback}/>

                                </Grid>

                            ))}
                        </>

                    </Grid>
                    <Grid container
                          justify={'center'}
                          alignContent={'center'}
                          spacing={5}
                    >
                        <Grid item>
                            {restaurants.length > 0 && <Pagination
                                count={dataCount}
                                size="large"
                                page={page}
                                variant="outlined"
                                shape="rounded"
                                onChange={handleChange}
                            />}

                        </Grid>
                    </Grid>

                    <div>{restaurants.filter(res => res.id === parseInt(dialogID)).map(restaurant => (

                        <RestaurantDialog key={restaurant.id} dialogState={parseInt(dialogID) > 0}
                                          restaurant={restaurants.length > 0 && restaurant}
                                          parentCallback={handleDialogCallback}/>
                    ))}

                    </div>

                </div>

                <Snackbar
                    open={restaurantErrorSnackbarOpen}
                    autoHideDuration={1000}
                    onClose={clearSnackbar}>
                    <Alert variant="filled" severity="error">{restaurantsError}</Alert>
                </Snackbar>

            </div>
        </ThemeProvider>
    );
}

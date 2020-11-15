import React, {useEffect, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "../components/Pagination";
import RestaurantDialog from "../components/RestaurantDialog";
import RestaurantCard from "../components/RestaurantCard";
import {useDispatch, useSelector} from "react-redux";
import ColoredLinearProgress from "../components/ColoredLinearProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export default function Restaurants() {

    const [restaurantName, setRestaurantName] = useState("");
    const handleNameTextFieldChange = event => {
        setRestaurantName(event.target.value);
    }

    const [value, setValue] = React.useState(null);
    const [restaurantCategory, setRestaurantCategory] = React.useState('');

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories1.categories1);
    const loadingCategories = useSelector(state => state.categories1.loading);
    const categoriesError = useSelector(state => state.categories1.error);
    const categoryErrorSnackbarOpen = useSelector(state => state.categories1.errorSnackbarOpen);

    const restaurants = useSelector(state => state.restaurants.restaurants);
    const loadingRestaurants = useSelector(state => state.restaurants.loading);
    const restaurantsError = useSelector(state => state.restaurants.error);
    const restaurantErrorSnackbarOpen = useSelector(state => state.restaurants.errorSnackbarOpen);

    const PER_PAGE = 4;
    const dataCount = Math.ceil(restaurants.length / PER_PAGE);

    useEffect(() => {
        dispatch({type: 'GET_ALL_CATEGORIES_REQUESTED'})
    }, [dispatch])

    const getRestaurantsByNameClicked = () => {
        if (restaurantName.length > 0)
            dispatch({type: 'GET_BY_NAME_RESTAURANTS_REQUESTED', name: {restaurantName}});
    }

    const getRestaurantsByCategoryClicked = () => {
        let restaurantCategoryID = 0;
        categories.filter(res => res.name === restaurantCategory).map(restaurant => (
            restaurantCategoryID = restaurant.id));

        dispatch({type: 'GET_BY_CATEGORY_RESTAURANTS_REQUESTED', categoryID: {restaurantCategoryID}});
    }

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
        dispatch({type: "GET_ALL_CATEGORIES_CLEAR"});
        dispatch({type: "GET_BY_NAME_RESTAURANTS_CLEAR"});
        dispatch({type: "GET_BY_CATEGORY_RESTAURANTS_CLEAR"});
    };

    return (
        <ThemeProvider theme={theme}>

            <div>

                <div>
                    {(loadingRestaurants || loadingCategories) && <ColoredLinearProgress/>}
                </div>

                <div className="resPageContainer">

                    <div>
                        <Grid container
                              justify={'center'}
                              alignContent={'center'}
                              spacing={5}
                        >
                            <Grid item>
                                <div className="controllerContainer">
                                    <TextField
                                        label="Search in Restaurants"
                                        margin="normal"
                                        variant="outlined"
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') getRestaurantsByNameClicked();
                                        }}
                                        value={restaurantName}
                                        onChange={handleNameTextFieldChange}/>

                                    <div className="buttonContainer">
                                        <Button variant="contained"
                                                onClick={getRestaurantsByNameClicked}>Search</Button>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item>
                                <div className="controllerContainer">
                                    <Autocomplete
                                        id="dropDownAutoComplete"
                                        value={value}
                                        className="autoComplete"
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') getRestaurantsByCategoryClicked();
                                        }}
                                        inputValue={restaurantCategory}
                                        onInputChange={(event, newInputValue) => {
                                            setRestaurantCategory(newInputValue);
                                        }}
                                        options={categories.map((option) => option.name)}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Search by Category"
                                                margin="normal"
                                                variant="outlined"/>
                                        )}
                                    />
                                    <div className="buttonContainer">

                                        <Button className="buttonContainer" variant="contained"
                                                onClick={getRestaurantsByCategoryClicked}>Search</Button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
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
                    open={categoryErrorSnackbarOpen}
                    autoHideDuration={1000}
                    onClose={clearSnackbar}>
                    <Alert variant="filled" severity="error">{categoriesError}</Alert>
                </Snackbar>
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

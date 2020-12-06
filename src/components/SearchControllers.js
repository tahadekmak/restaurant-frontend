import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {useDispatch, useSelector} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import ColoredLinearProgress from "./ColoredLinearProgress";

const SearchControllers = (props) => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories1.categories1);
    const loadingCategories = useSelector(state => state.categories1.loading);
    const categoriesError = useSelector(state => state.categories1.error);
    const categoryErrorSnackbarOpen = useSelector(state => state.categories1.errorSnackbarOpen);

    const [restaurantName, setRestaurantName] = useState("");
    const handleNameTextFieldChange = event => {
        setRestaurantName(event.target.value);
    }

    const [value, setValue] = React.useState(null);
    const [restaurantCategory, setRestaurantCategory] = React.useState('');

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

    const clearSnackbar = () => {
        dispatch({type: "GET_ALL_CATEGORIES_CLEAR"});
    };

    return (
        <div>

            <div>
                {loadingCategories && <ColoredLinearProgress/>}
            </div>

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
                            className="autoComplete"
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

            <Snackbar
                open={categoryErrorSnackbarOpen}
                autoHideDuration={1000}
                onClose={clearSnackbar}>
                <Alert variant="filled" severity="error">{categoriesError}</Alert>
            </Snackbar>
        </div>
    );
}

export default SearchControllers;

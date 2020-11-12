import React, {useCallback, useEffect, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {ThemeProvider} from "@material-ui/styles";
import theme from "./theme";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "./Pagination";
import RestaurantDialog from "./components/RestaurantDialog";
import RestaurantCard from "./components/RestaurantCard";
import {useDispatch, useSelector} from "react-redux";
import ColoredLinearProgress from "./components/ColoredLinearProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export default function Restaurants() {

    const divstyle1 = {
        minWidth: '200px',
    }

    const divstyle2 = {
        display: 'flex',  justifyContent:'center', alignItems:'center',
    padding: "5px"}

    const buttonStyle = {
        margin: "10px"
    }

    const divstyle3 = {
     padding: "40px"
}

    const categories = [
        "American",
        "Turkish",
        "Lebanese",
        "Italian"
    ];

    const [restaurantName, setRestaurantName] = useState("");
    const handleNameTextFieldChange = event => {setRestaurantName(event.target.value);}

    const [value, setValue] = React.useState(null);
    const [restaurantCategory, setRestaurantCategory] = React.useState('');

    const dispatch = useDispatch();
    const restaurants = useSelector(state => state.restaurants.restaurants);
    const loading = useSelector(state => state.restaurants.loading);
    const error = useSelector(state => state.restaurants.error);

    const PER_PAGE = 4;
    const dataCount = Math.ceil(restaurants.length / PER_PAGE);

    const getRestaurantsByNameClicked = () => {
        dispatch({type: 'GET_BY_NAME_RESTAURANTS_REQUESTED', name: {restaurantName}});
    }

    const getRestaurantsByCategoryClicked = () => {
        dispatch({type: 'GET_BY_CATEGORY_RESTAURANTS_REQUESTED', category: {restaurantCategory}});
    }

    let [page, setPage] = useState(1);

    const _DATA = usePagination(restaurants, PER_PAGE);

    const handleChange = (e, p) => {
        console.log(dataCount);
        setPage(p);
        _DATA.jump(p);
    };

    return (
        <ThemeProvider theme={theme}>

            <div>
                {loading && <ColoredLinearProgress />}

            </div>

            <div style={divstyle3}>

            <div >
                <Grid container
                      justify={'center'}
                      alignContent={'center'}
                      spacing={5}
                >
                    <Grid item>
                        <div style={divstyle2}>
                        <TextField
                            label="Search in Restaurants"
                            margin="normal"
                            variant="outlined"
                            value={restaurantName}
                            onChange={handleNameTextFieldChange}/>
                        <Button style={buttonStyle} variant="contained"  color="primary" onClick={getRestaurantsByNameClicked}>Search</Button>
                        </div>
                    </Grid>

                    <Grid item>
                        <div style={divstyle2}>
                            <Autocomplete
                                id="dropDownAutoComplete"
                                Choose Category
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                inputValue={restaurantCategory}
                                onInputChange={(event, newInputValue) => {
                                    setRestaurantCategory(newInputValue);
                                }}
                                options={categories.map((option) => option)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        style={divstyle1}
                                        label="Search by Category"
                                        margin="normal"
                                        variant="outlined"/>
                                )}
                            />
                            <Button style={buttonStyle} variant="contained" color="primary" onClick={getRestaurantsByCategoryClicked}>Search</Button>
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
                        {restaurants.length === 0 && !loading && <h1>Search Restaurants by Name or Category</h1>}
                        {restaurants.length > 0 && _DATA.currentData().map((restaurant) => (
                            <Grid item
                                  justify={'center'}
                                  alignContent={'center'}>

                                <RestaurantCard  key={restaurant.id} restaurant={restaurant}/>

                            </Grid>

                        ))}
                    </>

                </Grid>

                <Grid container
                      justify={'center'}
                      alignContent={'center'}
                      spacing={5}
                >
                    <Grid item
                          justify={'center'}
                          alignContent={'center'}>
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

                <RestaurantDialog />
            </div>
            <div>
                <Snackbar open={error && !loading} autoHideDuration={3000}>
                    <Alert variant="filled" severity="error">{error} !</Alert>
                </Snackbar>
            </div>
        </ThemeProvider>
    );
}

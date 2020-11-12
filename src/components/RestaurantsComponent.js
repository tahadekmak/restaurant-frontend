import React, {useCallback, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getAllRestaurants} from "../redux/actions/restaurants";
import RestaurantCard from "./RestaurantCard";
import {Grid} from "@material-ui/core";

const RestaurantsComponent = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(state => state.restaurants.restaurants);
    const loading = useSelector(state => state.restaurants.loading);
    const error = useSelector(state => state.restaurants.error);

    const [visibility, setVisibility] = useState(false);

    const getAllRestaurantsClicked = useCallback(
        () => dispatch(getAllRestaurants()),
        [dispatch]
    );


    return (
        <>
            {restaurants.loading && <p>Loading...</p>}
            {restaurants.length === 0 && !loading && <p>No users available!</p>}
            {restaurants && !loading && <p>{error}</p>}
            {restaurants.length > 0 && restaurants.map((restaurant) => (
                <Grid item
                      justify={'center'}
                      alignContent={'center'}>

                <RestaurantCard  key={restaurant.id} restaurant={restaurant}/>

                </Grid>

            ))}
        </>
    )
}

export default RestaurantsComponent;
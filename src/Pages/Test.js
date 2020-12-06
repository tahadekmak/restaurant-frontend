import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {useDispatch, useSelector} from "react-redux";
import Helmet from "react-helmet";

const Test = (props) => {

    const {match, history} = props;
    const {params} = match;
    const {id} = params;

    const dispatch = useDispatch();
    const restaurants = useSelector(state => state.restaurants.restaurants);

    useEffect(() => {
        dispatch({type: 'GET_BY_ID_RESTAURANT_REQUESTED', id: {id}});
    }, [dispatch])

    console.log(restaurants);
    return (
        <div>

            <Helmet>
                <title>{restaurants.name}</title>
                <meta name="title" content="aabbiifdh78ffdaafe"/>
                <meta name="description" content={restaurants.address}/>
            </Helmet>
            {restaurants.name}
        </div>

    )
}

export default Test;
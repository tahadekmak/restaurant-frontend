import { combineReducers } from 'redux';
import persons from './persons';
import restaurants from "./restaurants";
import visits from "./visits";

const rootReducer = combineReducers({
    persons: persons,
    restaurants: restaurants,
    visits: visits
});

export default rootReducer;
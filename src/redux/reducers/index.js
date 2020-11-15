import {combineReducers} from 'redux';
import persons from './persons';
import restaurants from "./restaurants";
import visits from "./visits";
import categories1 from "./categories1";

const rootReducer = combineReducers({
    persons: persons,
    restaurants: restaurants,
    visits: visits,
    categories1: categories1
});

export default rootReducer;
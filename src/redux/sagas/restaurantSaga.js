import {call, put, takeEvery} from 'redux-saga/effects'
import axios from 'axios';

function* getAllRestaurants() {
    try {
        const url = `http://localhost:8080/api/v1/restaurant`;
        const restaurants = yield call(axios.get, url);
        yield put({type: 'GET_ALL_RESTAURANTS_SUCCESS', restaurants: restaurants.data});
    } catch (e) {
        yield put({type: 'GET_ALL_RESTAURANTS_FAILED', message: e.message});
    }
}

function* getRestaurantsByName(action) {
    try {
        const url = `http://localhost:8080/api/v1/restaurantsByName/${action.name.restaurantName}`;
        const restaurants = yield call(axios.get, url);
        yield put({type: 'GET_BY_NAME_RESTAURANTS_SUCCESS', restaurants: restaurants.data});
    } catch (e) {
        yield put({type: 'GET_BY_NAME_RESTAURANTS_FAILED', message: e.message});
    }
}

function* getRestaurantsByCategory(action) {
    try {
        const url = `http://localhost:8080/api/v1/restaurantsByCategoryID/${action.categoryID.restaurantCategoryID}`;
        const restaurants = yield call(axios.get, url);
        yield put({type: 'GET_BY_CATEGORY_RESTAURANTS_SUCCESS', restaurants: restaurants.data});
    } catch (e) {
        yield put({type: 'GET_BY_CATEGORY_RESTAURANTS_FAILED', message: e.message});
    }
}

function* getRestaurantById(action) {
    try {
        const url = `http://localhost:8080/api/v1/restaurant/${action.id}`;
        const restaurant = yield call(axios.get, url);
        yield put({type: 'GET_BY_ID_RESTAURANT_SUCCESS', restaurant: restaurant.data});
    } catch (e) {
        yield put({type: 'GET_BY_ID_RESTAURANT_FAILED', message: e.message});
    }
}

function* createRestaurant(action) {
    try {
        const url = `http://localhost:8080/api/v1/restaurant/category/${action.categoryId}`;
        yield call(axios.post, url, action.value);
        yield put({type: 'POST_RESTAURANT_SUCCESS'});
    } catch (e) {
        yield put({type: 'POST_RESTAURANT_FAILED', message: e.message,});
    }
}

function* updateRestaurant(action) {
    try {
        const url = `http://localhost:8080/api/v1/restaurant/${action.id}/category/${action.categoryId}`;
        yield call(axios.put, url, action.value);
        yield put({type: 'PUT_RESTAURANT_SUCCESS'});
    } catch (e) {
        yield put({type: 'PUT_RESTAURANT_FAILED', message: e.message,});
    }
}

function* deleteRestaurant(action) {
    try {
        const url = `http://localhost:8080/api/v1/restaurant/${action.id}`;
        yield call(axios.delete, url);
        yield put({type: 'DELETE_RESTAURANT_SUCCESS'});
    } catch (e) {
        yield put({type: 'DELETE_RESTAURANT_FAILED', message: e.message,});
    }
}

function* restaurantSaga() {

    yield takeEvery('GET_ALL_RESTAURANTS_REQUESTED', getAllRestaurants);
    yield takeEvery('GET_BY_NAME_RESTAURANTS_REQUESTED', getRestaurantsByName);
    yield takeEvery('GET_BY_CATEGORY_RESTAURANTS_REQUESTED', getRestaurantsByCategory);
    yield takeEvery('GET_BY_ID_RESTAURANT_REQUESTED', getRestaurantById);
    yield takeEvery('POST_RESTAURANT_REQUESTED', createRestaurant)
    yield takeEvery('PUT_RESTAURANT_REQUESTED', updateRestaurant);
    yield takeEvery('DELETE_RESTAURANT_REQUESTED', deleteRestaurant);
}

export default restaurantSaga;
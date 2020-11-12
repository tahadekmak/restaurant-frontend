import { all } from 'redux-saga/effects'
import personSaga from "./personSaga";
import restaurantSaga from "./restaurantSaga";
import visitSaga from "./visitSaga";

export default function* rootSaga() {
    yield all([
        personSaga(),
        restaurantSaga(),
        visitSaga(),
    ])
}
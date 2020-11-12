import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/index.js';
import rootSaga from "./sagas";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleware),
)(createStore)(rootReducer);
sagaMiddleware.run(rootSaga);

export default store;
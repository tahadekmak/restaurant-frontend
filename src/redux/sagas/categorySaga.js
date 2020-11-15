import {call, put, takeEvery} from 'redux-saga/effects'
import axios from 'axios';

function* getAllCategories() {
    try {
        const url = `http://localhost:8080/api/v1/category`;
        const categories1 = yield call(axios.get, url);
        yield put({type: 'GET_ALL_CATEGORIES_SUCCESS', categories1: categories1.data});
    } catch (e) {
        yield put({type: 'GET_ALL_CATEGORIES_FAILED', message: e.message});
    }
}

function* getCategoryById(action) {
    try {
        const url = `http://localhost:8080/api/v1/category/${action.id}`;
        const categories1 = yield call(axios.get, url);
        yield put({type: 'GET_BY_ID_CATEGORY_SUCCESS', categories1: categories1.data});
    } catch (e) {
        yield put({type: 'GET_BY_ID_CATEGORY_FAILED', message: e.message});
    }
}

function* createCategory(action) {
    try {
        const url = `http://localhost:8080/api/v1/category`;
        yield call(axios.post, url, action.value);
        yield put({type: 'POST_CATEGORY_SUCCESS'});
    } catch (e) {
        yield put({type: 'POST_CATEGORY_FAILED', message: e.message,});
    }
}

function* updateCategory(action) {
    try {
        const url = `http://localhost:8080/api/v1/category/${action.id}`;
        yield call(axios.put, url, action.value);
        yield put({type: 'PUT_CATEGORY_SUCCESS'});
    } catch (e) {
        yield put({type: 'PUT_CATEGORY_FAILED', message: e.message,});
    }
}

function* deleteCategory(action) {
    try {
        const url = `http://localhost:8080/api/v1/category/${action.id}`;
        yield call(axios.delete, url);
        yield put({type: 'DELETE_CATEGORY_SUCCESS'});
    } catch (e) {
        yield put({type: 'DELETE_CATEGORY_FAILED', message: e.message,});
    }
}

function* CategorySaga() {

    yield takeEvery('GET_ALL_CATEGORIES_REQUESTED', getAllCategories);
    yield takeEvery('GET_BY_ID_CATEGORY_REQUESTED', getCategoryById);
    yield takeEvery('POST_CATEGORY_REQUESTED', createCategory);
    yield takeEvery('PUT_CATEGORY_REQUESTED', updateCategory);
    yield takeEvery('DELETE_CATEGORY_REQUESTED', deleteCategory);
}

export default CategorySaga;
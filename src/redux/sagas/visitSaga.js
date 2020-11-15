import {call, put, takeEvery} from 'redux-saga/effects'
import axios from 'axios';

function* getAllVisits() {
    try {
        const url = `http://localhost:8080/api/v1/visit`;
        const visits = yield call(axios.get, url);
        yield put({type: 'GET_ALL_VISITS_SUCCESS', visits: visits.data});
    } catch (e) {
        yield put({type: 'GET_ALL_VISITS_FAILED', message: e.message});
    }
}

function* getVisitsByPersonId(action) {
    try {
        const url = `http://localhost:8080/api/v1/visitsByPersonId/${action.id.personId}`;
        const visits = yield call(axios.get, url);
        yield put({type: 'GET_BY_PERSON_ID_VISITS_SUCCESS', visits: visits.data});
    } catch (e) {
        yield put({type: 'GET_BY_PERSON_ID_VISITS_FAILED', message: e.message});
    }
}

function* getVisitById(action) {
    try {
        const url = `http://localhost:8080/api/v1/visit/${action.id}`;
        const visits = yield call(axios.get, url);
        yield put({type: 'GET_BY_ID_VISIT_SUCCESS', visits: visits.data});
    } catch (e) {
        yield put({type: 'GET_BY_ID_VISIT_FAILED', message: e.message});
    }
}

function* createVisit(action) {
    try {
        const url = `http://localhost:8080/api/v1/visit`;
        yield call(axios.post, url, action.data.visitData);
        yield put({type: 'POST_VISIT_SUCCESS'});
    } catch (e) {
        yield put({type: 'POST_VISIT_FAILED', message: e.message,});
    }
}

function* updateVisit(action) {
    try {
        const url = `http://localhost:8080/api/v1/visit/${action.id}`;
        const visits = yield call(axios.put, url, action.value);
        yield put({type: 'PUT_VISIT_SUCCESS', visits: visits.data});
    } catch (e) {
        yield put({type: 'PUT_VISIT_FAILED', message: e.message,});
    }
}

function* deleteVisit(action) {
    try {
        const url = `http://localhost:8080/api/v1/visit/${action.id}`;
        yield call(axios.delete, url);
        yield put({type: 'DELETE_VISIT_SUCCESS'});
    } catch (e) {
        yield put({type: 'DELETE_VISIT_FAILED', message: e.message,});
    }
}

function* visitSaga() {

    yield takeEvery('GET_ALL_VISITS_REQUESTED', getAllVisits);
    yield takeEvery('GET_BY_PERSON_ID_VISITS_REQUESTED', getVisitsByPersonId);
    yield takeEvery('GET_BY_ID_VISIT_REQUESTED', getVisitById);
    yield takeEvery('POST_VISIT_REQUESTED', createVisit);
    yield takeEvery('PUT_VISIT_REQUESTED', updateVisit);
    yield takeEvery('DELETE_VISIT_REQUESTED', deleteVisit);
}

export default visitSaga;
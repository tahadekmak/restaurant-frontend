import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

function* getAllPersons() {
    try {
        const url = `http://localhost:8080/api/v1/person`;
        const persons = yield call(axios.get, url);
        yield put({type: 'GET_ALL_PERSONS_SUCCESS', persons: persons.data});
    } catch (e) {
        yield put({type: 'GET_ALL_PERSONS_FAILED', message: e.message});
    }
}

function* getPersonById(action) {
    try {
        const url = `http://localhost:8080/api/v1/person/${action.id}`;
        const persons = yield call(axios.get, url);
        yield put({type: 'GET_BY_ID_PERSON_SUCCESS', persons: persons.data});
    } catch (e) {
        yield put({type: 'GET_BY_ID_PERSONS_FAILED', message: e.message});
    }
}

function* createPerson(action) {
    try {
        const url = `http://localhost:8080/api/v1/person`;
        const person = yield call(axios.post, url, action.value);
        yield put({type: 'POST_PERSON_SUCCESS'});
    } catch (e) {
        yield put({type: 'POST_PERSON_FAILED', message: e.message,});
    }
}

function* updatePerson(action) {
    try {
        const url = `http://localhost:8080/api/v1/person/${action.id}`;
        const person = yield call(axios.put, url, action.value);
        yield put({type: 'PUT_PERSON_SUCCESS', persons: person.data});
    } catch (e) {
        yield put({type: 'PUT_PERSON_FAILED', message: e.message,});
    }
}

function* deletePerson(action) {
    try {
        const url = `http://localhost:8080/api/v1/person/${action.id}`;
        const person = yield call(axios.delete, url);
        yield put({type: 'DELETE_PERSON_SUCCESS'});
    } catch (e) {
        yield put({type: 'DELETE_PERSON_FAILED', message: e.message,});
    }
}

function* personSaga() {

    yield takeEvery('GET_ALL_PERSONS_REQUESTED', getAllPersons);
    yield takeEvery('GET_BY_ID_PERSON_REQUESTED', getPersonById);
    yield takeEvery('POST_PERSON_REQUESTED', createPerson);
    yield takeEvery('PUT_PERSON_REQUESTED', updatePerson);
    yield takeEvery('DELETE_PERSON_REQUESTED', deletePerson);
}

export default personSaga;
import * as type from '../types';

const initialState = {
    persons: [],
    loading: false,
    error: null,
}

export default function persons(state = initialState, action) {
    switch (action.type) {
        case type.GET_ALL_PERSONS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_ALL_PERSONS_SUCCESS:
            return {
                ...state,
                loading: false,
                persons: action.persons
            }
        case type.GET_ALL_PERSONS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.GET_BY_ID_PERSON_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_BY_ID_PERSON_SUCCESS:
            return {
                ...state,
                loading: false,
                persons: action.persons
            }
        case type.GET_BY_ID_PERSON_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.POST_PERSON_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.POST_PERSON_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.POST_PERSON_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.PUT_PERSON_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.PUT_PERSON_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.PUT_PERSON_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.DELETE_PERSON_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.DELETE_PERSON_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.DELETE_PERSON_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state
    }
}
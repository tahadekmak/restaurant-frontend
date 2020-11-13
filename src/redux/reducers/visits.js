import * as type from '../types';

const initialState = {
    visits: [],
    loading: false,
    error: "",
    successSnackbarOpen: false,
    errorSnackbarOpen: false
}

export default function visits(state = initialState, action) {
    switch (action.type) {
        case type.GET_ALL_VISITS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_ALL_VISITS_SUCCESS:
            return {
                ...state,
                loading: false,
                visits: action.visits
            }
        case type.GET_ALL_VISITS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.GET_BY_PERSON_ID_VISITS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_BY_PERSON_ID_VISITS_SUCCESS:
            return {
                ...state,
                loading: false,
                visits: action.visits
            }
        case type.GET_BY_PERSON_ID_VISITS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.GET_BY_ID_VISIT_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_BY_ID_VISIT_SUCCESS:
            return {
                ...state,
                loading: false,
                visits: action.visits
            }
        case type.GET_BY_ID_VISIT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.POST_VISIT_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.POST_VISIT_SUCCESS:
            return {
                ...state,
                loading: false,
                successSnackbarOpen: true
            }
        case type.POST_VISIT_CLEAR:
            return {
                ...state,
                successSnackbarOpen: false,
                errorSnackbarOpen: false,
            };
        case type.POST_VISIT_FAILED:
            return {
                ...state,
                loading: false,
                errorSnackbarOpen: true,
                error: action.message,
            }

        case type.PUT_VISIT_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.PUT_VISIT_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.PUT_VISIT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.DELETE_VISIT_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.DELETE_VISIT_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.DELETE_VISIT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state
    }
}
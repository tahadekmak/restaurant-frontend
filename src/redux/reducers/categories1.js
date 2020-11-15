import * as type from '../types';

const initialState = {
    categories1: [],
    loading: false,
    error: "",
    errorSnackbarOpen: false
}

export default function categories1(state = initialState, action) {
    switch (action.type) {
        case type.GET_ALL_CATEGORIES_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories1: action.categories1
            }
        case type.GET_ALL_CATEGORIES_CLEAR:
            return {
                ...state,
                errorSnackbarOpen: false,
            };
        case type.GET_ALL_CATEGORIES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
                errorSnackbarOpen: true
            }

        case type.GET_BY_ID_CATEGORY_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_BY_ID_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories1: action.categories1
            }
        case type.GET_BY_ID_CATEGORY_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.POST_CATEGORY_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.POST_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.POST_CATEGORY_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.PUT_CATEGORY_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.PUT_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.PUT_CATEGORY_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.DELETE_CATEGORY_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.DELETE_CATEGORY_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state
    }
}
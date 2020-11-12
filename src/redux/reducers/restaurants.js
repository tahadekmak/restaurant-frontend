import * as type from '../types';

const initialState = {
    restaurants: [],
    loading: false,
    error: null,
}

export default function restaurants(state = initialState, action) {
    switch (action.type) {
        case type.GET_ALL_RESTAURANTS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_ALL_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.restaurants
            }
        case type.GET_ALL_RESTAURANTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.GET_BY_NAME_RESTAURANTS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_BY_NAME_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.restaurants
            }
        case type.GET_BY_NAME_RESTAURANTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.GET_BY_CATEGORY_RESTAURANTS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_BY_CATEGORY_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.restaurants
            }
        case type.GET_BY_CATEGORY_RESTAURANTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.GET_BY_ID_RESTAURANT_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_BY_ID_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.restaurants
            }
        case type.GET_BY_ID_RESTAURANT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.POST_RESTAURANT_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.POST_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.POST_RESTAURANT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.PUT_RESTAURANT_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.PUT_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.PUT_RESTAURANT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.DELETE_RESTAURANT_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.DELETE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.DELETE_RESTAURANT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state
    }
}
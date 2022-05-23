import {
    SET_POSTS,
    SET_POSTS_ERROR,
    SET_POSTS_IS_LOADING,
    RESET_POSTS_IS_LOADING
} from "../actionTypes";

const initialState = {
    posts: [],
    isLoading: false,
    error: null
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            }
        }
        case SET_POSTS_IS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SET_POSTS_ERROR: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }
        case RESET_POSTS_IS_LOADING: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
}
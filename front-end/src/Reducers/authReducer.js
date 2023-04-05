import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../Action/type";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? { isLoggedIn: true, data: user } : { isLoggedIn: false, data: null };

export const authReducer = (state = initialState, action) => {


    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                data: action.payload,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                data: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                data: null,
            };
        default:
            return state;
    }
}
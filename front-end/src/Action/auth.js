import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "./type";
import { API_URL } from "../components/config";
// import jwt from 'jwt-decode';
import axios from 'axios'
import { toast } from "react-toastify";
// import { useNavigate } from 'react-router-dom';

export const login = (user) => (dispatch) => {
    axios.post(`${API_URL}/user/auth/login`, user)
        .then((data) => {
            const ls = localStorage.setItem('user', JSON.stringify(data.data))
            dispatch({ type: LOGIN_SUCCESS, payload: data.data })
        }).catch((error) => {
            toast.warning(error.response.data.message)
        })
}
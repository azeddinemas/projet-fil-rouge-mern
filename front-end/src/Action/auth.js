import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "./type";
import { API_URL } from "../components/config";
import axios from 'axios'
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

export const login = (user) => (dispatch) => {
    axios.post(`${API_URL}/user/auth/login`, user)
        .then((data) => {
            localStorage.setItem('user', JSON.stringify(data.data))
            dispatch({ type: LOGIN_SUCCESS, payload: data.data })
        }).catch((error) => {
            dispatch({ type: LOGIN_FAIL, payload: null })
            toast.warning(error.response.data.message)
        })
}

export const logout = () => {
    localStorage.removeItem('user')
    return {
        type: LOGOUT,
    }
}
export const register = (user) => (dispatch) => {
    // const navigate = useNavigate()
    if (user.confirmation === user.password) {
        axios.post(`${API_URL}/user/auth/register`, user)
            .then((data) => {
                dispatch({ type: REGISTER_SUCCESS, payload: data.data })
                toast.success(data.data)
            }).catch((error) => {
                dispatch({ type: REGISTER_FAIL })
                toast.error(error.response.data.message)
            })
    } else toast.warning('confirmation incorrect')

}
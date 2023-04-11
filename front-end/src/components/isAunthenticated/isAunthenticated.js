import jwt from "jwt-decode"

export const isAunthenticated = () => {

    const token = localStorage.getItem('user')

    if (token) {
        const e = JSON.parse(token)
        return jwt(e)
    }

    return false
}
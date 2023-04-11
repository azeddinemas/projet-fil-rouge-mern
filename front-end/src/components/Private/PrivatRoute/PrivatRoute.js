import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAunthenticated } from '../isAunthenticated/isAunthenticated'

const PrivatRoute = () => {
    return (
        isAunthenticated() ? <Outlet /> : <Navigate to={'/'} />
    )
}

export default PrivatRoute




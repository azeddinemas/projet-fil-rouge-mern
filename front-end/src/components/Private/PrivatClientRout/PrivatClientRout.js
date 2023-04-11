import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { isAunthenticated } from '../isAunthenticated/isAunthenticated';

const PrivatClientRout = () => {
    return (
        isAunthenticated() && isAunthenticated().data.role === 'client' ? <Outlet /> : <Navigate to='*' />
    )
}

export default PrivatClientRout
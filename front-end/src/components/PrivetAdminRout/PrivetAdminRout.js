import jwt from 'jwt-decode';
import { Navigate, Outlet } from 'react-router-dom';

const PrivetAdminRout = () => {
    const ls = JSON.parse(localStorage.getItem('user'))
    const isLogged = jwt(ls)
    return (
        isLogged.data.role === 'client' ? <Navigate to='/statistique' /> : <Navigate to='/clientpage' />
    )
}

export default PrivetAdminRout
import { Navigate, Outlet } from 'react-router-dom';
import { isAunthenticated } from '../isAunthenticated/isAunthenticated';

const PrivetAdminRout = () => {
    return (
        // isLogged.data.role === 'client' ? <Outlet /> : <Navigate to='/' />
        isAunthenticated() && isAunthenticated().data.role === 'admin' ? <Outlet /> : <Navigate to='*' />
    )
}

export default PrivetAdminRout
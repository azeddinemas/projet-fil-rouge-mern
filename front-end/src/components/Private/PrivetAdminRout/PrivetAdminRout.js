import { Navigate, Outlet } from 'react-router-dom';
import { isAunthenticated } from '../isAunthenticated/isAunthenticated';

const PrivetAdminRout = () => {
    return (
        isAunthenticated() && isAunthenticated().data.role === 'admin' ? <Outlet /> : <Navigate to='*' />
    )
}

export default PrivetAdminRout
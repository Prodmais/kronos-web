import { Outlet, Navigate } from "react-router";


const PrivateGuardRoute = () => {
    
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to='/auth' />;
    }
    
    return <Outlet />;
}

export default PrivateGuardRoute;
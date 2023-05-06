import { Outlet, Navigate } from "react-router";


const AuthGuardRoute = () => {
    
    const isAuthenticated = false;
    
    return isAuthenticated ? <Outlet /> : <Navigate to='/auth' />
}

export default AuthGuardRoute;
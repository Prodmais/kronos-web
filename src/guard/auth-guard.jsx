import { Outlet, Navigate } from "react-router";


const AuthGuardRoute = () => {
    
    const isAuthenticated = true;
    
    return isAuthenticated ? <Outlet /> : <Navigate to='/auth' />
}

export default AuthGuardRoute;
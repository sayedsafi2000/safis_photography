import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { AuthContext } from '../../Context/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return<BarLoader
            color="#36d7b7"
            height={4}
            width={1000}
        />
    }
    if (user) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;
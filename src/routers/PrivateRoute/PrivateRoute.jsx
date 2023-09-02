/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';

import { AuthCotext } from '../../Provider/AuthProvider';
import { FaSpinner } from 'react-icons/fa';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthCotext);
    const location = useLocation();
    console.log('user in private route', user);

    if(loading){
        return (
            <div className=' w-1/2 mx-auto my-5'>
                <FaSpinner  animation="border" variant="primary" />
                </div>
        )
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;
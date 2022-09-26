import React from 'react'
import { Navigate } from 'react-router-dom/dist';

const ProtectedRoute = ({children, user}) => {
    if(!user) {
        return <Navigate to='/' />;
    }
  return (
    children
  )
};

export default ProtectedRoute;
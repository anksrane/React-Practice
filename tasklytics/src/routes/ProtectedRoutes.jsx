import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
    const isAuthenticated=true;

    return isAuthenticated? <Outlet /> : <Navigate to="/login" replace/>
}

export default ProtectedRoutes

import React from 'react'
import {Navigate} from 'react-router-dom'
function ProtectedRoutes({children, isAuthenticated}) {
  console.log(isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/" />
}

export default ProtectedRoutes

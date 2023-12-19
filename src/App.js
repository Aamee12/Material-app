import React, {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './page/Main'
import Login from './page/login/index'
import Signup from './page/signup/index'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, user => {
      console.log(user)
      if (user) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    })
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/main"
          element={
            <ProtectedRoutes  isAuthenticated={isAuthenticated}>
              <Main />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

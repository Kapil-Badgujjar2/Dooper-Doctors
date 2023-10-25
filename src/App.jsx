import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Verify from './components/Verify'
import Successful from './components/Successful'
import ProfileUnderReview from './components/ProfileUnderReview'

import Login from './pages/Login'

import { AppContext } from './context/AppContext'
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      children: [
        { path: "/", element: <LoginForm /> },
        { path: "verify", element: <Verify /> },
        { path: "successful", element: <Successful /> },
        { path: "profileunderreview", element: <ProfileUnderReview /> },
      ],
    },
  ])
  return (
    <AppContext>
      <RouterProvider routes={routes} />
    </AppContext>
  )
}

export default App

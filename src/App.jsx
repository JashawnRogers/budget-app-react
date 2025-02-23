import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './index.css'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'

function App() {

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LandingPage />}>
      <Route path='/dashboard' element={<Dashboard />} />

    </Route>
  )
 )

  return (
    <RouterProvider router={router} />
  )
}

export default App

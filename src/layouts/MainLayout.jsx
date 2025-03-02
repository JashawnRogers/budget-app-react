import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LandingNavbar from '../components/LandingNavbar'

const MainLayout = () => {
  return (
    <>
        <LandingNavbar />
        <Outlet />
        <ToastContainer />
    </>
  )
}

export default MainLayout
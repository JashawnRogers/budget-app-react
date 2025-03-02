import React from 'react'
import Button
 from './Button'
const LandingNavbar = () => {
  return (
    <nav className='h-[8vh] bg-green-200'>
        <div className='flex m-auto justify-between h-auto'>
            <h1 className='m-4 text-4xl'>Title</h1>
            <Button 
            className='inline-flex items-center rounded-lg border border-black bg-gray-50 text-gray-600 font-medium h-10 m-4 p-2'
            to='/login'
            type='submit'>
                Sign In
            </Button>
        </div>
    </nav>
  )
}

export default LandingNavbar
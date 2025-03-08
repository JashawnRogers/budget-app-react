import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
  return (
    <div className='glass-bg pl-16 ml-2 min-h-[100%]'>
        <div className='flex'>
            <h2 className='py-5 text-xl'>Hello, User</h2>
        </div>
        
        <ul className='text-base'>
            <li className='py-3'>
                <Link>Create a Budget</Link>
            </li>
            <li className='py-3'>
                <Link>Savings Goals</Link>
            </li>
            <li className='py-3'>
                <Link>All Spending</Link>
            </li>
            <li className='py-3'>
                <Link>Add Bank Account</Link>
            </li>
            <li className='py-3'>
                <Link>Account Settings</Link>
            </li>
            <li className='py-3'>
                <Link>Log Out</Link>
            </li>
        </ul>
    </div>
  )
}

export default Aside
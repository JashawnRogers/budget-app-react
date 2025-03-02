import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
  return (
    <aside className='w-[15%] glass-bg pl-16 ml-2 h-[100%]'>
        <div className='flex'>
            <h2 className='py-5 text-xl'>Hello, User</h2>
        </div>
        
        <ul className='text-base'>
            <li className='py-3'>
                <Link>All Spending</Link>
            </li>
            <li className='py-3'>
                <Link>Create budget</Link>
            </li>
            <li className='py-3'>
                <Link>Savings Goals</Link>
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
    </aside>
  )
}

export default Aside
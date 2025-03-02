import React from 'react'

const Card = ({ children, bg='bg-gray-100', m }) => {
  return (
    <div className='flex justify-center'>
        <div className={`${bg} p-6 rounded-lg shadow-md border max-w-[600px] ${m} glass-bg`}>
            { children }
        </div>
    </div>
  )
}

export default Card
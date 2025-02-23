import React from 'react'
import SignUp from './SignUp'


const Hero = () => {
    // Send API call to register new user
    const addNewUser = async (newUser) => {
        const res = await fetch('http://localhost:3000/api/v1/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        return
    }

  return (
    <section>
        <div className='flex-col justify-center items-center h-[50%] pt-13'>
            <h1 className='text-center text-5xl'>Title</h1>
            <p className='text-center italic'>Slogan</p>
        </div>
        <SignUp submitNewUser={addNewUser} />
    </section>
  )
}

export default Hero
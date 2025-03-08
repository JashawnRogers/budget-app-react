import React from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'

const Hero = () => {
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

    const userLogin = async (existingUser) => {
        const res = await fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(existingUser)
        })
        return true
    }


  return (
    <section className='h-screen bg-gradient-to-b from-green-200 to white'>
        <div className='flex-col justify-center items-center h-[50%] pt-13'>
            <h1 className='text-center text-5xl'>Title</h1>
            <p className='text-center italic'>Slogan</p>
        </div>
        <div className='flex justify-center gap-x-20 mt-[-15rem]'>
            <SignUp submitNewUser={addNewUser} />
            <SignIn submitLogIn={userLogin}/>
        </div>
    </section>
  )
}

export default Hero
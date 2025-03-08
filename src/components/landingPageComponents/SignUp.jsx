import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../commonComponents/Card'
import Button from '../commonComponents/Button'


const SignUp = ({ submitNewUser }) => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault()

        const newUser = {
            firstName,
            email,
            password
        }

        submitNewUser(newUser)
        return navigate('/Dashboard')
    }


  return (
    <Card bg='bg-gray-200' m='mt-7'>
        <h3 className='text-center mb-5 italic'>Let's get you started on your journey to freedom</h3>
        
        <form onSubmit={submitForm}>
            <label htmlFor='firstNname' className='font-bold'>
                First Name
            </label>
            <input 
                type='text'
                id='firstName'
                className='border rounded w-full py-2 px-3 mb-5 bg-transparent'
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='email' className='font-bold pb-1'>
                Email
            </label>
            <input 
                type='email'
                id='email'
                className='border rounded w-full py-2 px-3 mb-5 bg-transparent'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='password' className='font-bold pt-5'>
                Password
            </label>
            <input 
                type='password'
                id='password'
                className='border rounded w-full py-2 px-3 mb-5 bg-transparent'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
            className='font-bold border-0 rounded flex my-0 mx-auto mt-5 px-3 py-[0.4rem] h-10 text-center w-[90px] hover:cursor-pointer bg-green-200' >
                <p>Sign Up</p>
            </Button>
        </form>
    </Card>
  )
}

export default SignUp
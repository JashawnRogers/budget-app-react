import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../commonComponents/Card'
import Button from '../commonComponents/Button'
import { toast } from 'react-toastify'

const SignIn = ({ submitLogIn }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault()

        const existingUser = {
            email,
            password
        }
        // I beleive this is crashing the app - check react-jobs repo to see how the errors are sent to the front end 
        submitLogIn(existingUser)
        toast.success('Successfully logged in')
        return navigate('/dashboard')
        
    }

  return (
    <Card bg='bg-gray-200' m='mt-7'>
        <h3 className='text-center mb-5 italic'>Jump back into your journey to freedom</h3>
        
        <form onSubmit={submitForm}>
            <label htmlFor='email' className='font-bold pt-10'>
                Email
            </label>
            <input 
                type='email'
                id='email'
                className='border rounded w-full py-2 px-3 mb-10 bg-transparent'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='password' className='font-bold'>
                Password
            </label>
            <input 
                type='password'
                id='password'
                className='border rounded w-full py-2 px-3 bg-transparent'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
            className='font-bold border-0 rounded flex my-0 mx-auto mt-26 px-3 py-[0.4rem] h-10 text-center w-[85px] hover:cursor-pointer bg-green-200' >
                <p>Sign in</p>
            </Button>
        </form>
    </Card>
  )
}

export default SignIn
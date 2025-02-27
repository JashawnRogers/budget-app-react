import express from 'express'
import bcrypt from 'bcrypt'
import User from '../../db/userModel.js'

const router = express.Router()



router.route('/').get((req, res) => {
    // render Landing Page
    res.send(`Render Landing Page`)
})

router.route('/register').post( async (req, res) => {
    // Sign Up
    try {
       const hashedPassword = await bcrypt.hash(req.body.password, 10)
       const user = new User({
        firstName: req.body.firstName,
        email: req.body.email,
        password: hashedPassword,
       })

        await user.save()

       res.status(201).send({
        messsage: 'User created successfully',
        user
       })
    } catch (err) {
        res.status(500).send({
            message: 'Error creating user',
            err: err.message,
        })
    }

    // THIS DOES NOT INSERT NEW RECORD TO USERS COLLECTION
})

router.route('/login').post((req, res) => {
    // Log In
    try {
        const { name, email, password } = req.body
        console.log(req.body)
        res.send(`${req.body}`)
    } catch (err) {
        console.error(`${err}`)
    }
    
})



export default router
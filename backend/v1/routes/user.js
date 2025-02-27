import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
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
})

router.route('/login').post( async ( req, res) => {
    // Log In
    try {
        // Check if email exists
        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            return res.status(400).send({
                message: 'Email not found'
            })
        }

        // Compare password entered to db
        const passwordCheck = await bcrypt.compare(req.body.password, user.password)

        if (!passwordCheck) {
            return res.status(400).send({
                message: 'Incorrect password'
            })
        }

        // Create JWT token
        const token = jwt.sign(
            {
                userId: user._id,
                userEmail: user.email
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
        )

        // Successful login
        res.status(200).send({
            message: 'Successful login',
            email: user.email,
            token
        })

    } catch (err) {
        res.status(500).send({
            message: 'Server error',
            err: err.message,
        })
    }
    
})



export default router
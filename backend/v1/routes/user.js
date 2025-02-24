import express from 'express'

const router = express.Router()



router.route('/').get((req, res) => {
    // render Landing Page
    res.send(`Render Landing Page`)
})

router.route('/register').post((req, res) => {
    // Sign Up
    try {
        const { name, email, password } = req.body
        console.log(req.body)
        res.send(`${req.body}`)
    } catch (err) {
        console.error(`${err}`)
    }
    
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
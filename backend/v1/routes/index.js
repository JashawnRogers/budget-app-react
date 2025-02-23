import express from 'express'

const router = express.Router()



router.route('/').get((req, res) => {
    // render homepage
    res.send(`<h2>Render Landing Page</h2>`)
})

router.route('/register').post((req, res) => {
    // Sign Up
    try {
        const { name, email, password } = req.body
        console.log(req.body)
    } catch (err) {
        rconsole.error(`${err}`)
    }
    
})

router.route('/login').post((req, res) => {
    // Log In
    if (!loginValidation(req.body.username, req.body.password, '/')) 
        
    res.render('<h1>Landing Page</h1>')
    
})



export default router
import jwt from 'jsonwebtoken'

export default async function authFunction (req, res, next) {
    try {
        // Get token from auth header
        const token = await req.headers.authorization.split(' ')[1]
        // Check if token matches the supposed origin
        const decodedToken = await jwt.verify(token, "RANDOM-TOKEN")
        // Retrieve the user details of the logged in user
        const user = await decodedToken
        // Pass the user to the endpoint
        req.user = user

        next()        
    } catch (error) {
        res.status(400).json({
            error: new Error('Invalid request')
        })
    }
}
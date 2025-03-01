import express from 'express'
import cors from 'cors'
import dbConnect from './db/dbConnect.js'
import v1Router from './v1/routes/user.js'


const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // Handles form data

app.use((req, res, next) => {
    // Allows cross-origin request from any website - potential to be specific in future
    res.setHeader('Access-Control-Allow-Origin', '*')
    // Setting custom headers to be allowed
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    )
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    )
    next()
})

app.use('/api/v1', v1Router)

dbConnect()
app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`)
})
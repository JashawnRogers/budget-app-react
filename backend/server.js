import express from 'express'
import cors from 'cors'
import dbConnect from './db/dbConnect.js'
import v1Router from './v1/routes/user.js'


const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // Handles form data
app.use('/api/v1', v1Router)

dbConnect()
app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`)
})
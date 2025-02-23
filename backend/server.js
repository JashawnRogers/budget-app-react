import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import v1Router from './v1/routes/index.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/api/v1', v1Router)


app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`)
})
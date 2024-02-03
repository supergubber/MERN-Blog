import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())

//database connect
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('mongodb connect successfully')
  })
  .catch((error) => {
    console.log('db connection issues')
    console.error(error)
    process.exit(1)
  })

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is running on part ${PORT}`)
})

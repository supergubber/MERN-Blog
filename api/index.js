import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routers/user.route.js'
import authRouter from './routers/auth.route.js'
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

//connect to server
// const PORT = process.env.PORT || 4000
app.listen(3000, () => {
  console.log(`Server is running on part 3000`)
})
//mount router
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
//get test router

app.get('/test', (req, res) => {
  res.json({ message: 'API is working' })
})

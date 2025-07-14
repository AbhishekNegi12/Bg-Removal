import  'dotenv/config'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
// New (ESM)
import express from 'express';
// import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// Initialize middlewares
app.use(express.json());
app.use(cors())


//API routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use('/api/user',userRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

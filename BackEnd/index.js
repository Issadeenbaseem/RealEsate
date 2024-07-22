import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './router/user.route.js'
import authRouter from './router/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO_KEY).then(() =>{
    console.log("Mongo_DB connection Successful")
}).catch((error)=>{
        console.log(error)
})
const app = express();

app.use(express.json())


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.listen(4000,() =>{
    console.log("Server running Port 4000")
})
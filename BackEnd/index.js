import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGO_KEY).then(() =>{
    console.log("Mogo_DB connection Successful")
}).catch((error)=>{
        console.log(error)
})
const app = express();

app.listen(4000,() =>{
    console.log("Server running Port 4000")
})
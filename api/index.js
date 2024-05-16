import express from 'express'
import mongoose from 'mongoose'
const app =express()
mongoose.connect('mongodb://localhost:27017/Bloger').then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
 console.log("server is running")
})
require("dotenv").config()
const mongoose = require('mongoose')
const express = require('express')
const userRouter = require('./routes/user.js')
const app = express()
app.use(express.json())
app.use(userRouter)
mongoose.connect("mongodb://127.0.0.1:27017/hello").then(()=>{
    console.log("Connected to database")
    app.listen(process.env.PORT,()=>{
        console.log("running at port: ",process.env.PORT)
    })
}).catch(err=>console.log("Error connecting DB: ",err))

const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/e-advertisement").then(()=>{
    console.log("database connected....")
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log("server started on the port number"+ PORT)
})
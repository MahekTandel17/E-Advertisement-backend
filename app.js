const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/e-advertisement").then(()=>{
    console.log("database connected....")
})

const roleRoutes = require("./src/routes/RoleRoutes")
app.use("/role",roleRoutes)

const userRoutes = require("./src/routes/UserRoutes")
app.use("/user",userRoutes)

const PORT = 3000
app.listen(PORT,()=>{
    console.log("server started on the port number"+ PORT)
})
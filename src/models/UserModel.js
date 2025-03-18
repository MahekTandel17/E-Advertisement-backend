const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 255
    },
    phone: {
        type: String,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        maxlength: 255
    },
    roleId:{
        type:Schema.Types.ObjectId,
        ref:"roles"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Users",userSchema)
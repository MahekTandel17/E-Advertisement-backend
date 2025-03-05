const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({

    // user_id: {
    //     type: Number,
    //     unique: true,
    //     required: true,
    //     autoIncrement: true
    // },
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
    // role: {
    //     type: String,
    //     enum: ['TV Owner', 'Advertiser'],
    //     required: true
    // },
    roleId:{
        type:Schema.Types.ObjectId,
        ref:"roles"
    },
    // roleName:{
    //     type: String
    // },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("users",userSchema)
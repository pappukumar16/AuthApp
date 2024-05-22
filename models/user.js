const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        role:{
            type:String,
            required:true,
            enum:["Admin","Student","visgitor"]
        }
    },
    {timestamps:true})


    module.exports = mongoose.model("user",userSchema);
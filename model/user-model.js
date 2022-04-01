const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        userName:{
            type:String,
           // required:true
        },
        email:{
            type:String,
            //unique: true
        },
        password:{
            type:String
        },
        gender:{
            type:String
        },
        mobileNo:{
            type:Number
        },
        education:{
            type:String
        },
        dateOfBirth:{
            type:Date
        },
        address:{
            type:String
        },
        role : {
                type:mongoose.Schema.Types.ObjectId,
                ref:"role"
        }
})


const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel 
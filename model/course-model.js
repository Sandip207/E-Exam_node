const mongoose = require("mongoose")


const CourseSchema = new mongoose.Schema({
    
        courseName:{
            type:String,
            required:true
        },
        isActive:{
            type:Boolean
        },
        discription:{
            type:String
        }
        
})


const CourseModel = mongoose.model("course",CourseSchema)
module.exports = CourseModel 
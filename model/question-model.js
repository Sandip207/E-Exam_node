const mongoose=require("mongoose")

const queSchema = new mongoose.Schema({
    
    queName:{
        type:String,
        require:true
    },
    option1:{
        type:String
    },
    option2:{
        type:String
    },
    option3:{
        type:String
    },
    option4:{
        type:String
    },
    answer:{
        type:String
    },
    marks:{
        type:Number
    },
    createdDate:{
        type:Date
    },
    modifyDate:{
        type:Date
    },
    modifyBy:{
        type:String
    }
    
    
})

const queModel = mongoose.model("question",queSchema)
module.exports = queModel
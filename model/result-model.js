const mongoose=require("mongoose")

const resultSchema=new mongoose.Schema({
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"course"
    },
    exam:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"exam"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    marks:{
        type:String
    },
    attendQue:{
        type:String
    },
    examDate:{
        type:String
    }
})

const resultModel = mongoose.model("result",resultSchema)
module.exports = resultModel 
const examModel = require("../model/exam-model")
const queModel = require("../model/question-model")


//add [ POST ]
module.exports.addQue = function (req, res) {

    let queName = req.body.queName
    let option1 = req.body.option1
    let option2 = req.body.option2
    let option3 = req.body.option3
    let option4 = req.body.option4
    let answer = req.body.answer
    let marks=req.body.marks
    let createdDate=req.body.createdDate
    let modifyDate=req.body.modifyDate
    let modifyBy=req.body.modifyBy
//encript



    let que = new queModel({
        queName:queName,
        option1:option1,
        option2:option2,
        option3:option3,
        option4:option4,
        answer:answer,
        marks:marks,
        createdDate:createdDate,
        modifyDate:modifyDate,
        modifyBy:modifyBy
    })



    que.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAllQue = function (req, res) {

    queModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "ques", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteQue = function(req,res){
    //params userid 
    let queId = req.params.userId //postman -> userid 

    queModel.deleteOne({_id:queId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "que removed...", data: data, status: 200 })//http status code 
        }
    })
}
module.exports.updateQue = function(req,res){

    //update que s
    let queId=req.body.queid
    let queName = req.body.queName
    let option1 = req.body.option1
    let option2 = req.body.option2
    let option3 = req.body.option3
    let option4 = req.body.option4
    let answer = req.body.answer
    let marks=req.body.marks
    let createdDate=req.body.createdDate
    let modifyDate=req.body.modifyDate
    let modifyBy=req.body.modifyBy
    
    queModel.updateOne({_id:queId},{queName:queName,option1:option1,option2:option2,
        option3:option3,option4:option4,answer:answer,marks:marks,createdDate:createdDate,
        modifyDate:modifyDate,modifyBy:modifyBy},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}

// module.exports.addQuestionToExam = function(req,res){
//     var examId = req.params.examId
//     var exam = examModel.findById(examId)
//     var question = new queModel({queName:req.body.queName,option1:req.body.option1,
//         option2:req.body.option2,option3:req.body.option3,option4:req.body.option4})

//         exam.findOneAndUpdate({_id:examId},{$push:{questions:question}},function (err,data){

//             if(err){
//                 res.json({msg:"Something went wrong!!!",status:-1,data:err})
//             }else{
//                 res.json({msg:"updated...",status:200,data:data})
//             }
//         })

//         question.save()
// }

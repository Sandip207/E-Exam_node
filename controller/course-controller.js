const CourseModel = require("../model/course-model")


//add [ POST ]
module.exports.addCourse = function (req, res) {

    let courseName = req.body.courseName
    let isActive = req.body.isActive
    let discription = req.body.discription
    


    let course = new CourseModel({
        courseName: courseName,
        isActive: isActive,
        discription: discription,
        
    })



    course.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "..", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAllCourse = function (req, res) {

    CourseModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteCourse = function(req,res){
    //params userid 
    let courseId = req.params.courseId //postman -> userid 

    CourseModel.deleteOne({_id:courseId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "course removed...", data: data, status: 200 })//http status code 
        }
    })
}
module.exports.updateCourse = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let courseName = req.body.courseName
    let isActive = req.body.isActive
    let discription = req.body.discription

    courseModel.updateOne({_id:courseId},{courseName:courseName,isActive:isActive,discription:discription,password:password},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
        


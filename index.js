const express=require("express")
const mongoose=require("mongoose")
var cors = require('cors')
const sessonController=require("./controller/session-controller")
const roleController=require("./controller/role-controller")
const userController = require("./controller/user-controller")
const courseController=require("./controller/course-controller")
const queController=require("./controller/question-controller")
const examController=require("./controller/exam-controller")
const resultController=require("./controller/result-controller")



const app = express()
app.use(cors())
//middale ware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//database
mongoose.connect('mongodb://localhost:27017/E-exam',function(err){
  if(err){
    console.log("db connection  fail......");
    console.log(err);

  }else{
    console.log("db connected");
  }
})


app.get("/",function(req,res){
    res.write('welcome.')
    res.end()
})



  app.get("/login",sessonController.login)
  app.get("/signup",sessonController.signup)
  app.post("/saveUser",sessonController.saveUsers)
  
//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)


//user 
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)

app.post("/login",userController.login)

//course
app.post("/courses",courseController.addCourse)
app.get("/courses",courseController.getAllCourse)
app.delete("/courses/:courseId",courseController.deleteCourse)
app.put("/courses",courseController.updateCourse)
app.get('/courses/:courseId/exams',examController.listAllExamsOfSubject)


//que
app.post("/ques",queController.addQue)
app.get("/ques",queController.getAllQue)
app.delete("/ques/:queId",queController.deleteQue)
app.put("/ques",queController.updateQue)
// app.post("/exams/:examId/questions",queController.addQuestionToExam)


//exam
app.post("/exams",examController.addExam)
app.get("/exams",examController.getAllExam)
app.get("/exams/:examId",examController.listoneExam)
app.delete("/exams/:examId",examController.deleteExam)
app.put("/exams",examController.updateExam)
app.put("/exams/:examId",examController.updateoneExam)

//result
app.post("/result",resultController.addresult)
app.get("/result",resultController.getallresult)
app.delete("/result",resultController.deleteresult)





app.listen(3000,function(){
    console.log("server started on 3000")
})
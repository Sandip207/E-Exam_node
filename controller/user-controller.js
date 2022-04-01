const bcrypt = require("bcrypt")
const UserModel = require("../model/user-model")


//add [ POST ]
    module.exports.addUser = function (req, res) {

        let firstName = req.body.firstName 
        let lastName = req.body.lastName
        let userName=req.body.userName
        let email=req.body.email
        let gender=req.body.gender
        let mobileNo=req.body.mobileNo
        let education=req.body.education
        let dateOfBirth=req.body.dateOfBirth
        let address=req.body.address
        let password=req.body.password

       //encript
       let encPassword = bcrypt.hashSync(password,10)
       let role = req.body.role


    let user = new UserModel({
            firstName: firstName,
            lastName:lastName,
            userName:userName,
            email: email,
            mobileNo:mobileNo,
            education:education,
            dateOfBirth:dateOfBirth,
            password: encPassword,
            gender:gender,
            address:address,
            role: role
    })

    

    user.save(function (err, data) {
        if (err) {
            console.log(err);
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAllUsers = function (req, res) {

    UserModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Smw", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user data add successfully", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteUser = function(req,res){
    //params userid 
    let userId = req.params.userId //postman -> userid 

    UserModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateUser = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let userId = req.body.userId
    let firstName = req.body.firstName 
    let lastName = req.body.lastName
    let userName=req.body.userName
    let gender=req.body.gender
    let mobileNo=req.body.mobileNo
    let education=req.body.education
    let dateOfBirth=req.body.dateOfBirth
    let password=req.body.password
    let address=req.body.address
    let role=req.body.role
    UserModel.updateOne({_id:userId},{firstName:firstName,lastName:lastName,
        userName:userName,gender:gender,mobileNo:mobileNo,education:education,
        dateOfBirth:dateOfBirth,address:address,password:password,role:role},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
//login 
module.exports.login = function(req,res){

    let param_email = req.body.email
    let param_password  = req.body.password 

    let isCorrect = false; 

    UserModel.findOne({email:param_email},function(err,data){
        if(data){
            let ans =  bcrypt.compareSync(param_password,data.password)
            if(ans == true){
                    isCorrect = true
            }
        }

        if (isCorrect == false) {
            res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Login....", data: data, status: 200 })//http status code 
        }
    })

}

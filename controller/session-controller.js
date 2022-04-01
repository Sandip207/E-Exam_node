const fs=require('fs')

function login(req,res){
    let loginHtml=fs.readFileSync("./views/login.html")
    res.write(loginHtml)
    res.end()
}

function signup(req,res){
    let signupHtml=fs.readFileSync("./views/signup.html")
    res.write(signupHtml)
    res.end()
}

function saveUsers(req,res){
    console.log(req.body)
    res.write("saveUser")
    res.end()
}
module.exports.login=login
module.exports.signup=signup
module.exports.saveUsers=saveUsers
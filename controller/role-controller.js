
const RoleModel=require("../model/role-model");


module.exports.addRole=function(req,res){
    //db inseert role
    console.log(req.body.roleName);
   
    let role=new RoleModel({
        roleName:req.body.roleName
    })
    role.save(function(err,success){
        if(err){
            res.json({msg:"shw",status:-1,data:req.body})
        }else{
            res.json({msg:"role added",status:200,data:success})
        }
    })
   
}

module.exports.getAllRoles = function(req,res){
    //role -> db --> select * from roles 
    //model 
    //REST 
    RoleModel.find(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"roles...",status:200,data:roles})

        }
    })
}
// /sdfdsfsdfdsf 
module.exports.deleteRole = function(req,res){
    let roleId = req.params.roleId
    //delete from role where roleId = 1 
    RoleModel.deleteOne({"_id":roleId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}
//roleName 



module.exports.updateRole = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let roleId = req.body.roleId 
    let roleName = req.body.roleName 

    RoleModel.updateOne({_id:roleId},{roleName:roleName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
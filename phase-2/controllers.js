// const express=require("express");
// const router=express.Router();
// const {getusers}=require("./export");
// router.get("/users",getusers);
// module.exports=router;

//MVC PATTERN(MODEL-VIEW-CONTROLLER)
//client request -> routes -> controller -> model -> database -> contoller -> response to client

//1.routes
// router.get("/users",getusers);

//2.controller
// const getusers=async(req,res)=>{
//     const users=await user.find();
//     res.json(users);
// };

//3.model
//user.find();
//user.create();
//user.updateOne();
//user.deleteOne();
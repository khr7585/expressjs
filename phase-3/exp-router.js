//SYNTAX
// const express=require("express");
// const router=express.Router();

//create routes
// router.get("/",(req,res)=>{
//     res.send("home page");
// });
// router.post("/",(req,res)=>{
//     res.send("create data");
// });

//export the router
// module.exports=router;

//1.Create routes/userroutes.js
// const express=require("express");
// const router=express.Router();
// router.get("/",(req,res)=>{
//     res.send("all users");
// });
// router.get("/:id",(req,res)=>{
//     res.send(`user id:${req.params.id}`);
// });
// module.exports=router;

//COMMON ROUTER METHODS
// router.get()-handles get requests
// router.post()-handles post requests
// router.put()-handles put requests
// router.patch()-handles patch requests
// router.delete()-handles delete requests
// router.use()-applies middleware to router-level routes


//ROUTE ORGANISATION
//1. USER ROUTES
// const express=require("express");
// const router=express.Router();
// router.get("/",(req,res)=>{
//     res.send("all users");
// });
// module.exports=router;

//2.PRODUCT ROUTES
// const express=require("express");
// const router=express.Router();
// router.get("/",(req,res)=>{
//     res.send("all products");
// });
// module.exports=router;

//3.AUTH ROUTES
// const express=require("express");
// const router=express.Router();
// router.post("/login",(req,res)=>{
//     res.send("user login");
// });
// router.post("/register",(req,res)=>{
//     res.send("user register");
// });
// module.exports=router;

//connected routes in export.js
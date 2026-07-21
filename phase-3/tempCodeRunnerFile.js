const express=require("express");
const router=express.Router();
const {getusers}=require("./export");
router.get("/users",getusers);
module.exports=router;
//SYNTAX-app.METHOD(PATH,CALLBACK)
// app → Express application
// METHOD → HTTP method (get, post, put, delete)
// PATH → URL path
// CALLBACK → Function that runs when the route is accessed

//1.HOME ROUTE
// const express=require("express");
// const app=express();
// app.get("/",(req,res)=>{
//     res.send("welcome to home page");
// });
// app.listen(4000,()=>{
//     console.log("server running on port 4000");
// });

//2.MULTIPLE ROUTES
// const express=require("express");
// const app=express();
// app.get("/",(req,res)=>{
//     res.send("home page");
// });
// app.get("/about",(req,res)=>{
//     res.send("about page");
// });
// app.listen(3000);

//EXAMPLE OF DIFFERENT METHODS
// app.get("/users", (req, res) => {
//     res.send("Get Users");
// });
// app.post("/users", (req, res) => {
//     res.send("Create User");
// });
// app.put("/users", (req, res) => {
//     res.send("Update User");
// });
// app.delete("/users", (req, res) => {
//     res.send("Delete User");
// });

//EXAMPLE WITH FOUR ROUTES
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//     res.send("Home");
// });
// app.get("/about", (req, res) => {
//     res.send("About");
// });
// app.get("/services", (req, res) => {
//     res.send("Services");
// });
// app.get("/contact", (req, res) => {
//     res.send("Contact");
// });
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });
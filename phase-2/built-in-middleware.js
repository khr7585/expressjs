//SYNTAX
// function middleware(req,res,next){
//     //perform some task
//     next();//pass control to the next middleware or route
// }

//EXAMPLE
// const express=require("express");
// const app=express();
// function middleware(req,res,next){
//     console.log("request recived");
//     next();
// }
// app.use(logger);
// app.get("/",(req,res)=>{
//     res.send("welcome");
// });
// app.listen(3000);

//MULTIPLE MIDDLEWARE
// app.use((req,resizeBy,next)=>{0
//     console.log("middleware 1");
//     next();
// });
// app.use((req,res,next)=>{
//     console.log("middleware 2");
//     next();
// });
// app.get("/",(req,res)=>{
//     res.send("home page");
// });

//BUILT-IN MIDDLEWARE
// app.use(express.json());
// app.post("/login",(req,res)=>{
//     console.log(req.body);
//     res.send("login successful");
// });

//ROUTE SPECIFIC MIDDLEWARE
// function checkuser(req,res,next){
//     console.log("checking user...");
//     next();
// }
// app.get("/profile",checkuser,(req,res)=>{
//     res.send("profile page");
// });

//1.APPLICATION-LEVEL MIDDLEWARE-Runs for all requests or selected paths.
// app.use((req, res, next) => {
//     console.log("Application Middleware");
//     next();
// });

//2.ROUTE-LEVEL MIDDLEWARE-Runs only for specific routes.
// app.get("/dashboard", authMiddleware, (req, res) => {
//     res.send("Dashboard");
// });

//3.BUILT-IN MIDDLEWARE-provided by express.
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

//4.ERROR-HANDLING MIDDLEWARE
// app.use((err, req, res, next) => {
//     res.status(500).send("Something went wrong");
// });

//5.THIRD-PARTY MIDDLEWARE-installed using npm
// cors → Enables Cross-Origin Resource Sharing
// morgan → Logs HTTP requests
// helmet → Adds security-related HTTP headers
// const cors = require("cors");
// app.use(cors());
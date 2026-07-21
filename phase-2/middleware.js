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

//CUSTOM MIDDLEWARE
//SYNTAX
// function middlewarename(req,res,next){
//     //your custom logic
//     next();
// }

//EXAMPLE:LOGGING MIDDLEWARE
// const express=require("express");
// const app=express();
// function middleware(req,res,next){
//     console.log(`${req.method} ${req.url}`);
//     next();
// }
// app.use(middleware);
// app.get("/",(req,res)=>{
//     res.send("welcome");
// });
// app.listen(3000,()=>{
//     console.log("server is running on port 3000");
// });

//EXAMPLE:AUTHENTICATION MIDDLEWARE
// const express=require("express");
// const app=express();
// function auth(req,res,next){
//     const isLoggedIn=true;
//     if(isLoggedIn){
//         next();
//     }else{
//         res.send("access denied");
//     }
// }
// app.get("/dashboard",auth,(req,res)=>{
//     res.send("dashboard");
// });
// app.listen(3000,()=>{
//     console.log("running")
// })

//THIRD-PARTY MIDDLEWARE
// 1.CORS
//npm install cors
// const cors=require("cors");
// app.use(cors());

//2.morgan
//npm install morgan
// const morgan = require("morgan");
// app.use(morgan("dev"));

//3.helmet
//npm install helmet
// const helmet = require("helmet");
// app.use(helmet());

//4.cookie-parser
//npm install cookie-parser
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

//EXAMPLE
// const express=require("express");
// const cors=require("cors");
// const app=express();
// app.use(cors());
// function logger(req,res,next){
//     console.log("request recived");
//     next();
// }
// app.use(logger);
// app.get("/",(req,res)=>{
//     console.log("hello");
// });
// app.listen(3000,()=>{
//     console.log("running");
// })
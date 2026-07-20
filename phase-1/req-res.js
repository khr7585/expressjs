//REQ-OBJECT
//1.REQ.PARAMS-used to get route parameters
// const express=require("express");
// const app=express();
// app.get("/user/:id",(req,res)=>{
//     console.log(req.params);
//     res.send(`user id:${req.params.id}`);
// });
// app.listen(3000);

//2.REQ.QUERY-used to get query string values from the url
// app.get("/search",(req,res)=>{
//     console.log(req.query);
//     res.send(`searching for ${req.query.name}`);
// });

//3.REQ.BODY-used to get data sent in the request body(mostly post,put,patch)
// app.use(express.json());
// app.post("/logn",(req,res)=>{
//     console.log(req.body);
//     res.send("data received");
// });

//4.REQ.METHOD-returns the http method
// app.get("/",(req,res)=>{
//     console.log(req.method);
//     res.send("home");
// });

//5.REQ.URL-returns the requested url
// app.get("/about",(req,res)=>{
//     console.log(req.url);
//     res.send("about");
// });

//6.REQ.HEADERS-returns the all request headers
// app.get("/",(req,res)=>{
//     console.log(req.headers);
//     res.send("headers");
// });

//7.REQ.IP-returns the client ip address
// app.get("/",(req,res)=>{
//     console.log(req.ip);
// });

//8.REQ.PATH-returns only the path part of the url
// app.get("/",(req,res)=>{
//     console.log(req.path);
// });

//9.REQ.HOSTNAME-returns the hostname
// app.get("/",(req,res)=>{
//     console.log(req.hostname);
// });

//10.RE.PROTOCOL-returns the request protocol
// app.get("/",(req,res)=>{
//     console.log(req.protocol);
// });

//EXAMPLE
// const express = require("express");
// const app = express();
// app.use(express.json());
// app.get("/user/:id", (req, res) => {
//     console.log(req.params);   
//     console.log(req.query);    
//     console.log(req.method);   
//     console.log(req.url);      
//     console.log(req.headers);  
//     console.log(req.ip);       
//     res.send("Request received");
// });
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });


//RES-OBJECT
//1.RES.SEND()-sends a response to the client
// app.get("/",(req,res)=>{
//     res.send("welcome");
// });

// app.get("/",(req,res)=>{
//     res.send({
//         name:"hemanth",
//         age:21
//     });
// });

//2.RES.JSON()-sends a json response
// app.get("/",(req,res)=>{
//     res.json({
//         id:101,
//         name:"hemanth"
//     });
// });

//3.RES.STATUS()-sends the http status code
// app.get("/notfound", (req, res) => {
//     res.status(404).send("Page Not Found");
// });

//4.RES.SENDSTATUS()-sends only the status code with its default  message
// app.get("/error", (req, res) => {
//     res.sendStatus(404);
// });

//5.RES.REDIRECT()-redirects the clinet to another url
// app.get("/home",(req,res)=>{
//     res.redirect("/about");
// });
// app.get("/about",(req,res)=>{
//     res.send("about page");
// });

//6.RES.RENDER()-renders  a template (ejs,pug,handlebars,etc.)
// app.get("/", (req, res) => {
//     res.render("home");
// });

//7.RES.SENDFILE()-sends a file to the client
// const path = require("path");
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

//8.RES.DOWNLOAD()-download a file
// app.get("/download", (req, res) => {
//     res.download("resume.pdf");
// });

//9.RES.END()-ends the response wihtout sending additional data
// app.get("/", (req, res) => {
//     res.end();
// });

//10.RES.SET()-sets a response header
// app.get("/", (req, res) => {
//     res.set("Content-Type", "text/plain");
//     res.send("Hello");
// });
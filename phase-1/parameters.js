//SYNTAX
// app.get("/search",(req,res)=>{
//     res.send(req.query);
// });

//EXAMPLE
// const express = require("express");
// const app = express();
// app.get("/search", (req, res) => {
//     res.send(`Search: ${req.query.name}`);
// });
// app.listen(3000);

//MULTIPLE QUERY PARAMETERS
// app.get("/products",(req,res)=>{
//     res.send(req.query);
// });

//COMBINED EXAMPLE
// const express = require("express");
// const app = express();
// app.get("/user/:id", (req, res) => {
//     res.json({
//         userId: req.params.id,
//         city: req.query.city,
//         age: req.query.age
//     });
// });
// app.listen(3000);
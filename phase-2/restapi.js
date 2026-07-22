// GET-fetch data from the server
// get/students->returns all students
// get/students/1->returns student with id1
// app.get("/students",(req,res)=>{
//     res.send("all students");
// });

// POST-add new data to the server
// app.get("/students",(req,res)=>{
//     res.send("students added");
// });
//example request body:
// {
//     "name":"hemanth",
//     "age":21
// }

// PUT-replace the entire existing resource
// app.get("/students/:id",(req,res)=>{
//     res.send("student updated ");
// });
//example-before
// {
//     "name":"hemanth",
//     "age":21
// }
//put request
// {
//     "name":"jake",
//     "age":22
// }
//after
// {
//     "name":"jake",
//     "age":22
// }

// PATCH-update only specific fields.
// app.patch("/students/:id",(req,res)=>{
//     res.send("student updated partially");
// });
//before
// {
//     "name":"hemanth",
//     "age:21"
// }
//patch request
// {
//     "age":22
// }
//after
// {
//     "name":"hemanth",
//     "age":22
// }

// DELETE-remove data from the server
// app.delete("students/:id",(req,res)=>{
//     res.send("student deleted");
// });
//example=delete/students/1

//EXAMPLE=STUDENT API
const express=require("express");
const app=express();
app.use(express.json());
let students=[
    {
        id:1,
        name:"heamnth",
        age:21,
        course:"cse"
    },
    {
        id:2,
        name:"jake",
        age:22,
        course:"csm"
    }
]

//get all students
app.get("/students",(req,res)=>{
    res.status(200).json(students);
});

//get one student
app.get("/students/:id",(req,res)=>{
    const id=Number(req.params.id);
    const student=students.find(student=>student.id===id);
    if(!student){
        return res.status(404).json({
            message:"student not found"
        });
    }
    res.status(200).json(student);
});

//add one student
app.post("/students",(req,res)=>{
    const {name,age,course}=req.body;
    const newstudent={
        id:students.length+1,
        name,
        age,
        course
    };
    students.push(newstudent);
    res.status(201).json({
        messsage:"student added successfully",
        student:newstudent
    });
});

//update entire student
app.put("/students/:id",(req,res)=>{
    const id=Number(req.params.id);
    const index=students.findIndex(student=>student.id===id);
    if(index===-1){
        return res.status(404).json({
            message:"student not found"
        });
    };
    const {name,age,course}=req.body;
    students[index]={
        id,
        name,
        age,
        course
    };
    res.json({
        message:"student updated successfully",
        student:students[index]
    });
});

//update partial student
app.patch("/students/:id",(req,res)=>{
    const id=Number(req.params.id);
    const student=students.find(student=>student.id===id);
    if(!student){
        res.status(404).json({
            message:"student not found"
        });
    };
    const {name,age,course}=req.body;
    if(name) student.name=name;
    if(age) student.age=age;
    if(course) student.course=course;
    res.json({
        message:"student updated successfully",
        student
    });
});

//delete student
app.delete("/students/:id",(req,res)=>{
    const id=Number(req.params.id);
    const student=students.find(student=>student.id===id);
    if(!student){
        return res.json({
            message:"student not found"
        });
    };
    students.splice(index,1);
    res.json({
        message:"student deleted successfully"
    });
});

//server
const port=3000
app.listen(port,()=>{
    console.log(`server runnning on http://localhost:${port}`);
});
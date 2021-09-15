const express = require ('express');
const path = require ('path');
const app = express();
const student= require ('./student')
const studentFiltre= require ('./studentFiltre')


app.use(studentFiltre);
app.use(date=(req,res,next)=>{
    var objetdate = new Date ()
    var hours = objetdate.getHours
    var day = objetdate.getDay
if ((hours>=17 && hours<=9)&&(day==0 || day==6)) {
    res.send("We are closed ")
}
    next()
})
app.use(express.static(path.join(__dirname,"Public")));
// Get All Student
app.get("/student",(req,res)=>{
    res.send(student)
})
// Get only 1 student 
app.get("/student/:id",(req,res)=>{
    res.json(student.filter(
        (el)=>{el.id ===parseInt(req.params.id)}));
})



const port=5000;
app.listen(5000,(err)=>err ? console.log("Error") : console.log(`Server is Run on port${port}`));
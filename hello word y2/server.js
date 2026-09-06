//const Add = (a,b)=>{
//      console.log(a+b)

//}
/// callback function
//     const Sub = (a,b ,callback)=>{
//         console.log("Sub function is run");       /// this is called callbackfunction

//         console.log(a-b);
//         callback(a,b);
//     }
//     Sub(10,20, function (a,b){
// console.log(a+b);

//     });
/// create a server
const express = require("express");
const db = require("./db");
const Student = require("./model/student");
const emp = require("./model/emp");
const app = express();
const bodyParsal = require("body-parser"); ///bodyParsal
app.use(bodyParsal.json());

// app.get('/', (req, res) => {

//     res.send('this is home page');
// });

// app.get('/second', (req, res) => {
//     res.send('This is my second page');
// });
// app.get('/third',(req,res)=>{
//     res.send('this is a third page ')
// });
// app.post('/myname', (req, res) => {
//     console.log(req.body);

//     res.send('User data received');
// });
// yaha pe hi post method se data aa rah hia or data nam ke varible me save ho rah hia
app.post("/Student", async (req, res) => {
  try {
    const data = req.body;
    //data va value ko yaha pe newStudent me daal kar save kar rah ehia
    const newStudent = new Student(data);   // now we use not callback function we use maily async and await 

    const savedStudent = await newStudent.save();

    res.status(200).json({
      success: true,
      data: savedStudent,
    });
  } catch (error) {
    console.log("Error saving student:", error);

    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

app.post("/Emp", async (req, res) => {
  try {
    const data = req.body;
    //data va value ko yaha pe newStudent me daal kar save kar rah ehia
    const newemp = new emp(data);   // now we use not callback function we use maily async and await 

    const savedEmp = await newemp.save();

    res.status(200).json({
      success: true,
      data: savedEmp,
    });
  } catch (error) {
    console.log("Error saving emp:", error);

    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

app.get("/Student",async (req,res)=>{
    try{
       const data = await Student.find();
       console.log("data is fetch");
       res.status(200).json(data)
    }
    catch(err){
        console.log("error is occure");
        res.status(500).json({erro:'this is internal error'})
        
    }
});
app.get("/Emp",async(req,res)=>{
    try {
        const data = await emp.find();
        console.log("data is fetch of emp");
        res.status(200).json(data)
        
    } catch (error) {
        console.log({error:'this is internal error of emp'});
        
        
    }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

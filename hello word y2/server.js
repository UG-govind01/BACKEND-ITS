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
const express = require('express');
const db =require ('./db');
 const s=Student =require('./model/student')

const app = express();
const bodyParsal = require('body-parser');   ///bodyParsal
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
// 
app.post('/Student', async (req, res) => {
    try {
        const data = req.body;

        const newStudent = new Student(data);

        const savedStudent = await newStudent.save();

        res.status(200).json({
            success: true,
            data: savedStudent
        });

    } catch (error) {
        console.log('Error saving student:', error);

        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

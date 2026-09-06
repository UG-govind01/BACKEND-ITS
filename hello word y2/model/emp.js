const mongoose = require('mongoose');
const empSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    post:{
        type:String,
        enum:["software engineer","web devloper","game devloper","app devloper"]
    },
    salry:{
        type:Number,
        required:true
    },
    phoneNO:{
        type:Number,
    },
    email:{
        type:String
    }
});
console.log('this is emp file ');

const emp = mongoose.model('emo',empSchema);
module.exports  = emp;
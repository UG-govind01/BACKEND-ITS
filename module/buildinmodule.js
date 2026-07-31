const fs = require("fs");
        //// created file code 
// fs.writeFileSync("createdByCoreModule.js", "This file is created using the fs core module.");

// console.log("File created successfully!");
         // read file code 
//const data = fs.readFileSync("createdByCoremodule.js","utf-8")
//console.log(data);
 //        this is upadate file 
//const fs = require("fs");

//fs.writeFileSync("app.js", "Updated Content");

//console.log("File Updated");

///// this is deleted 
const fs = require("fs");

fs.unlinkSync("demo.txt");

console.log("File Deleted");
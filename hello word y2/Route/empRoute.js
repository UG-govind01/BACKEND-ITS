const express = require("express");
const route = express.Router();

const emp = require("../model/emp");
const { json } = require("body-parser");

// POST EMPLOYEE
route.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newemp = new emp(data);

    const savedEmp = await newemp.save();

    res.status(201).json({
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

route.get("/", async (req, res) => {
  try {
    const data = await emp.find();

    res.status(200).json(data);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});
// GET EMPLOYEE BY POST

route.get("/:posType", async (req, res) => {
  try {
    const postType = req.params.posType;

    if (
      postType === "engineer" ||
      postType === "devloper" ||
      postType === "game" ||
      postType === "app"
    ) {
      const response = await emp.find({
        post: postType,
      });

      console.log("response fetch");

      res.status(200).json(response);
    } else {
      res.status(404).json({
        error: "This post type is not found",
      });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Internal server error",
    });
  }
});


route.put("/:id", async (req, res) => {
  try {
    const empid = req.params.id;
    const upadateempid = req.body;
    const response = await emp.findByIdAndUpdate(empid, upadateempid, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(400).json({
        error: "emp in not found in our database ",
      });
    }
    res.status(200).json({ successs: "data is upadate" });
    console.log("data is upadate ");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "upadtate faild " });
  }
});


route.delete("/:id",async (req,res)=>{
  try {
    const empid = req.params.id;
    const response = await emp.findByIdAndDelete(empid);
    if(! response){
      return res.status(404).json({error:"emp is not found"});
      
      

    }
console.log("id  delete successful");
      res.status(200).json({successs:"id successfully delete"})
  } catch (error) {
    console.log(err);
    res.sendStatus(500).json({error:"error is occure check you code "})
    
  }
})













module.exports = route;

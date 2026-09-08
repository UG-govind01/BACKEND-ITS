const express = require('express');
const studentRoute = express.Router();

const Student = require('../model/student');


// POST Student
studentRoute.post('/', async (req, res) => {
  try {
    const data = req.body;

    const newStudent = new Student(data);

    const savedStudent = await newStudent.save();

    res.status(201).json({
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


// GET Student
studentRoute.get('/', async (req, res) => {
  try {
    const data = await Student.find();

    console.log('data is fetched');

    res.status(200).json(data);

  } catch (error) {
    console.log('Error occurred:', error);

    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});


module.exports = studentRoute;
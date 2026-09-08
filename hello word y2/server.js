// Create Server
const express = require("express");
const bodyParser = require("body-parser");

// Database connection
const db = require("./db");

// Routes
const empRoute = require("./Route/empRoute");
const studentRoute = require("./Route/studentRoute");

const app = express();

// Body Parser
app.use(bodyParser.json());

// Home Route
app.get("/", (req, res) => {
  res.send("This is home page");
});

// Employee Routes
app.use("/emp", empRoute);

// Student Routes
app.use("/student", studentRoute);

// Start Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

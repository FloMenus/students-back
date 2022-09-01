const express = require("express");
const app = express();
const studentsList = require("../students");

app.get("/", (req, res) => {
  res.json(studentsList);
});

app.post("/", (req, res) => {
  const student = {
    id: studentsList.length + 1,
    name: req.body.name,
  };

  const idFinder = student.name;

  if (studentsList.find((student) => student.name === idFinder)) {
    res.status(409).json({ message: "Student already exists" });
  } else {
    studentsList.push(student);
    res.json(student);
  }
});

module.exports = app;

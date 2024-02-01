const express = require("express");
const userData = require("./data.json");
const controller = express.Router();

controller.get("/", (req, res) => {
  const { limit } = req.query;
  const { students } = userData;
  if (!limit || isNaN(limit)) {
    res.send(students);
  }
  const studentsWithLimit = students.slice(0, Number(limit));
  res.send(studentsWithLimit);
});

controller.get("/:id", (req, res) => {
  const { students } = userData;
  const foundStudentByID = students.find(
    (student) => req.params.id === student.id
  );
  // if found student
  res.send(foundStudentByID);
  // else error message
});

controller.get("/capitalStudentName/:id", (req, res) => {
  const { students } = userData;
  const foundCapitalStudentName = students.find(
    (student) => req.params.id === student.id
  );
  const capitalStudentName = (
    foundCapitalStudentName.firstName + foundCapitalStudentName.lastName
  ).toUpperCase();
  res.send(capitalStudentName);
});

module.exports = controller;

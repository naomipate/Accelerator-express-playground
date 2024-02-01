const express = require("express");
const app = express();
const usersController = require("./dataController");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersController);

module.exports = app;

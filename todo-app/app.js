const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const tasks = [];

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/add", (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

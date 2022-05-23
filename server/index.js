const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const todos = require("./routes/todosRoute")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/todos",todos)

app.listen(8080, () => {
    console.log("Server listening at 8080");
}, err => console.error(err))
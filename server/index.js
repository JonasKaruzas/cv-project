const express = require("express");
const app = express();
const port = 5000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const fs = require("fs");

app.get("/", (req, res) => {
  const data = fs.readFileSync("./public/user.json");
  const json = JSON.parse(data);
  res.send(json);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

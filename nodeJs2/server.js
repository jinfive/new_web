const express = require("express");

const app = express(); //express할 수 있는 객체 리턴

app.get("/", (req, res) => {
  // http header
  console.log("주소로 GET요청 들어옴");

  res.status(200);
  res.send("Hello, Express!"); //http body
});

app.get("/contacts/:id", (req, res) => {
  console.log("/contacts/:id GET요청 들어옴");
  let id = req.params.id; //params object
  res.status(200);
  res.send("Your id>> " + id); //ㅏ
  // res.send("Your id>> " + req.query.id); //query object
  // res.send("Your id>> " + req.body.id); //body object
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("S");
});

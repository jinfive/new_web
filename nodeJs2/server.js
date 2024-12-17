const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("주소로 GET요청 들어옴");
  res.status(200).send("Hello, Express!");
});

app.get("/contacts/:id", (req, res) => {
  console.log("/contacts/:id GET요청 들어옴");
  const id = req.params.id;
  const message = `Your id>> ${id}`;
  console.log(message);
  res.status(200).send(message);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

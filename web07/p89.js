const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/login", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/check", (req, res) => {
  console.log("/check 주소로 GET요청 들어옴.");
  res.status(200);
  let id_val = req.query.id;
  let pw_val = req.query.pw;
  console.log(id_val + " " + pw_val);
  let result = "";
  if (id_val == "admin" && pw_val == "1234") {
    result = "로그인 성공";
  } else {
    result = "로그인 실패";
  }
  res.send(result);
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

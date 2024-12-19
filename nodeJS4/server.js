const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// EJS를 뷰 엔진으로 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  console.log("/ 주소로 GET요청 들어옴");
  res.status(200);
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/insert", (req, res) => {
  console.log("/insert 주소로 GET요청 들어옴.");
  res.status(200); //http header
  res.sendFile(path.join(__dirname, "views", "insert.html"));
});

app.get("/check", (req, res) => {
  console.log("/insert2 주소로 GET요청 들어옴.");
  res.status(200);
  let id_value = req.query.id;
  let pw_value = req.query.pw;
  let name_value = req.query.name;
  let tel_value = req.query.tel;
  console.log(id_value + " " + pw_value + " " + name_value + " " + tel_value);

  // 'insert2'로 변경 (확장자 생략)
  res.render("insert2", {
    id: id_value,
    pw: pw_value,
    name: name_value,
    tel: tel_value,
  });
});
app.get("/delete", (req, res) => {
  console.log("/delete 주소로 GET요청 들어옴.");
  res.status(200); //http header
  res.sendFile(path.join(__dirname, "views", "delete.html"));
});

app.get("/del", (req, res) => {
  console.log("/delete2 주소로 GET요청 들어옴.");
  res.status(200);
  let id_value = req.query.id || "알 수 없음";

  console.log("삭제된 ID:", id_value);

  res.render("delete2", {
    id: id_value,
  });
});

app.listen(3000, () => {
  console.log("-------------------------");
  console.log("3000번 포트 서버 시작됨.");
  console.log("-------------------------");
});

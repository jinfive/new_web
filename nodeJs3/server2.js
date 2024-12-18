const express = require("express");

const app = express(); //express할 수 있는 객체 리턴

app.get("/", (req, res) => {
  console.log("/ 주소로 GET요청 들어옴.");
  res.status(200); //http header
  res.sendFile(__dirname + "/index.html"); //http Body에 들어감
  //정적 파일(static)
});
app.get("/home", (req, res) => {
  console.log("/home 주소로 GET요청 들어옴.");
  res.status(200); //http header
  res.sendFile(__dirname + "/home.html"); //http Body에 들어감
  //정적 파일(static)
});
app.get("/weather", (req, res) => {
  console.log("/weather 주소로 GET요청 들어옴.");
  res.status(200);
  let data = {
    temp: -1,
    high: 5,
    low: -7,
    vi: 100,
  }; //http header
  res.json(data); //http Body에 들어감
  //정적 파일(static)
});
app.get("/contact:id", (req, res) => {
    console.log("/contact 주소로 GET요청 들어옴.");
    const id = req.params.id;
    const message = `Your id>>> ${id}`;
    console.log(message);
    res.status(200).send(`
      <h1>${message}</h1>
      <img src="/new.png" alt="Image">
    `);
  });
  app.get("/finance", (req, res) => {
    console.log("/finance 주소로 GET요청 들어옴.");
    res.status(200);
    let data = {
      name: "s",
      high: 5,
      
      
    }; //http header
    res.json(data); //http Body에 들어감
    //정적 파일(static)
  });
  
  // 정적 파일 제공을 위한 미들웨어 추가
  app.use(express.static(__dirname));
  
app.listen(3000, () => {
  console.log("-------------------------");
  console.log("3000번 포트 서버 시작됨.");
  console.log("-------------------------");
});

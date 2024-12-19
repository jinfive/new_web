const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// board.html 파일 전송
app.get("/board", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "board.html"));
});

// /board2 요청 시 데이터 반환
app.get("/board2", (req, res) => {
  console.log("/board2 주소로 GET 요청 들어옴.");
  const no = req.query.no; // 게시판 글 번호
  const title = req.query.title; // 게시판 제목
  const content = req.query.content; // 게시판 내용
  const writer = req.query.writer; // 게시판 작성자

  // 데이터 출력 (서버 콘솔)
  let result = `no: ${no}, title: ${title}, content: ${content}, writer: ${writer}`;
  console.log(``);

  // 클라이언트로 JSON 응답 반환
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

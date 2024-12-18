const { log } = require("console");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log("클라이언트 요청 들어옴.");
  console.log(req.method);

  let method = req.method;
  let parsedUrl = url.parse(req.url, true);
  let path = parsedUrl.pathname;

  res.setHeader("Content-Type", "text/plain");

  if (method === "GET" && path === "/home") {
    res.statusCode = 200;
    res.end("HOME page...!!");
    for (let index = 0; index < 1000; index++) {
      for (let index = 0; index < 1000; index++) {
        console.log(1);
      }
    }
  } else if (method === "GET" && path === "/about") {
    res.statusCode = 200;
    res.end("ABOUT page...!!");
  } else {
    res.statusCode = 404;
    res.end("File Not Found...!!");
  }
});

server.listen(3000, () => {
  console.log("3000번 포트 서버 시작됨.");
});

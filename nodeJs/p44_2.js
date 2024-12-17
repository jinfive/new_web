const fs = require("fs");

fs.readFile("sample.txt", "utf-8", (err, data) => {
  if (err) throw err; // 쉼표가 아닌 세미콜론으로 수정

  // writeFile을 사용 (writeFileSync가 아님)
  fs.writeFile("sample.txt", data, (err) => {
    if (err) throw err;
    console.log("파일 내용:", data);
    console.log("비동기작업 완료");
  });
});

console.log("비동기 작업이 실행이 되어야 다른 작업이 실행");

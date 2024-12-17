//문제1 동기 방식으로 sample.txt를 utf-8로 읽은 데이터를 저장
const fs = require('fs');

const data=fs.readFileSync("sample.txt", "utf8");
fs.writeFileSync("sample.txt", data);
console.log("파일 내용:", data); // 읽은 데이터 출력
console.log("동기작업 완료");

console.log("동기 작업이 실행이 되야 다른 작업이 실행");
console.log("동기이므로 다른작업은 기다려");



//다음 화살표 함수에서 return을 생략하도록 코드를 수정하세요.
let getMessage = () => {
  return "Hello, World!";
};

let getMessage1 = () => "Hello, World!";

//다음 화살표 함수에서 파라미터 괄호를 생략하고 코드를 간결하게 만드세요.
let addTen = (num) => {
  return num + 10;
};
let addTen1 = (num) => num + 10;

//아래 코드를 화살표 함수로 변환하고 return을 생략하여 객체를 반환하도록 작성하세요.
function getUser() {
  return {
    name: "Alice",
    age: 25,
  };
}

let getUser1 = () => ({ name: "Alice", age: 25 });

//process("*", 10); *이 10개 출력되게 만들기
async function process(char, num) {
  const result = await new Promise((success) => {
    let sum_str = char.repeat(num);
    success(sum_str);
  }); //먼저 처리할 함수 함수 호출해야하는데 , promise객체 리턴
  console.log(result); //
}

process("*", 10);

//랜덤한값 1~ 100 범위 내로 만들어서 입력한 100을 더한후 리턴
async function process2(num) {
  const result = await new Promise((success) => {
  
    let r =  Math.floor(Math.random() * 100) + 1;
    success(r+num);
  }); //먼저 처리할 함수 함수 호출해야하는데 , promise객체 리턴
  console.log(result); //
}

process2(100);
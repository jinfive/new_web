//process("*", 10); *이 10개 출력되게 만들기
async function process(a, b) {
  const result = await new Promise((success) => {
    let result = "";
    for (let i = 0; i < b; i++) {
      result += a;
    }
    success(result);
  }); //먼저 처리할 함수 함수 호출해야하는데 , promise객체 리턴
  console.log(result); //
}

process("*", 10);

//랜덤한값 1~ 100 범위 내로 만들어서 입력한 100을 더한후 리턴
async function process2(a) {
  const result = await new Promise((success) => {
    let result = 0;
   
      result += Math.floor(Math.random() * 100) + 1;
    
  
    success(result +a);
  }); //먼저 처리할 함수 함수 호출해야하는데 , promise객체 리턴
  console.log(result); //
}

process2(100);
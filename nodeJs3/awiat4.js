async function process(a, b) {
  const result = await new Promise((success) => {
    let sum = a + b;
    success(sum);
  }); //먼저 처리할 함수 함수 호출해야하는데 , promise객체 리턴
  console.log(result); //
}

process(100, 200);

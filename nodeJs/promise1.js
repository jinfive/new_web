const p = new Promise((success, fail) => {
    setTimeout(() => {
      let num = Math.random();
      if (num > 0.8) {
        fail("생성된 숫자가 0.8보다 커서 실패: " + num);
      } else {
        success(num);
      }
    }, 2000);
  });
  
  p.then((x) => console.log("성공 전달 받은 값: " + x))
   .catch((err) => console.log("에러 정보: " + err));


   console.log("프로미스 객체 생성");
  
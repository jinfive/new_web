//process2(“홍길동", 10)호출“홍길동의 내년 나이는 11살이다. “라는 문자열을 만들어리턴받은 후결과 변수에 넣어 출력출력예시 :  홍길동의 내년 나이는 11살이다. 


async function process2(name, age) {
    const result = await new Promise((success) => {
     let sum = `${name}의 내년의 나이는 ${age+1}세이다.`
     success(sum);
    });
    console.log(result);
}

process2("홍길동", 10);

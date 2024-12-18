//비동기 처리 async,await가 간단하고 변하다
function delay(word,num){
    
    return new Promise((success) => {
        setTimeout(() => {
            success(word + "가 반환됨.");
        }, num);
    });
}

async function process(){
    const result= await delay("내가 찍혀",1000); //먼저 처리할 함수 함수 호출해야하는데 , promise객체 리턴
    console.log(result); //


}

process();
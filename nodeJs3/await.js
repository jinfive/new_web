const fs =require("fs").promises;

async function readDirAsync(){
    //dir명령 결과를 files변수에 넣고 
    //files를 프린트
    const files = await fs.readdir("./");
    console.log(files);
    
}
//밑에 실행될것..

readDirAsync();

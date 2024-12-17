const p = new Promise((resolve, reject) => {
    console.log("Starting");
    resolve("두수를 랜덤하게 생성하여 더한후 리턴");
});

p.then((msg) =>{
    console.log(`1===> ${msg}`);
    const n1 = Math.floor(Math.random() *10)+1;
    const n2 = Math.floor(Math.random() *10)+1;
    const sum = n1 + n2;
    return sum;
})
.then((msg) =>{
    console.log(`2===> ${msg}`);
    console.log("두수를 랜덤하게 생성해 곱한 값을 리턴");
    const n1 = Math.floor(Math.random() *10)+1;
    const n2 = Math.floor(Math.random() *10)+1;
    
    const mul = n1 * n2;
    return `${msg}, ${mul}`;
})
.then((msg) =>{
    console.log(`3===> ${msg}`);
    let result = msg.split(",");
    console.log(`두 요소의 합은 ${result[0]} \n두수의 곱은 ${result[1]}`);
    
})
.catch((error) => {
    console.log(`Error: ${error}`);
});
    
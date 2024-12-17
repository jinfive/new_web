function sum(...numbers) {
    let total = 0;
    for(let number of numbers) {
        total += number;
    }
    console.log(total);
}
sum(10,20,30);
sum(5,15);

function printInfo(name, age,...hobby){
    console.log("name: "+name);
    console.log("age: "+age);
    console.log("hobby: "+hobby.join(","));
}
printInfo("이영희",25,"독서","요가");
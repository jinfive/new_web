let name = "hong";//String
let age = 30;//number
let email = "hong@gmail.com";//String

let person={
    name: name,
    age: age,
    email: email
}

let person2={
    name,
    age,
    email,
    eat: function(){
        console.log(this.name+" is eating");
    },
    sleep: function(){
        console.log(this.name+" is sleeping");
    },
    Wakrking(){
        console.log(this.name+" is Waking up");
        this.eat(); //객체 안에서 사용시 this를 붙여야함
    }
}

console.log(person2.name);
person2.eat();
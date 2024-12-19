//객체가 비어있는지 확인하는 코드를 작성const obj1 = {};
const obj1 = {};
console.log(Object.keys(obj1).length === 0);

//객체에 특정 키가 존재하는지 확인하는 코드를 작성객체 { name: "Alice", age: 25 }이며, 키 "age"의 존재를 확인
const obj2 = { name: "Alice", age: 25 };
console.log("age" in obj2);

//주어진 객체의 모든 키를 배열로 변환객체 { x: 10, y: 20, z: 30 }
const obj3 = { x: 10, y: 20, z: 30 };
console.log(Object.keys(obj3));

//주어진 객체의 모든 값을 배열로 변환객체 { x: 10, y: 20, z: 30 }
const obj4 = { x: 10, y: 20, z: 30 };
console.log(Object.values(obj4));

//주어진 객체를 [키, 값] 쌍의 배열로 변환객체 { x: 10, y: 20, z: 30 }
const obj5 = { x: 10, y: 20, z: 30 };
console.log(Object.entries(obj5));

// 문제 1: 배열의 모든 요소를 두 배로 만들기
let arr1 = [1, 2, 3, 4];
const double = arr1.map((arr1) => arr1 * 2);
console.log(double); // [2, 4, 6, 8]

// 문제 2: 배열에서 홀수만 필터링하기
let arr2 = [1, 2, 3, 4];
const odd = arr2.filter((arr2) => arr2 % 2 != 0);
console.log(odd);

// 문제 3: 배열을 역순으로 정렬하기
arr3 = [1, 2, 3, 4];
console.log(arr3.reverse());

// 문제 4: 배열의 첫 번째 요소 가져오기
arr4 = ["apple", "orange", "pearson"];
let first = arr4[0];
console.log(first); // "Apple"

// 문제 5: 배열을 문자열로 합치기 (구분자: '-')
arr5 = ["apple", "orange", "pearson"];
console.log(arr5.join("-"));

// 문제 6: 배열에 새 요소 추가하기
arr6 = ["apple", "orange"];
arr6.push("express");
console.log(arr6); // ["apple", "orange", "express"]

// 문제 7: 배열에서 특정 요소의 인덱스 찾기
arr7 = ["apple", "orange", "pearson"];
let index = arr7.indexOf("person");
console.log(index); // 2
// 문제 8: 배열의 요소를 거꾸로 뒤집기
arr8 = [1, 2, 3, 4];
console.log(arr8.reverse()); // [4, 3, 2, 1]

// 문제 9: 배열의 길이 구하기
arr9 = ["apple", "orange", "pearson"];
console.log(arr9.length); // 3

// 문제 10: 배열에서 모든 요소를 곱하기
arr10 = [1, 2, 3, 4, 5];

let total = arr10.reduce((acc, x) => acc * x, 1);
console.log(total); // 120

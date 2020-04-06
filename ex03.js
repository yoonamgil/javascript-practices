// null 과 undefined 

var myVar1;
var myVar2 = null;

console.log(myVar1+ ":" +myVar2);
console.log(typeof(myVar1)+ ":"+typeof( myVar2));

console.log(myVar1 == myVar2)// 값 비교 
console.log(myVar1 === myVar2) // type 비교 

console.log("------------------------------------------")
// ==: equality, 값의 동치성, 형변환이 일어난다.  
console.log(1 == "1"); // 값은 같기 때문에 true가 출력된다.
console.log(1 == true); // true와 1을 비교하면 true값이 나온다.
console.log('abc'==new String('abc')); // true

console.log(true + 10);// true를 1로 바꿔서 11로 나온다. 
console.log('abc'+ new String('abc'));
console.log("1"+1);

//===: identity, 객체의 동일성 ,형변환 x 
console.log(1==="1"); // number 과 string은 다르기 때문에 false가 출력된다
console.log(1 === true); 
console.log('abc'===new String('abc'));
console.log("------------------------------------------")

var str = "5";
console.log(parseInt(str) == 5);// 왠만해선 자바와 같이 코딩하라
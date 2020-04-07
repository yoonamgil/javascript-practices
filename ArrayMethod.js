// 배열 메소드 - concat 

var colors =['blue','white','yellow'];
var fruits =['mango','banana','apple'];

var test=fruits.concat(colors);

console.log(test);


// 배열 메소드 - join 

var str = fruits.join(',');
console.log(str);


// 배열 메소드 - pop , push : stack 지원
var color= colors.pop();
console.log(color);
console.log(colors);

colors.push('red');
console.log(colors);

//배열 메소드 - reverse 

console.log(fruits);
fruits.reverse();
console.log(fruits);

//배열 메소드 - shift

var numbers=[4000,8000,3000,5000,1000];
console.log(numbers);
numbers.shift();
console.log(numbers);

// 배열 메소드 - slice 
var numbers2=numbers.slice(0,3);
console.log(numbers2);
console.log(numbers);



// 배열 메소드 - sort 
console.log(numbers);
numbers.sort();
console.log(numbers);

// 배열 메소드 - splice 
// index 부터 count개 삭제 후 삭제 요소를 배열로 반환 
console.log(fruits);
var fruits2=fruits.splice(0/* index*/ , 2 /*count*/);
console.log(fruits2);
console.log(fruits);

var a = [0,1,2,3,4];
var a1= a.splice(1,3,10);
console.log(a);
console.log(a1);
a.splice(1,0,20);
console.log(a);

// 변수의 범위 
// 1. 자바스크립트 자바와 같은 block scope는 없다.
// 2. functiondml {} 안에서 변수의 var를 사용하게 되면 function scope가 된다. 
// 3. let, const(ex06)는 Block Scope를 만든다. 
var i= 10;
var f = function(){
	
	var i=20;
	 j=100;
	console.log(i);
	i= i -1;
	
}
{
	var x = 10;
	console.log(x);
}


console.log(x);
f();
console.log(i);
console.log(j);

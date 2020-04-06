// 생성자 함수로 다수의 객체 생성하기 

// 일반 함수(관례 소문자로 시작)
var myFunction = function(){
	console.log('일반 함수');
	
}

// 생성자 함수(관례 대문자로 시작)

var MyObject= function(name,age){
	this.name=name;
	this.age = age;
}

var o4= new MyObject('둘리',10);
var o5= new MyObject('마이콜',30);
console.log(o4 + ":"+ typeof(o4));
console.log(o4 + ":"+ typeof(o5));
var MyObject = function(name,age){
	this.name=name;
	this.age=age;
	console.log("생성자 실행");
}

MyObject.prototype.school= "bit";
MyObject.prototype.course ="douzone";
MyObject.prototype.info=function(){
	console.log(this.name + ":" + this.age + ":"+ this.school+":" + this.course);
}


// MyObject 객체 생성 
var o1 = new MyObject("둘리",10); 



console.log(o1.school + ":"+o1.course);

o1.school="multicampus";
console.log(o1);

//MyObject 객체 생성 
var o2 = new MyObject("마이콜",30); 
console.log(o2);

console.log(o1.school + ":" +o2.school);

// 오버라이딩
o2.info= function(){
	console.log("비밀!"); 
	
}

o2.info();
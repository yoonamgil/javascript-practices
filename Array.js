// 배열(Array)


// 1. 생성자 함수
var a1 = new Array() // 생성자 함수 
console.log(typeof(a1));

var a2 =new Array(10);// 배열의 크기를 설정을 할순 있지만 배열의 크기를 지정하는 것에 의미가 없다 

console.log(a2.length);

a2[0]=0;
a2[10] =10;
a2[11]= 11;
a2[12]=12;
// 배열의 크기가 동적으로 늘어난다.

console.log(a2[1],a2[2]);// 배열 요소의 값을 대입하지 않으면 undefined
console.log(a2.length);

//Array  VS  Object 
a= [];
a[0] = 0;
a["1"] = 1;
a["name"]= "머지?";
console.log(a["0"],a[0],a["name"],a.length);
for(property  in a){
    console.log("prop:"+property+ ":"+ typeof(property));
}

console.log("====================================");

o= {}; 
o["0"]= 0;
o["1"]= 1;
o["name"]="머지?";
console.log(o["0"],o[0],o["name"],o.length);



// 2. 리터럴 


var a3 = []; // 리터럴
console.log(typeof(a3),a3.length);
// 배열의 초기화
var a4 =[function(){
    console.log("hello");
},
20,
"javaScript",
true,
{
    email: "skaska5@naver.com",
    name: '유남길'

},
null,
undefined

];
console.log(a4.length);
for(var i =0; i<a4.length; i++){
    console.log(a4[i]);
}
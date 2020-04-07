//URL 다루기 


//1. escape  (x) :  URL을 전부 encoding , deprecated 

var url = 'http://localhost:8080/mysite04?n=유남길'

var url2 = escape(url);

console.log(url2);

//2. encodeURI (o) : parameter 부분만 encoding 시킨다. 

var url3= encodeURI(url);
console.log(url3);

// document.
// localtion.href =encodeURI(url);

//3. encodeURIComponent

var url4 = encodeURIComponent(url);
console.log(url4);

//4. encodeURIComponent 사용 예 
var url = "http://localhost:8080/mysite3";

var o = {
    no : 10,
    name : '안대혁',
    mail: 'skaska5@naver.com'
}

var toQureyString = function(o){

    var  qs=[];
    for(property in o){
        qs.push(property +"=" + encodeURIComponent( o[property]) );
    }
    return qs.join('&'); 
}


var url5 = url+ "?" + toQureyString(o);
console.log(url5);


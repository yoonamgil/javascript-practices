// 배열 확장 : 리스트 메소드 추가하기 

Array.prototype.insert=function(index,value){
    if(value instanceof Array){
        
        // 1.for문으로 해결
        // for(var i=0; i<value.length;i++){
        //     this.splice(index++,0,value[i]);
        // }

        // 2.forEach와 bind로 해결
        // value.forEach(function(element){
            
        //     this .splice(index++,0,element);
        // }.bind(this));

        // closer 로 해결 
        var _this=this;
        value.forEach(function(element){
            
            _this .splice(index++,0,element);
        });

    }else{
        this.splice(index,0,value)
    }
}

Array.prototype.remove=function(index){
    this.splice(index,1);
}


// 리스트로 사용하기 

var a =[1,2,4];
a.insert(2,3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2,['a','b','c']); // 기대: [1,2,'a','b','c',3]
console.log(a);
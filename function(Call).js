

var o = {
    name: "skaska5@navver.com"

};

globalThis.name="nodejs";
var f= function(s){
    console.log(s + ":" + this.name );
}

f("hello");


var o = {
    name: "skaska5@navver.com"

};

f.call(o,"hi");

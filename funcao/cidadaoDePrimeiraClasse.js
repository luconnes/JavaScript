function fun1(){};

const fun2=function () {};

const array = [function(a,b){return a+b},fun1,fun2];

const obj = {};
obj.falar = function() {return "Opa"};
console.log(obj.falar());
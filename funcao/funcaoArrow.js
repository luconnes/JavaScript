let dobro = function(a){
return a*2;
}

dobro = (a) =>{
     return 2*a;
}

dobro = a => 2*a;
console.log(dobro(Math.PI));

let ola = function(){
    return "ola";
}

ola = () => "OLA";
ola = _ =>"OLA";
console.log(ola());
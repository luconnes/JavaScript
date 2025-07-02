//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a+b);
}

imprimirSoma(2,9);
imprimirSoma(7);
imprimirSoma(2,10,3,4,6,8);//pega os 2 primeiros e ignora o resto
imprimirSoma();

//funcao com retorno
function soma(a,b=0){
    return a+b;
}

console.log(soma(2,3));
console.log(soma(2));
console.log(soma());

//armazena uma function em uma variavel
const imprimiSoma2 = function(a,b){
    console.log(a + b);
}
imprimiSoma2(2,5);
//Armazendo uma funcao em uma ARROW function
const soma2 = (a,b) =>{
    return a+b;
}

console.log(soma(2,4));
//retorno implicito
const subtracao = (a,b)=> a-b;
console.log(subtracao(2,4));
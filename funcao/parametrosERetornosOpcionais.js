function area(largura,altura){
const area = largura * altura;
    if(area>20){
        console.log("valor acima do permitido:" + area + "= m**2")
    }
    else{
        return area;
    }
}

console.log(area(2,2));
console.log(area(2));
console.log(area());
console.log(area(2,3,5,6,78,8));
console.log(area(5,5));
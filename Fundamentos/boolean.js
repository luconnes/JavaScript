let isAtivo=false;
console.log(isAtivo);
isAtivo=true;
console.log(isAtivo);
isAtivo=1;
console.log("");
console.log("Os verdadeiros...");

console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo=true));
console.log("");
console.log("Os Faslsos...");

console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo=false));
console.log("");
console.log("Finalizando...");

console.log(!!" "||null||0||" ");

let nome= ""

console.log(nome||"Desconhecido");//Operacao logica em cima de uma string 
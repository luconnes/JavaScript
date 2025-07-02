let valor //nao inicializada
console.log(valor);
valor=null; //Ausencia de valor 
console.log(valor);
//console.log(valor.toString()) //ERRO!
const produto = {};
console.log(produto.preco);
console.log(produto);
produto.preco = 3.50;
produto.preco=undefined;//evite definir como undefined
console.log(!!produto.preco);
delete produto.preco;
console.log(produto)
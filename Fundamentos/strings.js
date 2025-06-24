const escola='cod3r';

console.log(escola.charAt(4));//chatAt mostra o caracter na posicao definida
console.log(escola.charCodeAt(3)); //codigo no caracter 3 na tabela unicode
console.log(escola.indexOf(3));
console.log(escola.substring(1));//substring apenas com o inicio da string
console.log(escola.substring(0,3));//substring com indice inicial e final
console.log("ESCOLA ".concat(escola).concat("!"));//concatenacao
console.log(escola.replace(3,"e"));//trocar de lugares 
console.log("escola,tarefa,livro".split(","));//split


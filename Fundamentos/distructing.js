const pessoa ={
    nome: "ana",
    idade:10,
    endereco:{
        logadouro:"rua abc",
        numero :1000,
    }
}



const {nome,idade} = pessoa;
console.log(nome,idade);
console.log(pessoa.endereco);

const{nome:n, idade:i}=pessoa;
console.log(n,I);

const pessoa ={
    saudacao:"Bom dia",
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar=pessoa.falarl;
falar();//conflitos entre paradigmas:funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa("bom diasaaaaa")

function tratarErroeLancar(erro){
    //throw new Error("...");
    //throw 10;
    //throw true;
    //throw "MENSAGEM";
    throw{
        nome:erro.name,
        msg:erro.message,
        date: new Date,
    }
}

function imprimiNomeGritado(obj){
    try{
         console.log(obj.name.toUpperCase()+"!!!");

    }catch(e){
        tratarErroeLancar(e);
    }finally{
        console.log("FINAL");
    }
}
const obj = {name:"roberto"};
imprimiNomeGritado(obj);
function soBoaNoticia(nota){
    if(nota>=7){
        console.log("Aprovado com " + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log("E verdade..." + valor)
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
function teste1(num){
    if(num>7)
        console.log(num);
        console.log("Final");
    
}

teste1(6);
teste1(8);
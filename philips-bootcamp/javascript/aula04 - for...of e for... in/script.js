var jogador1 = 3;
var jogador2 = 5;
var placar;

if(jogador1 != -1 && jogador2 != -1) {
    if(jogador1 > 0) {
        console.log('Jogador 1, marcou ponto');
        if(jogador1 > jogador2){
            placar = jogador1 > jogador2;
        } else {
            placar = jogador2 > jogador1;
        }
    } else if(jogador2 > 0){
        console.log('Jogador 2, marcou ponto ');
        if(jogador2 > jogador1){
            placar = jogador2 > jogador1;
        }else {
            placar = jogador1 > jogador2;
        }
    }else {
        console.log('Ninguem marcou ponto.');
    }
}

switch(placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou. ');
    break;

    case placar = jogador1 < jogador2:
        console.log('jogador 2 ganhou. ');
    break;
    
    default:
        console.log('Ninguem ganhou. ');
}


let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

for (let i = 0; i<array.length; i++) {
    console.log(array[i]);
}

for (let i in array) {
    console.log(i);
}

for (i in object) {
    console.log(i);
}

for (i of array) {
    console.log(i);
}

for (i of object.propriedade1) {
    console.log(i)
}


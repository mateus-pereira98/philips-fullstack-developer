//Crie uma função 'sem parametros', para retornar o maior número de uma quantidade 'n' de argumentos.

function findMax() {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max ) {
            max = arguments[i];
        }
    }
    return max;
}

const myArr = [2, 8, 88, 9, 29, 49, 200, 150, 1];
console.log(findMax(...myArr)); // spread , torna os elementos de um array em elementos, únicos.
console.log(findMax(2, 8, 88, 9, 29, 49, 200, 150, 1));
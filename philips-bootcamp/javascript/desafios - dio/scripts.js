//Crie um programa que leia 6 valores, os quais poderão ser negativos e/ou positivos. Em seguida, apresente a quantidade de valores positivos digitado.

function gets() {
   let valor = window.prompt("Digite um número: ");
   return valor;
}

let quantidadePositivos = 0;
for (let i = 0; i < 6; i++) {
    const valorInformadoPeloUsuario = gets();
    if (valorInformadoPeloUsuario > 0) {
        quantidadePositivos++;
    }
}
window.alert(`${quantidadePositivos} valores positivos. `);

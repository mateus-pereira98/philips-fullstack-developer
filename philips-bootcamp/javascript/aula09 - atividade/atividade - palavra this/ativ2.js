// Atividade 2: This

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos.`;
}

const pessoa1 = {
    nome: "Mateus",
    idade: 23,
    turma: '3º',
};

const pessoa2 = {
    nome: "Will Smith",
    idade: 55,
    turma: '2º',
};
//mudando valor da palavra this com call / apply;
console.log(calculaIdade.call(pessoa1, 50));
console.log(calculaIdade.apply(pessoa2, [10]));


Object.entries(pessoa2).forEach((key, value) => {
    console.log(key, value);
});
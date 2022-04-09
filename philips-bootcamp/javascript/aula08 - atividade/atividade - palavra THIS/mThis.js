// manipulando this
//call
const person = {
    nome: "Miguel",
};

const animal = {
    nome: 'Murphy',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(person);

//bind
const retornaNomes = function() {
    return this.nome;
}

let bruno = retornaNomes.bind({nome: "Bruno" });
console.log(bruno());
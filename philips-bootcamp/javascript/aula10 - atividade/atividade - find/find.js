// Atividade 3: encontrar uma pessoa, e mostrar o nome e idade dessa pessoa dentro de um objeto, se não existir,retorne uma mensagem, essa pessoa não existe.

const pessoas = [
    {
        nome: 'Mateus',
        idade: 23,
        turma: '3º Semestre'
    },
    {
        nome: 'Carlos',
        idade: 45,
        turma: '5º Semestre'
    },
    {
        nome: 'Monica',
        idade: 26,
        turma: '3º Semestre'
    },
    {
        nome: 'João',
        idade: 19,
        turma: '2º Semestre'
    },
];

function getPessoa(obj) {
    const pessoa = obj.find((pessoa) => pessoa.nome === 'Mateus');
    if(pessoa == null) {
        let msg = "Essa pessoa não existe. ";
        return msg;
    }
    return `Nome: ${pessoa.nome} | Idade: ${pessoa.idade}`;
}
console.log(getPessoa(pessoas));
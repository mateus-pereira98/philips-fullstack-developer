// Atividade 1: Alunos Aprovados
const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '3A',
    },
];

function alunosAprovados(array, media) {
    let aprovados = [];
    
    for(let i = 0; i < array.length; i++) {

        const {nota, nome} = array[i]; //object destruct

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos, 5));
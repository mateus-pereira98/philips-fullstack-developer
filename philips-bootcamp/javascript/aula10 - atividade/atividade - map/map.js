// Atividade 1: Maps
// Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

const myMap = new Map();
myMap.set('Gleyciane', 'Professor(a)');
myMap.set('Rebecca', 'Professor(a)');
myMap.set('Loiola', 'Professor(a)');
myMap.set('Bonetti', 'Professor(a)');
myMap.set('Lelis', 'Professor(a)');
myMap.set('Denise', 'Professor(a)');
myMap.set('Eliseu', 'Professor(a)');
myMap.set('Mateus', 'Aluno');
myMap.set('Jean', 'Aluno');
myMap.set('Gabriel', 'Aluno');
myMap.set('Rodrigo', 'Aluno');
myMap.set('João', 'Aluno');
myMap.set('Marciel', 'Aluno');
myMap.set('Lucas', 'Aluno');

function getTeachers(map) {
    let techers = [];
    for([key, value] of map) {
        if(value === 'Professor(a)') {
            techers.push(key);
        }
    }
    return `Professores: ${techers}`;
}

console.log(getTeachers(myMap));
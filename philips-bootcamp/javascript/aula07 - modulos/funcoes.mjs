function mostraSoma(val1, val2) {
    let resultado = val1 + val2;
    return `A soma de ${val1} + ${val2} é : ${resultado}.`;
}

function mostraIdade(nome, idade) {
    return `A idade de ${nome}, é ${idade} anos. `;
}

export {mostraSoma, mostraIdade};
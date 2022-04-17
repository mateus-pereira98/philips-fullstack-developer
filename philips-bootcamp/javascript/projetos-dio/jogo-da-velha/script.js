const CAMPO_1 = document.querySelector('div#campo1');
const CAMPO_2 = document.querySelector('div#campo2');
const CAMPO_3 = document.querySelector('div#campo3');
const CAMPO_4 = document.querySelector('div#campo4');
const CAMPO_5 = document.querySelector('div#campo5');
const CAMPO_6 = document.querySelector('div#campo6');
const CAMPO_7 = document.querySelector('div#campo7');
const CAMPO_8 = document.querySelector('div#campo8');
const CAMPO_9 = document.querySelector('div#campo9');
let vez = true;

function teste(campo) {
    campo.addEventListener("click",  function event() {
        if (vez){
            if (campo.style.backgroundColor === 'purple') {
                campo.style.backgroundColor = 'purple';
            } else if (campo.style.backgroundColor === 'blue') {
                campo.style.backgroundColor = 'blue';
            } else {
                campo.style.backgroundColor = 'blue'; 
                vez = false;
                vencer('blue');
            } 
        } else {
            if (campo.style.backgroundColor === 'blue') {
                campo.style.backgroundColor = 'blue';
            } else if (campo.style.backgroundColor === 'purple') {
                campo.style.backgroundColor = 'purple';
            } else {
                campo.style.backgroundColor = 'purple';
                vez = true;
                vencer('purple');
            }
        }
    });
}
teste(CAMPO_1);
teste(CAMPO_2);
teste(CAMPO_3);
teste(CAMPO_4);
teste(CAMPO_5);
teste(CAMPO_6);
teste(CAMPO_7);
teste(CAMPO_8);
teste(CAMPO_9);

function vencer(cor) {
    let campo1 = CAMPO_1.style.backgroundColor;
    let campo2 = CAMPO_2.style.backgroundColor;
    let campo3 = CAMPO_3.style.backgroundColor;
    let campo4 = CAMPO_4.style.backgroundColor;
    let campo5 = CAMPO_5.style.backgroundColor;
    let campo6 = CAMPO_6.style.backgroundColor;
    let campo7 = CAMPO_7.style.backgroundColor;
    let campo8 = CAMPO_8.style.backgroundColor;
    let campo9 = CAMPO_9.style.backgroundColor;
    
    if (campo1 === cor && campo2 === cor && campo3 === cor || campo4 === cor && campo5 === cor && campo6 === cor || campo7 === cor && campo8 === cor && campo9 === cor) {
       cor === 'blue' ? document.body.innerHTML = '<h1> PLAYER 1 - VENCEU </h1>' : document.body.innerHTML = '<h1> PLAYER 2 - VENCEU </h1>';
       document.body.innerHTML += '<p> Horizontalmente </p>';
    } else if (campo1 === cor && campo5 === cor && campo9 === cor || campo3 === cor && campo5 === cor && campo7 === cor ) {
        cor === 'blue' ? document.body.innerHTML = '<h1> PLAYER 1 - VENCEU </h1>' : document.body.innerHTML = '<h1> PLAYER 2 - VENCEU </h1>';
        document.body.innerHTML += '<p> Diagonalmente </p>';
    } else if (campo1 === cor && campo4 === cor && campo7 === cor || campo2 === cor && campo5 === cor && campo8 === cor || campo3 === cor && campo6 === cor && campo9 === cor) {
        cor === 'blue' ? document.body.innerHTML = '<h1> PLAYER 1 - VENCEU </h1>' : document.body.innerHTML = '<h1> PLAYER 2 - VENCEU </h1>';
        document.body.innerHTML += '<p> Verticalmente </p>';
    }
}
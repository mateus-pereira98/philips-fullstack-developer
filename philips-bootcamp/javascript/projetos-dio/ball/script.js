const bola = document.querySelector('.bola');
const fundo = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            //descendo
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    bola.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            //subindo
            position += 20;
            bola.style.bottom = position + 'px';
        }
    }, 20);
}

function createWall() {
    const obj = document.createElement('div');
    let objPosition = 1000;
    let randomTime = Math.random() * 6000;

    if (isGameOver) return;

    obj.classList.add('obj');
    fundo.appendChild(obj);
    obj.style.left = objPosition + 'px';

    let leftTimer = setInterval(() => {
        if (objPosition < -60) {
            //saiu da tela
            clearInterval(leftTimer);
            fundo.removeChild(obj);
        } else if (objPosition > 0 && objPosition < 60 && position < 60) {
            //gameover
            clearInterval(leftTimer);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        } else {
            objPosition -= 10;
            obj.style.left = objPosition + 'px';
        }
    }, 20);

    setTimeout(createWall, randomTime);
}
createWall();
document.addEventListener('keyup', handleKeyUp);
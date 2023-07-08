const canvas = document.getElementById("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext("2d");
const image = new Image();
const IMG_X = 35;
const IMG_Y = 35;
const ALLOWED_KEYS = ['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
let X = innerWidth / 2;
let Y = innerHeight / 2;
let move = false;
let moveSpeed = 10;

image.src = '../assets/down.png';
image.onload = () => {
    ctx.drawImage(image, X, Y, IMG_X, IMG_Y); // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
}

window.addEventListener('keydown', (e) => {
    if (!ALLOWED_KEYS.includes(e.key)) {
        return;
    };

    // console.log(X, Y)
    switch (e.key) {
        case 'w':
        case 'ArrowUp':
            image.src = '../assets/up.png';
            if (Y < 10) { //at top of screen
                move = false;
            } else {
                Y -= moveSpeed;
                move = true;
            }
            break;
        case 'a':
        case 'ArrowLeft':
            image.src = '../assets/left.png';
            if (X < 10) { // at right of screen
                move = false;
            } else {
                X -= moveSpeed;
                move = true;
            }
            break;
        case 's':
        case 'ArrowDown':
            image.src = '../assets/down.png';
            if (Y >= innerHeight - IMG_Y) {
                move = false;
            } else {
                Y += moveSpeed;
                move = true;
            }
            break;
        case 'd':
        case 'ArrowRight':
            image.src = '../assets/right.png';
            if (X > innerWidth - IMG_X) {
                move = false;
            } else {
                X += moveSpeed;
                move = true;
            }
            break;
    };
});


function game() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.drawImage(image, X, Y, IMG_X, IMG_Y);

    requestAnimationFrame(game);
};


game();
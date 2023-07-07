const canvas = document.getElementById("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext("2d");
const image = new Image();
let X = innerWidth / 2;
let Y = innerHeight / 2;
const IMG_X = 35;
const IMG_Y = 35;
let moveSpeed = 10;
const ALLOWED_KEYS = ['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

image.src = '../assets/down.png';
image.onload = () => {
    ctx.drawImage(image, X, Y, IMG_X, IMG_Y); // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
};

window.addEventListener('keydown', (e) => {
    console.log(X, Y)
    if (!ALLOWED_KEYS.includes(e.key)) {
        return;
    };

    ctx.clearRect(0, 0, innerWidth, innerHeight)

    switch (e.key) {
        case 'w':
        case 'ArrowUp':
            if (Y < 10) { //at top of screen
                image.src = '../assets/up.png';
                ctx.drawImage(image, X, Y, IMG_X, IMG_Y);
            } else {
                Y -= moveSpeed;
                image.src = '../assets/up.png';
                ctx.drawImage(image, X, Y, IMG_X, IMG_Y);
            }
            return;
        case 'a':
        case 'ArrowLeft':
            if (X < 10) { // at right of screen
                image.src = '../assets/left.png';
                ctx.drawImage(image, X, Y, IMG_X, IMG_Y);
            } else {
                X -= moveSpeed;
                image.src = '../assets/left.png';
                ctx.drawImage(image, X, Y, IMG_X, IMG_Y);
            }
            return;
        case 's':
        case 'ArrowDown':
            if (Y >= innerHeight - IMG_Y) {
                console.log("hre 731")
                image.src = '../assets/down.png';
                ctx.drawImage(image, X, Y, IMG_X, IMG_Y);
            } else {
                Y += moveSpeed;
                image.src = '../assets/down.png';
                ctx.drawImage(image, X, Y, IMG_X, IMG_Y);
            }
            return;
        case 'd':
        case 'ArrowRight':
            if (X > innerWidth - IMG_X) {
                image.src = '../assets/right.png';
                ctx.drawImage(image, X, Y, IMG_X, IMG_Y);
            } else {
                X += moveSpeed;
                image.src = '../assets/right.png';
                ctx.drawImage(image, X, Y, IMG_X, IMG_Y);
            }
            return;
    };
});
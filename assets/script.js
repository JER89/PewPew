let context = document.getElementById('canvas');
let ctx = context.getContext('2d');
let image = new Image();
image.src = "/assets/images/tank.svg"
let image2 = new Image();
image2.src = "/assets/images/Aliennn.svg"
let missil = [];
let munMax = 15;
let vitMun = 500;
let shoot = true;
let X = Math.random() * (300 - 20) + 20;
let Y = Math.random() * (200 - 0) + 0;

window.onload = () => {
    ctx.drawImage(image, 275, 350, 50, 50);
    ctx.drawImage(image2, X, Y, 50, 50);
    ctx.stroke();
};


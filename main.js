let canvas = document.querySelector('#myCanvas');
let c = canvas.getContext('2d');
let btn = document.querySelector('#button');

canvas.width = window.innerWidth;
canvas.height = 500;
canvas.style.overflow = "hidden";

let x = Math.random() * canvas.width;
let y = Math.random() * canvas.height;
let dx = 15;
let dy = Math.random();
let xwidth = 10;
let yheight = 10;

function animatedSquare() {
    requestAnimationFrame(animatedSquare);
    c.clearRect(0,0,canvas.width, canvas.height);
    c.fillRect(x,y,xwidth,yheight);
    if(x > canvas.width || x - xwidth < 0) {
        dx = -dx;
    }
    if(y > canvas.height ||y - yheight < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

animatedSquare();

function doColor(){
    let userInput = document.querySelector('#input').value;

    if(userInput = 'red'){
        btn.addEventListener('click', () => {
            canvas.style.backgroundColor = 'red';
        });
    }
    else{
        return;
    }
    if(userInput = 'blue'){
        btn.addEventListener('click', () => {
            canvas.style.backgroundColor = 'blue';
        });
    }
    else{
        return;
    }
    if(userInput = 'green'){
        btn.addEventListener('click', () => {
            canvas.style.backgroundColor = 'green';
        });
    }
    else{
        return;
    }
    if(userInput = 'pink'){
        btn.addEventListener('click', () => {
            canvas.style.backgroundColor = 'pink';
        });
    }
    if(userInput = ''){
        return;
    }
}




const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineCap = 'round';
ctx.lineJoin = 'round'
ctx.lineWidth = 50;
ctx.strokeStyle = 'royalBlue'


function draw(e) {
    if ( !isDrawing ) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.stroke();    
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;
    if ( ctx.lineWidth >= 100 || ctx.lineWidth <= 1 ) {
        direction = !direction;
    }
    if (direction)  {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', (e) => {
    [lastX, lastY] = [e.offsetX, e.offsetY]
    draw(e);
});


canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mouseup', () => isDrawing = false);
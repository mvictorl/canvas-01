const canvas = document.getElementById('tutorial');

let readyToDraw = false;
let X = undefined;
let Y = undefined;

function draw(ctx, x, y) {
  if (X && Y) {
    ctx.beginPath();
    ctx.moveTo(X, Y);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
  }
  X = x;
  Y = y;
}

function getCanvasContext2D(cnvs) {
  if (cnvs.getContext) {
    return cnvs.getContext('2d');
  }
  return false;
}

canvas.addEventListener('click', function(e) {
  if(!readyToDraw) return false;
  const ctx = getCanvasContext2D(canvas);
  draw(ctx, e.offsetX, e.offsetY);
});

canvas.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  if (!readyToDraw) {
    canvas.classList.add("readyForDraw");
    readyToDraw = true;
  } else {
    canvas.classList.remove("readyForDraw");
    readyToDraw = false;
  }
});

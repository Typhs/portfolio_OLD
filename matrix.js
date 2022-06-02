const canvasMatrix = document.getElementById('matrix-canvas');

//NOT MY CODE
//-> https://dev.to/gnsp/making-the-matrix-effect-in-javascript-din

const ctx = canvasMatrix.getContext('2d');
const wMatrix = canvasMatrix.width = $(canvasMatrix).width();
const hMatrix = canvasMatrix.height = $(canvasMatrix).height();
const cols = Math.floor(wMatrix / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, wMatrix, hMatrix);

function matrix () {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, wMatrix, hMatrix);
  
  ctx.fillStyle = '#0f0';
  ctx.font = '1rem monospace';
  
  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);
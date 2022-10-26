const canvas = document.querySelector("canvas");
const color = document.getElementById("color");
const fill = document.getElementById("fill");
const stroke = document.getElementById("stroke");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

ctx.lineWidth = 5;
let isPainting = false;
let mode = 0;

function onMove(event) {
  if (isPainting) {
    if (mode === 0 || mode === 1) {
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
      return;
    }
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  if (mode !== 1) {
    isPainting = false;
    ctx.fill();
    ctx.beginPath();
  } else {
    isPainting = false;
    ctx.beginPath();
  }
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onFillClick() {
  mode = 0;
}

function onStrokeClick() {
  mode = 1;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

color.addEventListener("change", onColorChange);
fill.addEventListener("click", onFillClick);
stroke.addEventListener("click", onStrokeClick);

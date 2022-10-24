const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

ctx.moveTo(190, 250);
ctx.lineTo(220, 250);
ctx.lineTo(220, 390);
ctx.lineTo(190, 390);
ctx.lineTo(190, 250);

ctx.rect(240, 250, 100, 280);

ctx.moveTo(360, 250);
ctx.lineTo(390, 250);
ctx.lineTo(390, 390);
ctx.lineTo(360, 390);
ctx.lineTo(360, 250);

ctx.arc(290, 130, 100, 0, 2 * Math.PI);

ctx.fill();

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(250, 100, 20, Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "limegreen";
ctx.arc(330, 100, 20, Math.PI, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "tomato";
ctx.arc(290, 130, 55, 0, 1 * Math.PI);
ctx.lineWidth = 6;
ctx.fill();

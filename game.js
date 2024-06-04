let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

var window_Height = window.innerHeight;
var window_Width = window.innerWidth;

canvas.width = window_Width;
canvas.height = window_Height;

canvas.style.background = "#ff8";

context.fillRect(100, 0 , 100, 200);

context.fillStyle = "blue";

context.fillRect(100, 500 , 100, 200);

context.beginPath();
context.strokeStyle = "red";
context.lineWidth = 20;
context.arc(100, 100, 50, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

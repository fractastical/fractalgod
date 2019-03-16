var c = document.getElementById("myCanvas");

//circle
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(300, 300, 150, 0, 2 * Math.PI);
ctx.stroke();

// we want to draw nine points
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(500, 500);
ctx.stroke();

//triagle
let cx = document.querySelector("canvas").getContext("2d");
cx.beginPath();
cx.moveTo(50, 10);
cx.lineTo(10, 70);
cx.lineTo(90, 70);
cx.fill();
cx.stroke();


cx.font = "28px Georgia";
cx.fillStyle = "fuchsia";
cx.fillText("Building all of geometry in HTML5", 10, 50);

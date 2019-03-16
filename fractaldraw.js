var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(300, 300, 150, 0, 2 * Math.PI);
ctx.stroke();

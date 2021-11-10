const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

canvas.width = 1200;
canvas.height = 900;

const a = (2 * Math.PI) / 6;
const r = 50;

function init() {
	drawGrid(canvas.width, canvas.height);
}
init();

let x = r;
let y = r;

function drawGrid(width, height) {
	for (let y = r; y + r * Math.sin(a) < height; y += r * Math.sin(a)) {
		for (
			let x = r, j = 0;
			x + r * (1 + Math.cos(a)) < width;
			x += r * (1 + Math.cos(a)), y += (-1.03) ** j++ * r * Math.sin(a)
		) {
			drawHexagon(x, y);
		}
	}
}

function drawHexagon(x, y) {
	ctx.strokeStyle = "lightgrey";
	//ctx.strokeStyle = "rbg(0,0,0,0.2)";
	ctx.fillStyle = "rgb(90, 90, 90)";
	// ctx.shadowOffsetX = 0;
	// ctx.shadowOffsety = 0;
	ctx.shadowColor = "black";
	ctx.shadowBlur = 2;
	ctx.globalCompositeOperation = "lighter";
	//ctx.globalAlpha = -1;
	ctx.beginPath();
	for (let i = 0; i < 6; i++) {
		ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
	}
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}

// Lage en ny Canvas id for å lage ny animasjon under?
// Lage en Class/Animate for å lage animasjonen?
// Z-index for å få ene Canvas'n under den andre?

// Punktene "sto" fast på punkt zero.

// function something(x, y) {
// 	ctx.beginPath();
// 	for (let j = 0; j < 2; j++) {
// 		let yVar = j % 2 == 0;
// 		if (yVar == true) {
// 			y = y + r * Math.sin(a);
// 		} else if (yVar == false) {
// 			y = y - r * Math.sin(a);
// 		}
// 		x = x + r + r * Math.cos(a);
// 		for (let i = 0; i < 6; i++) {
// 			ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
// 		}

// 		ctx.closePath();
// 		//ctx.fill();
// 		ctx.stroke();
// 	}
// }
// something(x, y);

// x = x + r + r * Math.cos(a);
// y = yVar;
// for (var i = 0; i < 6; i++) {
//     ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
// 1st
// x = r;
// y = r;
// drawHexagon(x, y);

// 2nd
// x = x + r + r * Math.cos(a);
// y = y + r * Math.sin(a);
// drawHexagon(x, y);

// 3rd
// x = x + r + r * Math.cos(a);
// y = y - r * Math.sin(a);
// drawHexagon(x, y);

// 4th
// x = x + r + r * Math.cos(a);
// y = y + r * Math.sin(a);
// drawHexagon(x, y);

// x = x + r + r * Math.cos(a);
// y = y - r * Math.sin(a);
// drawHexagon(x, y);

const canvas1 = document.getElementById("canvas1");
const context = canvas1.getContext("2d");
let hue = 0;

canvas1.width = innerWidth;
canvas1.height = innerHeight;

window.addEventListener("resize", function(){
	canvas1.width = window.innerWidth;
	canvas1.height = window.innerHeight;
});

canvas.width = 1200;
canvas.height = 900;

const mouse = {
	x: undefined,
	y: undefined,
};

// angle = random(0, 2π)
// direction = vector(cos(angle), sin(angle))

// xPosition += (speed * direction.x)
// yPosition += (speed * direction.y)





let glowArray = [];
class Glow{
	constructor(){
		this.x = 10;
		this.y = 200;
		this.speedY = 2;
		this.speedX = 2;
		// this.angle = random(0, 2 * Math.PI)
		this.directionX;
		this.directionY;
		
	}
	draw(){
		//context.clearRect(0, 0, canvas1.width, canvas1.height);
		context.fillStyle = 'orangered';
		context.beginPath();
		context.arc(this.x, this.y, 100, 0, Math.PI * 2);
		context.fill();
		this.x += 2;
	}
}

function handleGlow() {
	for(let i = 0; i < 1; i++)
	glowArray[i].draw();
	
}

function createGlow(){
	
	glowArray.push(new Glow());
}
// window.addEventListener("mousemove", function (event) {
// 	mouse.x = event.x;
// 	mouse.y = event.y;
// 	handleGlow();
// });

function animate() {
	context.clearRect(0, 0, canvas1.height, canvas1.width);
	createGlow();
	handleGlow();
	//hue++;
	requestAnimationFrame(animate);
}
animate();

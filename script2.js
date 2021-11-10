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
		this.x = canvas.width/2;
		this.y = canvas.height/2;
		// this.speedY = 2;
		// this.speedX = 2;
		this.radius = 100;
		this.bounce = 1;
		this.friction = 0.98;
		this.gravity = 0;
		// this.directionX = Math.random() * canvas.height;
		// this.directionY = Math.random() * canvas.width;
		this.velX = (Math.random() * 1 + 5) * (Math.floor(Math.random() * 2) || -1);
		this.velY = (Math.random() * 2 + 5) * (Math.floor(Math.random() * 1) || -1);
	}
	draw(){
		//context.clearRect(0, 0, canvas1.width, canvas1.height);
		context.fillStyle = 'hsl(' + hue + ', 100%, 50%';
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		context.fill();
		this.x += 1;
		this.y += 1;
	
		
	}
	update(){
		
		 //this.velY += this.gravity;
		  this.x += this.velX;
		  this.y += this.velY;
		// // this.x = this.directionY
	// this.x -+ this.directionX;
	// this.y -+ this.directionY;
	if (this.y + this.radius >= canvas.height){ // Bottom
		this.velY *= -this.bounce;
		this.y = canvas.height - this.radius;
		this.velX *= this.friction;
	}
	if (this.y - this.radius <= 0){ // Top
		this.velY *= -this.bounce;
		this.y = this.radius;
		this.x *= this.friction;
	}
	if(this.x - this.radius <= 0){ // Left
		this.velX *= -this.bounce;
		this.x = this.radius;
	}
	
	if(this.x + this.radius >= canvas.width){ // Right
		this.velX *= -this.bounce
		this.x = canvas.width - this.radius
	}
	if (this.velX < 0.01 && this.velX > -0.01){
		this.velX = 0;
	}
	if (this.velY < 0.01 && this.velY > -0.01){
		this.velY = 0;
	}

	}
}

function handleGlow() {
	for(let i = 0; i < 1; i++){
		glowArray[i].draw();
		glowArray[i].update();
	}	
}

function createGlow(){
	glowArray.push(new Glow());
	
	
}

// window.addEventListener("mousemove", function (event) {
// 	mouse.x = event.x;
// 	mouse.y = event.y;
// 	// handleGlow();
// 	glowArray.push(new Glow());
// });

function animate() {
	context.clearRect(0, 0, canvas1.height, canvas1.width);
	 createGlow();
	 handleGlow();
	hue++;
	requestAnimationFrame(animate);
}
animate();


// når "ballen" treffer ett bestemt sted (Position x, y) på siteden så skifter den retning
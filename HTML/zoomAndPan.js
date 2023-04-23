const canvas = document.querySelector("#layer-1");
const ctx = canvas.getContext('2d');
let scale = 1;
let offsetX = 0;
let offsetY = 0;
let minScale;
const gridSize = 50;

canvas.width = window.innerWidth * devicePixelRatio;
	canvas.height = window.innerHeight * devicePixelRatio;
ctx.scale(devicePixelRatio, devicePixelRatio)

function resizeCanvas() {
	canvas.width = window.innerWidth * devicePixelRatio;
	canvas.height = window.innerHeight * devicePixelRatio;

	ctx.scale(devicePixelRatio, devicePixelRatio)
	

	const minWidthScale = window.innerWidth / 5000; // Calculate minScale based on the window width
    const minHeightScale = window.innerHeight / 5000;
    minScale = Math.max(minWidthScale, minHeightScale);
}


// function resizeCanvas() {
// 	canvas.width = window.innerWidth
// 	canvas.height = window.innerHeight
	
// 	minScale = window.innerWidth / 5000; // Calculate minScale based on the window width
// }

function drawGrid() {
	ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
	ctx.lineWidth = 1;

	for (let x = 0; x <= 5000; x += gridSize) {
		ctx.beginPath();
		ctx.moveTo(x, 0);
		ctx.lineTo(x, 5000);
		ctx.stroke();
	}

	for (let y = 0; y <= 5000; y += gridSize) {
		ctx.beginPath();
		ctx.moveTo(0, y);
		ctx.lineTo(5000, y);
		ctx.stroke();
	}
}

function draw() {
	ctx.save();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.translate(offsetX, offsetY);
	ctx.scale(scale, scale);

	drawGrid();

	ctx.beginPath();
	ctx.strokeStyle = "white";
	ctx.lineWidth = 10;
	ctx.ellipse(100, 100, 25, 25, Math.PI / 4, 0, 2 * Math.PI);
	ctx.rect(0, 0, 5000, 5000);
	ctx.stroke();
	ctx.closePath();

	ctx.restore();

}

function clamp(value, min, max) {
	return Math.min(Math.max(value, min), max);
}

resizeCanvas();
draw();

window.addEventListener('resize', (e) => {
	console.log(e)
	resizeCanvas();
	draw();
	console.log('resizing')
});

window.addEventListener("wheel", function (e) {
	e.preventDefault();

	const rect = canvas.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;

	if (e.ctrlKey) {
		// For handling Zooming:
		const scaleFactor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
		const prevScale = scale;
		scale *= scaleFactor;
		scale = clamp(scale, minScale, Infinity); // Clamp the scale value

		offsetX -= (x - offsetX) * (scale / prevScale - 1);
		offsetY -= (y - offsetY) * (scale / prevScale - 1);
	} else {
		// For handling Panning:
		offsetX -= e.deltaX;
		offsetY -= e.deltaY;
	}

	// Clamp the offsetX and offsetY values based on the current scale
	const maxX = (5000 * scale - (canvas.width / devicePixelRatio)) * -1;
	const maxY = (5000 * scale - (canvas.height / devicePixelRatio)) * -1;
	offsetX = clamp(offsetX, maxX, 0);
	offsetY = clamp(offsetY, maxY, 0);


	// resizeCanvas();
	draw();
}, { passive: false });

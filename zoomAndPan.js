import Global from "./global.js"

const {canvas1} = Global
const {ctx1} = Global
let scale = 1;
let offsetX = 0;
let offsetY = 0;
let minScale;
const gridSize = 50;

function resizeCanvas1() {
	canvas1.width = window.innerWidth * devicePixelRatio;
	canvas1.height = window.innerHeight * devicePixelRatio;

	ctx1.scale(devicePixelRatio, devicePixelRatio)
	

	const minWidthScale = window.innerWidth / 5000; // Calculate minScale based on the window width
    const minHeightScale = window.innerHeight / 5000;
    minScale = Math.max(minWidthScale, minHeightScale);
}

function clamp(value, min, max) {
	return Math.min(Math.max(value, min), max);
}




function drawGrid() {
	ctx1.strokeStyle = 'rgba(255, 255, 255, 0.2)';
	ctx1.lineWidth = 1;

	for (let x = 0; x <= 5000; x += gridSize) {
		ctx1.beginPath();
		ctx1.moveTo(x, 0);
		ctx1.lineTo(x, 5000);
		ctx1.stroke();
	}

	for (let y = 0; y <= 5000; y += gridSize) {
		ctx1.beginPath();
		ctx1.moveTo(0, y);
		ctx1.lineTo(5000, y);
		ctx1.stroke();
	}
}

function draw() {
	ctx1.save();
	ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
	ctx1.translate(offsetX, offsetY);
	ctx1.scale(scale, scale);

	drawGrid();

	ctx1.beginPath();
	ctx1.strokeStyle = "white";
	ctx1.lineWidth = 10;
	ctx1.ellipse(100, 100, 25, 25, Math.PI / 4, 0, 2 * Math.PI);
	ctx1.rect(0, 0, 5000, 5000);
	ctx1.stroke();
	ctx1.closePath();

	ctx1.restore();

}


resizeCanvas1();
draw();

window.addEventListener('resize', (e) => {
	console.log(e)
	resizeCanvas1();
	draw();
	console.log('resizing')
});

window.addEventListener("wheel", function (e) {
	e.preventDefault();

	const rect = canvas1.getBoundingClientRect();
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
	const maxX = (5000 * scale - (canvas1.width / devicePixelRatio)) * -1;
	const maxY = (5000 * scale - (canvas1.height / devicePixelRatio)) * -1;
	offsetX = clamp(offsetX, maxX, 0);
	offsetY = clamp(offsetY, maxY, 0);


	// resizeCanvas1();
	draw();
}, { passive: false });

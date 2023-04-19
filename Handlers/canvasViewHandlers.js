import Global from "../global/global.js";

const {canvas1} = Global;
const {canvas2} = Global;
const {canvas3} = Global;
const {ctx1} 	= Global;
const {ctx2} 	= Global;
const {ctx3} 	= Global;

export function drawGrid() {
	ctx1.strokeStyle = 'rgba(255, 255, 255, 0.2)';
	ctx1.lineWidth = 1;

	for (let x = 0; x <= 5000; x += Global.canvasGridSize) {
		ctx1.beginPath();
		ctx1.moveTo(x, 0);
		ctx1.lineTo(x, 5000);
		ctx1.stroke();
	}

	for (let y = 0; y <= 5000; y += Global.canvasGridSize) {
		ctx1.beginPath();
		ctx1.moveTo(0, y);
		ctx1.lineTo(5000, y);
		ctx1.stroke();
	}
}

export function draw() {
	ctx1.save();
	ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
	ctx1.translate(Global.zoomOffsetX, Global.zoomOffsetY);
	ctx1.scale(Global.canvasScale, Global.canvasScale);

	Global.transform = ctx1.getTransform()
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
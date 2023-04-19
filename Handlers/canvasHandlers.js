import Global from "../global/global.js";
import { draw } from "./canvasViewHandlers.js";
import { resizeCanvas1 } from "./canvasHandlerFunctions.js";

const {canvas1} = Global;
const {ctx1} 	= Global;




export function canvasPointerDownHandler(e) {
	const rect = canvas1.getBoundingClientRect();
	const mouseX = e.clientX - rect.left;
	const mouseY = e.clientY - rect.top;
  
	const originalPoint = new DOMPoint(mouseX / devicePixelRatio, mouseY / devicePixelRatio);
	const currentTransform = Global.transform.invertSelf();
	const transformedPoint = currentTransform.transformPoint(originalPoint);
  
	const canvasX = transformedPoint.x;
	const canvasY = transformedPoint.y;
  
	ctx1.beginPath();
	ctx1.strokeStyle = "black";
	ctx1.lineWidth = 10;
	ctx1.ellipse(canvasX, canvasY, 25, 25, Math.PI / 4, 0, 2 * Math.PI);
	ctx1.stroke();
	ctx1.closePath();
  
	console.log(`Canvas X: ${canvasX}, Canvas Y: ${canvasY}`);
  }
  
//   canvas1.addEventListener('pointerdown', canvasPointerDownHandler(e));
  

resizeCanvas1();
draw();

  
  

  



export function canvasZoomPanHandler(e) {

	e.preventDefault();

	const rect = canvas1.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;

	if (e.ctrlKey) {
		// For handling Zooming:
		const scaleFactor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
		const prevScale = Global.canvasScale;
		Global.canvasScale *= scaleFactor;
		Global.canvasScale = Math.max(Global.canvasScale, Global.minCanvasScale); // Clamp the canvasScale value

		Global.zoomOffsetX -= (x - Global.zoomOffsetX) * (Global.canvasScale / prevScale - 1);
		Global.zoomOffsetY -= (y - Global.zoomOffsetY) * (Global.canvasScale / prevScale - 1);
	} else {
		// For handling Panning:
		Global.zoomOffsetX -= e.deltaX;
		Global.zoomOffsetY -= e.deltaY;
	}

	// Clamp the zoomOffsetX and zoomOffsetY values based on the current canvasScale
	const maxX = (5000 * Global.canvasScale - (canvas1.width / devicePixelRatio)) * -1;
	const maxY = (5000 * Global.canvasScale - (canvas1.height / devicePixelRatio)) * -1;
	Global.zoomOffsetX = Math.min(Math.max(Global.zoomOffsetX, maxX), 0);
	Global.zoomOffsetY = Math.min(Math.max(Global.zoomOffsetY, maxY), 0);


	// resizeCanvas1();
	draw();
}
import { canvasState } from "../global/canvasSession.js";
import Global from "../global/global.js";

const {canvas1} = Global;
const {canvas2} = Global;
const {canvas3} = Global;
const {ctx1} 	= Global;
const {ctx2} 	= Global;
const {ctx3} 	= Global;



export function resizeCanvas() {

	canvas1.width = window.innerWidth;
	canvas1.height = window.innerHeight;

	canvas1.style.height = window.innerHeight + "px";
	canvas1.style.width = window.innerWidth + "px";

}

// resizeCanvas();

export function resizeCanvasWithHighDPI() {

	ctx1.resetTransform();

	canvas1.width = window.innerWidth * devicePixelRatio;
	canvas1.height = window.innerHeight * devicePixelRatio;

	ctx1.scale(devicePixelRatio, devicePixelRatio);

	canvas1.style.width = window.innerWidth + "px";
	canvas1.style.height = window.innerHeight + "px";

}	

	resizeCanvasWithHighDPI();




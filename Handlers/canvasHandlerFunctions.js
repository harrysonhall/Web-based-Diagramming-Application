import Global from "../global/global.js";

const {canvas1} = Global;
const {canvas2} = Global;
const {canvas3} = Global;
const {ctx1} 	= Global;
const {ctx2} 	= Global;
const {ctx3} 	= Global;


export function resizeCanvas1() {
	canvas1.width = window.innerWidth * devicePixelRatio;
	canvas1.height = window.innerHeight * devicePixelRatio;

	ctx1.scale(devicePixelRatio, devicePixelRatio)
	
	Global.minCanvasScale = Math.max(window.innerWidth / 5000, window.innerHeight / 5000);
	// Global.minCanvasScale = Math.max(window.innerWidth, window.innerHeight);
}
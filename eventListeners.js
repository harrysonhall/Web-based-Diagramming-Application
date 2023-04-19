import { contextMenuHandler } from "./Handlers/UIPanelHandlers.js";
import { pointerDownController } from "./eventListenerControllers.js";
import { clickController } from "./eventListenerControllers.js";
import { wheelController } from "./eventListenerControllers.js";
import { resizeCanvas1 } from "./Handlers/canvasHandlerFunctions.js";
import { draw } from "./Handlers/canvasViewHandlers.js";


window.addEventListener('contextmenu', (e) => {

	contextMenuHandler(e);
	
});

window.addEventListener('pointerdown', (e) => {

	pointerDownController(e);

})

window.addEventListener('click', (e) => {

	// clickController(e);

})

window.addEventListener('wheel', (e) => {

	wheelController(e);

}, {passive: false})

window.addEventListener('resize', (e) => {
	console.log(e)
	resizeCanvas1();
	draw();
	console.log('resizing')
});


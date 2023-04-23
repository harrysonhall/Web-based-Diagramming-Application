import { contextMenuHandler } from "./Handlers/UIPanelHandlers.js";
import { pointerDownController } from "./eventListenerControllers.js";
import { clickController } from "./eventListenerControllers.js";
import { wheelController } from "./eventListenerControllers.js";
import { pointerMoveController } from "./eventListenerControllers.js";



window.addEventListener('contextmenu', (e) => {

	contextMenuHandler(e);
	
});

window.addEventListener('pointerdown', (e) => {

	pointerDownController(e);

})

window.addEventListener('pointermove', (e) => {

	pointerMoveController(e);
	
})

window.addEventListener('click', (e) => {

	clickController(e);

})

window.addEventListener('wheel', (e) => {

	wheelController(e);

}, {passive: false})



// UI
import { dragControlsHandler } from "./Handlers/UIPanelHandlers.js";
import { zIndexHandler } from "./Handlers/UIPanelHandlers.js";
import { activeToolHandler } from "./Handlers/UIPanelHandlers.js";

// Canvas
import { canvasWheelHandler } from "./Handlers/canvasHandlers/canvasWheelHandler.js";



export function pointerDownController(e) {

	switch(e.target.dataset.type) {

		case "UI-panel":			zIndexHandler(e);				break;

		case "UI-panel-controls":	zIndexHandler(e);				break;

		case "UI-drag-control": 	dragControlsHandler(e);			break;

		// case "canvas":				canvasPointerDownHandler(e);	break;
		
		default:	break;
	}
}


export function pointerMoveController(e) {

	switch(e.target.dataset.type) {

	
	}

}


export function clickController(e) {

	switch(e.target.dataset.type) {

		case "tool":			activeToolHandler(e);			break;
	}
}




export const wheelController = (e) => {

	switch(e.target.dataset.type) {

		case "canvas":			canvasWheelHandler(e);		break;
	}
}

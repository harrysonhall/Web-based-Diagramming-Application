import { dragControlsHandler } from "./Handlers/UIPanelHandlers.js";
import { zIndexHandler } from "./Handlers/UIPanelHandlers.js";
import { activeToolHandler } from "./Handlers/UIPanelHandlers.js";
import { canvasPointerDownHandler } from "./Handlers/canvasHandlers.js";
import { canvasZoomPanHandler } from "./Handlers/canvasHandlers.js";


export function pointerDownController(e) {

	switch(e.target.dataset.type) {

		case "UI-drag-control": 	dragControlsHandler(e);			break;

		case "UI-panel":			zIndexHandler(e);				break;

		case "UI-panel-controls":	zIndexHandler(e);				break;

		case "canvas":				canvasPointerDownHandler(e);	break;
		
		default:	break;
	}
}




export function clickController(e) {

	switch(e.target.dataset.type) {

		case "tool":			activeToolHandler(e);			break;
	}
}




export function wheelController(e) {

	switch(e.target.dataset.type) {

		case "canvas":			canvasZoomPanHandler(e);		break;
	}
}

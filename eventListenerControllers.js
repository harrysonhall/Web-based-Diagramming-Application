import { dragControlsHandler } from "./eventListenerHandlers.js";
import { zIndexHandler } from "./eventListenerHandlers.js";
import { activeToolHandler } from "./eventListenerHandlers.js";
import { canvasPointerDownHandler } from "./canvasHandlers.js";


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

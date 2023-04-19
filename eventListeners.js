import { contextMenuHandler } from "./eventListenerHandlers.js";
import { pointerDownController } from "./eventListenerControllers.js";
import { clickController } from "./eventListenerControllers.js";


window.addEventListener('contextmenu', (e) => {

	contextMenuHandler(e);
	
});

window.addEventListener('pointerdown', (e) => {

	pointerDownController(e);

})

window.addEventListener('click', (e) => {

	clickController(e);
	// console.log(e);
})



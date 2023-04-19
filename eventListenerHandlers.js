import Global from "./global.js";
import {canvasState} from "./canvasState.js";
import {tools} from "./canvasState.js";

	const {contextMenu} = Global;
	const {UIPanelsArray} = Global;
	let {isContextMenuOpened} = canvasState;





export function contextMenuHandler(e){

	if(e.target.tagName === "CANVAS") {

		e.preventDefault();

		if(!isContextMenuOpened) {

			contextMenu.style['top'] = e.clientY + 'px';
			contextMenu.style['left'] = e.clientX + 'px';
			contextMenu.style['display'] = "block";

			isContextMenuOpened = true;

			window.addEventListener('pointerdown', (e) => {

				contextMenu.style['display'] = "none";
				isContextMenuOpened = false;

			}, { once: true });

		} else if(isContextMenuOpened) {

			contextMenu.style['top'] = e.clientY + 'px';
			contextMenu.style['left'] = e.clientX + 'px';

		}
	}
}




export function dragControlsHandler(e){

	let targetUIPanel = e.target.parentElement;

	if(targetUIPanel.dataset.type === "UI-panel") {

		let moveUIPanel;

		e.target.parentElement.classList.add('moving-UI-panel');

		window.addEventListener('pointermove', moveUIPanel = (moveEvent) => {
			
			let newY = moveEvent.clientY - e.offsetY - parseInt(getComputedStyle(e.target)['top'])
			let newX = moveEvent.clientX - e.offsetX - parseInt(getComputedStyle(e.target)['left'])

			// Check to make sure the new Top and Left properties are greater than 0,
			// so a user can't move a UI Panel offscreen.
			if(newY <= window.innerHeight && newX <= window.innerWidth - 30 ) {

				e.target.parentElement.style['top'] = newY + "px";
				e.target.parentElement.style['left'] = newX + "px";
				console.log('moving UI panel');
			}

		});

		window.addEventListener('pointerup', () => {

			window.removeEventListener('pointermove', moveUIPanel);
			
			e.target.parentElement.classList.remove('moving-UI-panel');

			console.log('dragControls pointerMove event listener removed.');

		}, { once: true });
		
		zIndexHandler(e);
	}
}




export function zIndexHandler(UIPanel){

	let panel;
	// This part is for getting the UI Panel.
	// If its an object it means we are receieving an Event.
	if(typeof UIPanel === "object") {

		let tempElement = UIPanel.target;

		function findPanel(){

			if(tempElement.dataset.type !== "UI-panel") {

				tempElement = tempElement.parentElement;
		
				findPanel();
		
			} else if(tempElement.dataset.type === "UI-panel") {

				panel = tempElement;
			}
		}
		findPanel();
	} else panel = UIPanel;


	// This part is for setting the Z-Index.
	UIPanelsArray.delete(panel);
	UIPanelsArray.add(panel);

	let z = 21;

	for(const p of UIPanelsArray) {
		
		p.style['zIndex'] = z;
		z++;
	}
}



export function activeToolHandler(e){

	for(const tool in tools) {
		// console.log(tool)
		if(e.target.dataset.name == tool) {

			tools[tool].isActive = true;
			tools[tool].HTMLiconNode.style['fill'] = 'var(--UI-active-tool-color)';
			canvasState.currentActiveTool = tools[tool];

		} else {

			tools[tool].isActive = false;
			tools[tool].HTMLiconNode.style['fill'] = 'var(--UI-off-white-color)';
		}
	}
	zIndexHandler(e);
}

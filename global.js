export default class Global {

	// Context Menu
	static contextMenu 				= document.getElementById('context-menu');

	// UI Panels
	static toolPanel				= document.getElementById('tool-panel');
	static objectTreePanel			= document.getElementById('object-tree-panel');
	static objectPropertiesPanel 	= document.getElementById('object-properties-panel');
	static UIPanelsArray 			= new Set([this.toolPanel, this.objectTreePanel, this.objectPropertiesPanel]);

	// Tool Icons
	static selectorIcon				= document.getElementById('selector-icon');
	static squareIcon				= document.getElementById('square-icon');
	static circleIcon				= document.getElementById('circle-icon');
	static triangleIcon				= document.getElementById('triangle-icon');
	static lineIcon					= document.getElementById('line-icon');
	static lineArrowIcon			= document.getElementById('line-arrow-icon');
	static lineDynamicIcon			= document.getElementById('line-dynamic-icon');
	static textIcon					= document.getElementById('text-icon');

	// Canvases
	static canvas1 					= document.querySelector("#canvas-layer-1");
	static cavnas2					= document.querySelector("#canvas-layer-2");
	static cavnas3					= document.querySelector("#canvas-layer-3");

	// Canvas Contexts
	static ctx1 					= this.canvas1.getContext('2d');
	static ctx2						= this.cavnas2.getContext('2d');
	static ctx3						= this.cavnas3.getContext('2d');


}
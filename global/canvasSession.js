import Global from "./global.js"
import { resizeCanvasWithHighDPI } from "../Functions/canvasFunctions.js";

const { ctx1 }			= Global;

const {selectorIcon} 	= Global;
const {squareIcon} 		= Global;
const {circleIcon} 		= Global;
const {triangleIcon}	= Global;
const {lineIcon} 		= Global;
const {lineArrowIcon} 	= Global;
const {lineDynamicIcon} = Global;
const {textIcon} 		= Global;


	resizeCanvasWithHighDPI();

	export default class ctx {
		static canvasContextBoundry = 5000;
		static panningX = 0;
		static panningY = 0;
		static zoomingXY = 1;
		static minimumZoomingXY =  Math.max(window.innerWidth / this.canvasContextBoundry, window.innerHeight / this.canvasContextBoundry);
		static zoomingSensitivity = 0.005;
		static normalTransform = { 
			a: ctx1.getTransform().a, // Default Transform Value
			b: ctx1.getTransform().b, // Default Transform Value
			c: ctx1.getTransform().c, // Default Transform Value
			d: ctx1.getTransform().d, // Default Transform Value
			e: ctx1.getTransform().e, // Default Transform Value
			f: ctx1.getTransform().f, // Default Transform Value
		};
		static inverseTransform = { 
			a: ctx1.getTransform().invertSelf().a, // Default Transform Value
			b: ctx1.getTransform().invertSelf().b, // Default Transform Value
			c: ctx1.getTransform().invertSelf().c, // Default Transform Value
			d: ctx1.getTransform().invertSelf().d, // Default Transform Value
			e: ctx1.getTransform().invertSelf().e, // Default Transform Value
			f: ctx1.getTransform().invertSelf().f, // Default Transform Value
		};
		static ctxCursorCoordinates = {
			x: 0,
			y: 0,
		}
		static defaultScaleValue = 1;
	}


export const canvasState = {

	isContextMenuOpened: false,
	currentActiveTool: null,
	ctxState: ctx,

}


		

		
console.log(canvasState)
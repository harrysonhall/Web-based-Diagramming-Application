import Global from "../../global/global.js";
import  ctx  from "../../global/canvasSession.js";
import { draw } from "../../Functions/canvasFunctions.js";

const log = console.log
const {canvas1} = Global;
const {ctx1} 	= Global;



export function canvasWheelHandler(e) {

	e.preventDefault();

	if(e.ctrlKey) { // For 'Handling Zooming-In' or 'Zooming-Out'

		updateZoomingLogic(e);

	} else { // For Handling Panning

		updatePanningLogic(e);

	}


		clampZoomAndPanToBoundries();


		updateMatrixTransforms();


		// 1.) Clear the CanvasRenderingContext2D
		ctx1.clearRect(0,0,canvas1.width, canvas1.height);


		// 2.) Apply the new zoom value and panning values
		ctx1.translate(ctx.panningX, ctx.panningY);	
		ctx1.scale(ctx.zoomingXY, ctx.zoomingXY);
	

		// 3.) Draw to the canvas context
		draw();

		// 4.) Reset the transform matrix back to its 'default' matrix / 'identity' matrix
		ctx1.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);	// Once we are done, set the transform back to its orignal matrix. 


	console.log('yello')
}




		function updateZoomingLogic(e) {

			//////////////////////////////////
			// Adjust the Zooming Variables //
			//////////////////////////////////

			// Store the previous zoom value
			const previousZoomingXY = ctx.zoomingXY;

			// Create a 'zoomFactor' based off of the e.deltaY value
			const zoomFactor = ctx.defaultScaleValue - (e.deltaY * ctx.zoomingSensitivity);	

				// Set the new zoom value / 'zoomingXY'
				ctx.zoomingXY = ctx.zoomingXY * zoomFactor;



				//////////////////////////////////
				// Adjust the Panning Variables //
				//////////////////////////////////
				
				// This code sets 'panningX' and 'panningY' values so that they will give the
				// appearance of 'zooming-in' or 'zooming-out' where the cursor's coordinates are on the context.
				ctx.panningX = ctx.panningX - ((e.offsetX - (ctx.normalTransform.e / devicePixelRatio)) * ((ctx.zoomingXY / previousZoomingXY) - ctx.defaultScaleValue));
				ctx.panningY = ctx.panningY - ((e.offsetY - (ctx.normalTransform.f / devicePixelRatio)) * ((ctx.zoomingXY / previousZoomingXY) - ctx.defaultScaleValue));

		}







		function updatePanningLogic(e) {

			// This code simply adds the amount of 'panning' that has just occured (e.deltaY), to the overall amount of
			// 'panning' that has occurred so far (ctx.panningX) (ctx.panningY). Technically, its subtracting -, but 
			// logically its adding +. We have to use the subtraction - operator because if we instead were to use the 
			// addition + operator, the canvas will pan in the opposite direction. So if the user were to pan up, then the
			// canvas will pan down. To counter this effect, we have to 'negate' the value of e.deltaY. We have to make the 
			// e.deltaY value the opposite sign. So if its positive, we have to make it negative and if its negative, we 
			// we want to make it positive. WE can doo this by subtracting - instead of adding +, but there are also other 
			// ways to negate the value as well.

			ctx.panningX = ctx.panningX - e.deltaX;
			ctx.panningY = ctx.panningY - e.deltaY;
		}






		function clampZoomAndPanToBoundries(){

			// This part of the code, 'clamps' the zoom and pan values according to the 
			// canvas context boundry we defined so that the user is not able to zoom or pan the 
			// CanvasRenderingContext2D outside of the boundries we defined.
			// This 'clamps' the zoomingXY value.
			ctx.zoomingXY = Math.max(ctx.zoomingXY, ctx.minimumZoomingXY);

			const maxPanningX = Math.max(ctx.panningX, (((5000 * ctx.zoomingXY) - (canvas1.width / devicePixelRatio)) * -1));
			const maxPanningY = Math.max(ctx.panningY, (((5000 * ctx.zoomingXY) - (canvas1.height / devicePixelRatio)) * -1));
			
			// This 'clamps' the 'panningX' and 'panningY' values.
			ctx.panningX = Math.min(maxPanningX, 0);
			ctx.panningY = Math.min(maxPanningY, 0);

		}






		function updateMatrixTransforms(){

			// This part of the code updates the normal and inverse matrix transforms that we are keeping
			// track of, of the CanvasRenderingContext2D.
			ctx.normalTransform.a = ctx.zoomingXY * devicePixelRatio;
			ctx.normalTransform.d = ctx.zoomingXY * devicePixelRatio;
			ctx.normalTransform.e = ctx.panningX * devicePixelRatio;
			ctx.normalTransform.f = ctx.panningY * devicePixelRatio;

			ctx.inverseTransform.a = ctx.defaultScaleValue / ctx.normalTransform.a;
			ctx.inverseTransform.d = ctx.defaultScaleValue / ctx.normalTransform.d;
			ctx.inverseTransform.e = (-(ctx.panningX)) * (ctx.defaultScaleValue / ctx.zoomingXY);
			ctx.inverseTransform.f = (-(ctx.panningY)) * (ctx.defaultScaleValue / ctx.zoomingXY);
		}






		function draw(){

			ctx1.strokeStyle = 'rgba(255, 255, 255, 0.2)';
			ctx1.lineWidth = 1;
	
			for (let x = 0; x <= 5000; x += 50) {
				ctx1.beginPath();
				ctx1.moveTo(x, 0);
				ctx1.lineTo(x, 5000);
				ctx1.stroke();
			}
	
			for (let y = 0; y <= 5000; y += 50) {
				ctx1.beginPath();
				ctx1.moveTo(0, y);
				ctx1.lineTo(5000, y);
				ctx1.stroke();
			}
			ctx1.beginPath();
			ctx1.strokeStyle = "white";
			ctx1.lineWidth = 10;
			ctx1.ellipse(100, 100, 25, 25, Math.PI / 4, 0, 2 * Math.PI);
			ctx1.rect(0, 0, 5000, 5000);
			ctx1.stroke();
			ctx1.closePath();
		}
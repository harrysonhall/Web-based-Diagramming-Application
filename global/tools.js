import Global from "./global.js"

const {selectorIcon} 	= Global;
const {squareIcon} 		= Global;
const {circleIcon} 		= Global;
const {triangleIcon}	= Global;
const {lineIcon} 		= Global;
const {lineArrowIcon} 	= Global;
const {lineDynamicIcon} = Global;
const {textIcon} 		= Global;

export const tools = {

	'selector': 	{  	isActive: false, 		HTMLiconNode: selectorIcon		},  
	'square': 		{  	isActive: false, 		HTMLiconNode: squareIcon		},
	'circle': 		{  	isActive: false, 		HTMLiconNode: circleIcon		},
	'triangle': 	{  	isActive: false, 		HTMLiconNode: triangleIcon		},
	'line': 		{  	isActive: false, 		HTMLiconNode: lineIcon			},
	'arrowLine': 	{  	isActive: false, 		HTMLiconNode: lineArrowIcon		},
	'dynamicLine':	{  	isActive: false, 		HTMLiconNode: lineDynamicIcon	},
	'text': 		{  	isActive: false, 		HTMLiconNode: textIcon			},
	
}
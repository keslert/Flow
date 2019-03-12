import _ from 'lodash';

export const basicStages = [
	{ type: "color", focus: "background", effort: 10, confidence: 10 },
	{ type: "color", focus: "foreground", effort: 10, confidence: 10 }
];



// Search for elements in my group
// Search for elements with my same background color

export function getElementColor(template, group, elementType) {
	const bg = group.background || group.__background || '#bogus';

	// Find an element in my group with the same background
	const element = _.find(group.elements, el => el.lines && el.__background === bg);
	if(element) {
		return element.color;
	}

	// Search for any element with my 
	const elements = _.filter(template._elements, el => el.__background === bg);
	if(elements.length) {
		const possibleColors = _.uniq(elements.map(el => el.color));
		// TODO: Choose the best based on colorStats;
		// contrast(bg, color[0])
		return possibleColors[0];
	}

	// TODO: Choose the best color from the color palette
	// return {color: '#000000'};
	return { color: template.palette.dark };
}



// Which elements are usually the same color?
// Average contrast?
export function computeColorStats(templates) {

}


export function mimicSurface(surfaceA, surfaceB, templateA, templateB) {
	surfaceA.background = mimicBackground(surfaceB, templateA, templateB);
	surfaceA.decor = mimicDecor(surfaceB, templateA, templateB);
	surfaceA.border = mimicBorder(surfaceB, templateA, templateB);
	surfaceA.bleed = surfaceB.bleed;
	surfaceA.h = surfaceB.h;
	surfaceA.w = surfaceB.w;
	surfaceA.alignX = surfaceB.alignX;
	surfaceA.alignY = surfaceB.alignY;
	surfaceA.itemsAlignX = surfaceB.itemsAlignX;
	surfaceA.itemsAlignY = surfaceB.itemsAlignY;
	surfaceA.textAlign = surfaceB.textAlign;
	surfaceA.pl = surfaceB.pl;
	surfaceA.pr = surfaceB.pr;
	surfaceA.pt = surfaceB.pt;
	surfaceA.pb = surfaceB.pb;
	surfaceA.ml = surfaceB.ml;
	surfaceA.mr = surfaceB.mr;
	surfaceA.mt = surfaceB.mt;
	surfaceA.mb = surfaceB.mb;
}

function mimicBackground(surface, templateA, templateB, preference) {
	const bg = surface.background;
	if(!bg) return false

	return {
		...bg,
		...(bg.img ? { img: { src: '/placeholder.png', meta: {h: 1444, w: 1444}}} : {}),
		...(bg.color ? { color: mimicColor(bg.color, templateA, templateB, preference)} : {}),
		backgroundBlendMode: null,
	}
}

function mimicDecor(surface, templateA, templateB) {
	const decor = surface.decor;
	if(!decor) return false

	// TOOD: 
	return {
		...decor,
		background: mimicBackground(decor, templateA, templateB, 'gray'),
	}
}

function mimicBorder(surface, templateA, templateB) {
	const border = surface.border;
	if(!border) return false

	// TOOD: 
	return {
		...border,
		background: mimicBackground(border, templateA, templateB, 'gray'),
	};
}

function mimicColor(color, templateA, templateB, preference='light') {
	if(color === 'transparent') return color;

	return templateA.palette[preference];
}



/*
# How to estimate proper colors
- eventName
- mood
- 



# What are the color strategies we see
- Solid background
- Image background
- Grayscale
- Darkened
- Colorized
- Solid
- Gradient

# How many colors (1-3)
- Neutral
- Neutral + Highlight (1-2)
- Highlight (2-3)

Foreground colors are based on the background colors
- light scheme
- dark scheme
- hues



// Complementary
// Monochrome
// Supplementary
// White
// Grays
*/

/* 
Image Meta Data
- w, h
- color-palette
- smart-crop
*/

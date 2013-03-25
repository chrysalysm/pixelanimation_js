# Pixel Animation (HTML5 / Javascript)
Custom pixel/block animator using HTML5 and Javascript.

## How-to-Use
- Build your art with a sprite editor or a pixel art tool (http://www.aseprite.org/).
- Set the referenceX and referenceY points to the top left most pixel of your art.
- With (0, 0) as a reference for the top left most pixel, find the relative (x, y) coordinates of each pixel of your art.
- Put all the X coordinates in the locXArray and all the Y coordinates in the locYArray.
- View in a browser that supports HTML5 <canvas> tag.

## Demo
- Flash Demo: http://intechnicolor.net
- HTML5 / Javascript Demo: http://intechnicolor.net/html5/
- HTML5 / Javascript Demo (Torch Labs): http://torch-labs.com
- Current Version: 1.0

## File Index
- pixelanimation.js
- pixelanimation.html

## Bugs
- The RGB Arrays should have a finite number of elements that match up to each pixel / block created, but the colors for the final pixel / blocks are not lining up 100%.  It is accurate for the most part, but I've had to add additional elements to the RGB Arrays to get the proper colors on the proper blocks.

"use strict";

// window.addEventListener("DOMContentLoaded", getSelectedColor());

window.addEventListener("DOMContentLoaded", init());
// init();

function init() {
//   // colorPicker.addEventListener("input", getHexInput);
//   console.log("init");
  const input = document.querySelector("input");
  input.addEventListener("input", getSelectedColor);
  getSelectedColor(input);
}

function getSelectedColor(input) {
//   console.log("getHexInput");
  input = document.querySelector("input");
//   let valueHex = input.value;
//   // document.querySelector("#colorPicker").addEventListener("input", showBoxColor);
//   // let valueHex = event.target.value;
//   // let valueHex = document.getElementById("colorPicker").value;
  
  
//   showHex(valueHex);
//   showBoxColor(valueHex);
//   // hexToRgb(valueHex);

// }

// Functions NEW:
  // Getting a selected color from the user
      function getSelectedColor() {
        const input = document.querySelector("input").value;
        input.addEventListener("input", showSelectedColor);
        return input;
      }

  // Showing a selected color (possibly a delegator for the following function calls)
  function showSelectedColor(input) {    
    // <---- DELEGATOR/SHOWINFORMATION
      
       const css = rgbToCss(rgb);
       const hex = rgbToHex(rgb);
       const rgb = hexToRgb(hex);
       const hsl = rgbToHsl(rgb);
      
       showColorColoredBox(css);
       showHex(hex);
       showRgb(rgb);
       showhsl(hsl);
      
    }
  // Showing the color as a colored box in CSS
      function showColorColoredBox(css) {
       document.getElementById("boxColor").style.backgroundColor = `${r}, ${g}, ${b}`;
      }
  // Showing the color as hex
      function showHex(hex) {
       document.getElementById("hex").textContent = hex;
      }
  // Showing the color as RGB
      function showRgb(rgb) {
       document.getElementById("rgb").textContent = `${r}, ${g}, ${b}`;
      }
  // Showing the color as HSL
      function showHsl(hsl) {
       document.getElementById("hsl").textContent = `${h.toFixed()}, ${s.toFixed()}%, ${l.toFixed()}%`;
      }
  // Converting hex to RGB
      function hexToRgb(hex) {
       const r = parseInt(hex.substring(1, 3), 16);
       const g = parseInt(hex.substring(3, 5), 16);
       const b = parseInt(hex.substring(5, 7), 16);
       
       return {r, g, b};
      }
  // Converting RGB to CSS usable string, like rgb(100, 123, 192);
      function rgbToCss(r, g, b) {
        return `rgb(${r}, ${g}, ${b})`;
      }
  // Converting RGB to hex
      function rgbToHex(rgb) {
        const hexR = rgb.r.toString(16);
        const hexG = rgb.g.toString(16);
        const hexB = rgb.b.toString(16);

        const hex = "#" + hexR + hexG + hexB;
        return hex;
      } 

  // Converting RGB to HSL
function rgbToHsl(rgb) {
  r /= 255;
  g /= 255;
  b /= 255;
   
  let h, s, l;
   
  const min = Math.min(r,g,b);
  const max = Math.max(r,g,b);
    
  if( max === min ) {
    h = 0;
    } else
    if (max === r) {
    h = 60 * (0 + (g - b) / (max - min) );
    } else
    if (max === g) {
    h = 60 * (2 + (b - r) / (max - min) );
    } else
    if (max === b) {
    h = 60 * (4 + (r - g) / (max - min) );
    }
    
  if (h < 0) {h = h + 360; }
    
  l = (min + max) / 2;
    
  if (max === 0 || min === 1 ) {
    s = 0;
  } else {
    s = (max - l) / ( Math.min(l,1-l));
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;
       
  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  return "hsl(" + h.toFixed(0) + "%," + s.toFixed(0) + "%," + l.toFixed(0) + "%)";
}


// window.addEventListener("DOMContentLoaded", init());
// init();
// const colorPicker = document.querySelector("#colorPicker");
// const boxColor = document.querySelector("#boxColor");
// const HEX = document.querySelector("#hex");
// const RGB = document.querySelector("#rgb");
// const HSL = document.querySelector("#hsl");


// function init() {
//   // colorPicker.addEventListener("input", getHexInput);
//   console.log("init");
//   const input = document.querySelector("input");
//   input.addEventListener("input", getHexInput);
//   getHexInput(input);
// }

// function getHexInput(input) {
//   console.log("getHexInput");
//   input = document.querySelector("input");
//   let valueHex = input.value;
//   // document.querySelector("#colorPicker").addEventListener("input", showBoxColor);
//   // let valueHex = event.target.value;
//   // let valueHex = document.getElementById("colorPicker").value;
  
  
//   showHex(valueHex);
//   showBoxColor(valueHex);
//   // hexToRgb(valueHex);

// }



// function getHexValue() {}

// function showHex(valueHex) {
//   console.log("showHex",valueHex);
  // document.getElementById("hex").textContent = `${valueHex}`;
  
// }

// function showBoxColor(valueHex) {
//   console.log("showBoxColor");
//   document.getElementById("boxColor").style.backgroundColor = `${valueHex}`;
//   hexToRgb(valueHex); 
// }

// function hexToRgb(valueHex) {
//   console.log("hexToRgb");
//   // const hexColor = "#bada55";
//   // function colorConvert(hexColor) {
//     let r = valueHex.substring(1, 3);
//     let g = valueHex.substring(3, 5);
//     let b = valueHex.substring(5, 7);
  
//     r = parseInt(r, 16);
//     g = parseInt(g, 16);
//     b = parseInt(b, 16);
  
//     console.log(`RGB: ${r}, ${g}, ${b}`);

//     // colorConvert(hexColor);
//     showRgb(r, g, b);

//   }
  
// function showRgb(r, g, b) {
//   console.log("showRgb");
// document.getElementById("rgb").textContent = `${r}, ${g}, ${b}`;
//   getHslValue(r, g, b);
// }

// function getHslValue(r, g, b) {
//   console.log("getHslValue");
//   r /= 255;
//   g /= 255;
//   b /= 255;
   
//   let h, s, l;
   
//   const min = Math.min(r,g,b);
//   const max = Math.max(r,g,b);
    
//   if( max === min ) {
//        h = 0;
//      } else
//      if (max === r) {
//        h = 60 * (0 + (g - b) / (max - min) );
//      } else
//      if (max === g) {
//        h = 60 * (2 + (b - r) / (max - min) );
//      } else
//      if (max === b) {
//        h = 60 * (4 + (r - g) / (max - min) );
//   }
    
//   if (h < 0) {h = h + 360; }
    
//   l = (min + max) / 2;
    
//   if (max === 0 || min === 1 ) {
//        s = 0;
//      } else {
//        s = (max - l) / ( Math.min(l,1-l));
//      }
//   // multiply s and l by 100 to get the value in percent, rather than [0,1]
//   s *= 100;
//   l *= 100;
   
//   console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
//   showHsl(h, s, l);

// }

// function showHsl(h, s, l) {
//   console.log("showHsl");
//   document.getElementById("hsl").textContent = `${h.toFixed()}, ${s.toFixed()}%, ${l.toFixed()}%`;

//  HSL.textContent = `HSL: ${h.tofixed(0)}, ${s.tofixed(0)}%, ${l}%`; 
// }
var canvas = document.getElementById("scanvas");
var cx = canvas.getContext("2d");

const keys = {"LEFT": 37, "RIGHT": 39, "UP": 38, "DOWN": 40};




/**
 * Create a line on the canvas from position xy to position x2y2
 * @param {string} color - Color of the line
 * @param {number} x1 - the position in x where the line will start
 * @param {number} y1 - the position in y where the line will start
 * @param {number} x2 - the position in x where the line will end
 * @param {number} y2 - the position in y where the line will end
 * @param {number} lineWidth - the width of the line
 */
 function drawLine(color, x1, y1, x2, y2, lineWidth = 9){

    cx.beginPath();
    cx.strokeStyle = color;
    cx.lineWidth = lineWidth;
    cx.moveTo(x1, y1);
    cx.lineTo(x2, y2);
    cx.stroke();
    cx.closePath();

}

/**
 * restart the canvas content (the lines and images)
 */
 function resetCanvas() {
    
    canvas.width = canvas.width;

}
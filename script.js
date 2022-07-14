console.log('sirvo')

var canvas = document.getElementById("scanvas");
var cx = canvas.getContext("2d");

const keys = {"LEFT": 37, "RIGHT": 39, "UP": 38, "DOWN": 40};







function dibujarPunto() {
    // quedo aquí
}

function crearCuadricula() {
    const numeroDeLineas = 30;
    const anchoDeLinea = 1;

    let lineX = canvas.width / numeroDeLineas;
    let a = lineX;
    let lineY = canvas.height / 15;
    let b = lineY;
    
    for (let i = 1; i <= numeroDeLineas; i++) {
        // vertical
        drawLine('#ffffff', a,  0, a, canvas.height, anchoDeLinea)
        a += lineX
    
        // horizontal
        // si, ya se que hay la mitad del numero de lineas
        drawLine('#ffffff', 0,  b, canvas.width, b, anchoDeLinea)
        b += lineY
    }
}

/**
 * Create lineX line on the canvas from position xy to position x2y2
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
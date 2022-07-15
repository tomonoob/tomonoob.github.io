console.log("sirvo");

var canvas = document.getElementById("scanvas");
var cx = canvas.getContext("2d");

const keys = { LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40 };

const numeroDeLineas = 30;
const numeroDeLineasY = 15;
const lineX = canvas.width / numeroDeLineas;
const lineY = canvas.height / numeroDeLineasY;

crearCuadricula();
// dibujarPunto()

function dibujarPunto(x, y, color) {
  // ejemplos que utilize para enterderlo:
  // // 1
  // drawLine('#ff0000', 0, lineY/2, lineX-1, lineY/2, 8)
  // // 2
  // drawLine('#ff0000', lineX+1, lineY/2, lineX*2-1, lineY/2, 8)
  // // 3 (abajo)
  // drawLine('#ff0000', 0, (lineY/2)*3, lineX-1, (lineY/2)*3, 8)
  // // 4
  // drawLine('#ff0000', lineX+1, (lineY/2)*3, lineX*2-1, (lineY/2)*3, 8)
  ///esto colorea todos los "puntos"
  // nose porque (y ahora no tengo mucho tiempo para ver pq) hacia como la mitad de numerodelineasy (8), asi que le puse * 2 - 1 para que terminara de hacer todas...
  // for (let iy = 1; iy <= numeroDeLineasY * 2 - 1; iy += 2) {
  //     for (let ix = 0; ix < numeroDeLineas; ix++) {
  //         drawLine('#ff0000', (lineX * ix) + 1, (lineY/2) * iy, (lineX * (ix + 1)) - 1, (lineY/2) * iy, 8)
  //     }
  // }

  // acepto me costó obtener la siguiente formula (o algoritmo no se) xd
  drawLine(
    color,
    lineX * (x - 1) + 1,
    (lineY / 2) * (y + (y - 1)),
    lineX * (x - 1 + 1) - 1,
    (lineY / 2) * (y + (y - 1)),
    8
  );
}

function crearCuadricula() {
  const anchoDeLinea = 1;

  let a = lineX;
  let b = lineY;

  for (let i = 1; i <= numeroDeLineas; i++) {
    // vertical
    drawLine("#ffffff", a, 0, a, canvas.height, anchoDeLinea);
    a += lineX;

    // horizontal
    // si, ya se que hay la mitad del numero de lineas
    drawLine("#ffffff", 0, b, canvas.width, b, anchoDeLinea);
    b += lineY;
  }

  // para completar, que no se puso a la izquierda ni arriba
  //izquierda
  drawLine("#ffffff", 0, 0, 0, canvas.height, anchoDeLinea);
  //arriba
  drawLine("#ffffff", 0, 0, canvas.width, 0, anchoDeLinea);
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
function drawLine(color, x1, y1, x2, y2, lineWidth = 9) {
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

console.log("sirvo");

var canvas = document.getElementById("scanvas");
var cx = canvas.getContext("2d");

const numeroDeLineas = 30;
const numeroDeLineasY = 15;
const lineX = canvas.width / numeroDeLineas;
const lineY = canvas.height / numeroDeLineasY;

let actualKey = "ArrowRight";
let intervalo = undefined;
let tails = [];
let route = [{ x: 1, y: 1 }];
let food = {}

let bugFix = undefined;

start();

function createTail() {
  tails.push([]);
}

function createFood() {
  food = {
    x: getRndInteger(1, numeroDeLineas),
    y: getRndInteger(1, numeroDeLineasY)
  }
}

function start() {
  let snake = {
    x: 1,
    y: 1,
  };

  document.addEventListener("keydown", (e) => {
    if (
      (e.key === "ArrowRight" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowDown") &&
      e.key != actualKey
    ) {
      if (
        (e.key === "ArrowRight" && actualKey != "ArrowLeft") ||
        (e.key === "ArrowLeft" && actualKey != "ArrowRight") ||
        (e.key === "ArrowUp" && actualKey != "ArrowDown") ||
        (e.key === "ArrowDown" && actualKey != "ArrowUp")
      ) {
        actualKey = e.key;
      }
    }
  });

  createFood();

  intervalo = setInterval(() => {
    resetCanvas();
    crearCuadricula();

    switch (actualKey) {
      case "ArrowRight":
        snake.x++;
        break;
      case "ArrowLeft":
        snake.x--;
        break;
      case "ArrowUp":
        snake.y--;
        break;
      case "ArrowDown":
        snake.y++;
        break;
      default:
        alert("que paso??????????????");
    }
    if (
      snake.y > numeroDeLineasY ||
      snake.y <= 0 ||
      snake.x > numeroDeLineas ||
      snake.x <= 0
    ) {
      gameOver();
    }

    dibujarPunto(snake.x, snake.y, "#55ff55");
    route.push({ x: snake.x, y: snake.y });

    // if (route.length > tails.length) {
    //   route.shift;
    // }

    // colas
    let tn = 0;
    tails.forEach((tail) => {
      dibujarPunto(
        route[route.length - tn - 2].x,
        route[route.length - tn - 2].y,
        "#aaffaa"
      );
      tn++;
    });

    //comida

    if (snake.x === food.x && snake.y === food.y) {
      createTail();
      createFood();
    }
    dibujarPunto(food.x, food.y, '#ff0000')
  }, 160);
}

function gameOver() {
  alert("Game over");
  clearInterval(intervalo);
}

// crearCuadricula();
// dibujarPunto(1, 1, 'red')

/**
 * Dibuja en un punto x y de la cuadrilla especificado
 * @param {number} x - posicion en el eje x de la cuadrilla
 * @param {number} y - posicion en el eje y de la cuadrilla
 * @param {string} color - color del punto
 */
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
    lineX * x - 1,
    (lineY / 2) * (y + (y - 1)),
    8
  );
}

function crearCuadricula() {
  const anchoDeLinea = 0.01;

  for (let i = 1; i <= 10; i++) {
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
 * Quita todo el contenido que haya dentro del canvas
 */
function resetCanvas() {
  canvas.width = canvas.width; // esta es una manera de resetear el canvas
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

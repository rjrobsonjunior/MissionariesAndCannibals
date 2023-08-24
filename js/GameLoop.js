import Entity from "./Entity.js";
import Boat from "./Boat.js";
import Manager from "./Manager.js"

// path to images
const URLboatDeselected = '../assets/barco.png';
const URLboatSelected = '../assets/barco2.png';
const URLmissionariesSelected = '../assets/padre1.png';
const URLmissionariesDeselected = '../assets/padre1.png';
const URLcannibalsSelected = '../assets/canibal2.png';
const URLcannibalsDeselected = '../assets/canibal1.png';

//canvas parameters
const canvasWidth = 7;
const canvasHeight = 18;
const canvasSpacing = 1;

function getParameterBynumber(number) {
  const url = window.location.href;
  number = number.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + number + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
  
// Obter o valor do parâmetro 'number' da URL
const numberParam = getParameterBynumber('number');
console.log(numberParam);

// Variáveis para contagem de movimentos e tempo
let movesCount = 0;
let startTime;
let endTime;  


function createCanvas(name, x, y, width, height, imagemURL) {
  const canvas = document.createElement('canvas');
  canvas.id = name;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const canvasWidth = (width / 100) * windowWidth;
  const canvasHeight = (height / 100) * windowHeight;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  canvas.style.position = 'absolute';

  // Definir posicionamento em porcentagem da tela
  canvas.style.left = x + '%';
  canvas.style.top = y + '%';

  const ctx = canvas.getContext('2d');

  const imagem = new Image();
  imagem.src = imagemURL;

  imagem.onload = function() {
    ctx.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  };

  document.body.appendChild(canvas);
}


//------------------ canvas creating -----------------------------------//

const ManagerGame = new Manager(numberParam);

const barcoCanvas = createCanvas('barco-canvas', 15, 80, 25, canvasHeight, URLboatDeselected );

let x = 1;
let y = 60;

for (let i = 0; i < numberParam; i++) {
  console.log(" missionario iterou:"+ i);
  const missionarioCanvas = createCanvas('missionario-canvas-' + i, x, y, canvasWidth, canvasHeight, URLmissionariesDeselected);
  //ManagerGame.pushEntity(missi)
  /*missionarioCanvas.addEventListener('click', function(event) {
    moveCanvas(event);
  });*/
  x += canvasWidth + canvasSpacing;
}

x = 1;
y -= canvasHeight + canvasSpacing;

for (let i = 0; i < numberParam; i++) {
  console.log("canibal iterou:"+ i);
  const canibalCanvas = createCanvas('canibal-canvas-' + i, x, y, canvasWidth, canvasHeight, URLcannibalsDeselected);
  /* canibalCanvas.addEventListener('click', function(event) {
    moveCanvas(event);
  });*/
  x += canvasWidth + canvasSpacing;

}

function gameLoop()
{
  requestAnimationFrame(gameLoop);
}

gameLoop();

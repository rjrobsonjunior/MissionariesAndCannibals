import Boat from "./Boat.js";
import Manager from "./Manager.js"
import Entity from "./Entity.js";
// path to images
const URLboatDeselected = '../assets/barco.png';
const URLboatSelected = '../assets/barco2.png';
const URLmissionariesSelected = '../assets/padre2.png';
const URLmissionariesDeselected = '../assets/padre1.png';
const URLcannibalsSelected = '../assets/canibal2.png';
const URLcannibalsDeselected = '../assets/canibal1.png';

//canvas parameters
const canvasWidth = 7;
const canvasHeight = 18;
const canvasSpacing = 1;
const canvasWidthBoat = 25;


function getParameterBynumber(number) {
  const url = window.location.href;
  number = number.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + number + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function updateTime() {
  const timeElement = document.getElementById('time');
  const currentTime = (new Date() - startTime) / 1000; // Tempo em segundos
  timeElement.textContent = currentTime.toFixed(1) ;
}

// Inicialização
const startTime = new Date(); 


// Atualiza o tempo periodicamente
setInterval(updateTime, 1000); // Atualiza a cada 100 milissegundos (0,1 segundos)

// Obter o valor do parâmetro 'number' da URL
const numberParam = getParameterBynumber('number');
//console.log(numberParam);


function widthCanvas(width)
{
  const windowWidth = window.innerWidth;
  const canvasWidth = (width / 100) * windowWidth;
  return canvasWidth;
}

function heightCanvas(height)
{
  const windowHeight = window.innerHeight;
  const canvasHeight = (height / 100) * windowHeight;
  return canvasHeight;
}

function createCanvas(name, x, y, width, height, imagemURL) {
  const canvas = document.createElement('canvas');
  canvas.id = name;

  canvas.width = widthCanvas(width);
  canvas.height = heightCanvas(height);
  canvas.style.position = 'absolute';

  // Define size in proporcion of screen
  canvas.style.left = x + '%';
  canvas.style.top = y + '%';

  const ctx = canvas.getContext('2d');
  
  const imagem = new Image();
  imagem.src = imagemURL;

  imagem.onload = function () {
    ctx.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  };
  
  document.body.appendChild(canvas);
}


//---------------------------- creating objects  ---------------------------------------------//

const ManagerGame = new Manager(numberParam);

createCanvas('barco-canvas', 20, 80, canvasWidthBoat, canvasHeight, URLboatDeselected);
const boat = new Boat('barco-canvas', 20, 80,  widthCanvas(canvasWidthBoat), heightCanvas(canvasHeight),  URLboatDeselected, ManagerGame);
ManagerGame.pushBoat(boat);

let x = 1;
const yM = 50;
const yC = yM - ( canvasHeight  + canvasSpacing);


for (let i = 0; i < numberParam; i++) {

  createCanvas ('missionario-canvas-' + i, x, yM, canvasWidth, canvasHeight, URLmissionariesDeselected);
  createCanvas('canibal-canvas-' + i, x, yC, canvasWidth, canvasHeight, URLcannibalsDeselected);

  let Emissionarie = new Entity('missionario-canvas-' + i, x, yM, widthCanvas(canvasWidth), heightCanvas(canvasHeight), true, URLmissionariesDeselected);
  ManagerGame.pushEntity(Emissionarie);
  Emissionarie.pushBoat(boat);
  
  let Ecannibal = new Entity('canibal-canvas-' + i, x, yC, widthCanvas(canvasWidth), heightCanvas(canvasHeight), false, URLcannibalsDeselected );
  ManagerGame.pushEntity(Ecannibal);
  Ecannibal.pushBoat(boat);

  x += canvasWidth + canvasSpacing;
}


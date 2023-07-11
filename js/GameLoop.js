// path to images
const URLboatDeselected = '../assets/barco.png';
const URLboatSelected = '../assets/barco2.png';
const URLmissionariesSelected = '../assets/padre1.png';
const URLmissionariesDeselected = '../assets/padre1.png';
const URLcannibalsSelected = '../assets/canibal1.png';
const URLcannibalsDeselected = '../assets/canibal2.png';

//canvas parameters
const canvasWidth = 50;
const canvasHeight = 70;
const canvasSpacing = 10;

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

// Função para exibir a tela de fim de jogo
function showEndScreen() {
  // Parar o cronômetro (se estiver em execução)
  endTime = new Date();
  clearInterval(timerInterval);

  // Atualizar as informações de movimentos e tempo
  const movesSpan = document.querySelector('#moves-count span');
  movesSpan.textContent = movesCount;

  const timeSpan = document.querySelector('#time-spent span');
  const timeDiff = Math.floor((endTime - startTime) / 1000); // Duração em segundos
  const minutes = Math.floor(timeDiff / 60);
  const seconds = timeDiff % 60;
  timeSpan.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Exibir a tela de fim de jogo
  const endScreen = document.querySelector('#end-screen');
  endScreen.style.display = 'flex';
}

// Função para iniciar o jogo
function startGame() {
  // Iniciar o cronômetro
  startTime = new Date();
  timerInterval = setInterval(updateTimer, 1000);

  // Lógica do jogo...

  // Ao finalizar o jogo, chame a função showEndScreen()
  showEndScreen();
}

// Função para atualizar o cronômetro (opcional)
function updateTimer() {
  // Lógica para atualizar o cronômetro exibido na tela
}

function pauseGame() {
    if (!gameRunning) return;
    // Pause the game logic
    gameRunning = false;
    // Implement pause functionality (e.g., freeze character movement)
}


function criarCanvas(nome, x, y, width, height, imagemURL) {
  const canvas = document.createElement('canvas');
  canvas.id = nome;
  canvas.width = width ;
  canvas.height = height ;
  canvas.style.position = 'absolute';
  canvas.style.left = x + 'px';
  canvas.style.top = y + 'px';

  const ctx = canvas.getContext('2d');

  const imagem = new Image();
  imagem.src = imagemURL;

  imagem.onload = function() {
    ctx.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  };

  document.body.appendChild(canvas);
}


function moverCanvas(event) {
  const canvas = event.target;
  const offsetX = event.clientX - canvas.offsetLeft;
  const offsetY = event.clientY - canvas.offsetTop;
  canvas.style.left = (event.clientX - offsetX) + 'px';
  canvas.style.top = (event.clientY - offsetY) + 'px';
}


const barcoCanvas = document.getElementById('boat-canvas');
barcoCanvas.addEventListener('click', moverCanvas);

criarCanvas('barco-canvas', 10, 10, 150, canvasHeight, URLboatDeselected );

let x = 10 + canvasWidth + canvasSpacing;
let y = 10;

for (let i = 0; i < numberParam; i++) {
  const missionarioCanvas = criarCanvas('missionario-canvas-' + i, x, y, canvasWidth, canvasHeight, URLmissionariesDeselected);
  missionarioCanvas.addEventListener('click', moverCanvas);

  x += canvasWidth + canvasSpacing;
}

x = 10 + canvasWidth + canvasSpacing;
y += canvasHeight + canvasSpacing;

for (let i = 0; i < quantidade; i++) {
  const canibalCanvas = criarCanvas('canibal-canvas-' + i, x, y, canvasWidth, canvasHeight, URLcannibalsDeselected);
  canibalCanvas.addEventListener('click', moverCanvas);

  x += canvasWidth + canvasSpacing;
}

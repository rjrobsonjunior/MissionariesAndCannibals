// object GameState
const GameState = {
  MENU: "menu",
  PLAYING: "playing",
  GAME_OVER: "game_over",
  GAME_WIN: "game_win",
};


// variables to control the state, time and creation of the game
let gameState = GameState.MENU;
const missionaries_cannibals_count = getParameterBynumber('number');
let movesCount = 0;
let startTime;
let endTime;

// Função para atualizar o estado do jogo
function updateGameState() {
  switch (gameState) {
    case GameState.MENU:
      // TODO
      break;
    case GameState.PLAYING:
      //TODO
      break;
    case GameState.GAME_OVER:
      //TODO
      break;
    case GameState.GAME_WIN:
      //TODO
      break;
    default:
      break;
  }
}

// function to start the game
function startGame() {
  if (gameState !== GameState.MENU) return;
  startTime = new Date();
  timerInterval = setInterval(updateTimer, 1000);
  // get the amounts of missonaries and cannibals entered by user
  missionaries_cannibals_count = parseInt(document.getElementById("number").value);
   
  // change game state to PLAYING
  gameState = GameState.PLAYING;
  showEndScreen();
  // Resto da lógica para iniciar o jogo
}

// Function to end the game
function endGame() {
  // change game state to GAME_OVER
  gameState = GameState.GAME_OVER;
  
  // Resto da lógica para encerrar o jogo
}

// Função de loop do jogo (chamada em intervalos regulares)
function gameLoop() {
  // Atualizar o estado do jogo
  updateGameState();
  
  // Resto da lógica do loop do jogo
  
  // Agendar a próxima chamada do loop do jogo
  requestAnimationFrame(gameLoop);
}

// Function to pause the game
function pauseGame() {
  if (!gameRunning) return;
  // Pause the game logic
  gameRunning = false;
  // Implement pause functionality (e.g., freeze character movement)
}

// Function to restart the game
function restartGame() {
  // Reset game variables
  gameRunning = false;
  missionaries_cannibals_count = 0;
  // Reset the game board
  document.getElementById("game-board").innerHTML = "";
  // Implement any other necessary reset logic
}

// Event listeners for control buttons
//document.getElementById("start-button").addEventListener("click", startGame);
//document.getElementById("pause-button").addEventListener("click", pauseGame);
//document.getElementById("restart-button").addEventListener("click", restartGame);

// Evento para iniciar o jogo
const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', function() {
  // Redirecionar para a próxima página
  window.location.href = 'GameLoop.html' + encodeURIComponent(number);
  console.log(number)
});

// Código para pagina2.html

// Evento para enviar o nome
const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function() {
  // Obter o valor do input
  const numberInput = document.querySelector('#number-input');
  const number = numberInput.value;

  // Redirecionar para a próxima página, passando o nome como parâmetro na URL
  window.location.href = 'pagina3.html?number=';
});

function getParameterBynumber(number) {
  const url = window.location.href;
  number = number.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + number + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


const numberParam = getParameterBynumber('number');

const missionariosCanvas = document.getElementById('missionarios-canvas');
const canibaisCanvas = document.getElementById('canibais-canvas');
const boatCanvas = document.getElementById('boat-canvas');

const missionariosContext = missionariosCanvas.getContext('2d');
const canibaisContext = canibaisCanvas.getContext('2d');
const boatContext = boatCanvas.getContext('2d');

// Configurar o posicionamento e estilo dos canvases
missionariosCanvas.style.float = 'right';
canibaisCanvas.style.float = 'right';
boatCanvas.style.margin = '0 auto';

// Função para desenhar os missionários no canvas
function drawMissionarios(count) {
  missionariosContext.clearRect(0, 0, missionariosCanvas.width, missionariosCanvas.height);
  missionariosContext.fillStyle = 'blue';
  missionariosContext.fillRect(0, 0, count * 20, missionariosCanvas.height);
}

// Função para desenhar os canibais no canvas
function drawCanibais(count) {
  canibaisContext.clearRect(0, 0, canibaisCanvas.width, canibaisCanvas.height);
  canibaisContext.fillStyle = 'red';
  canibaisContext.fillRect(0, 0, count * 20, canibaisCanvas.height);
}

// Função para desenhar o barco no canvas
function drawBoat() {
  boatContext.clearRect(0, 0, boatCanvas.width, boatCanvas.height);
  boatContext.fillStyle = 'brown';
  boatContext.fillRect(0, 0, boatCanvas.width, boatCanvas.height);
}

// Exemplo de uso:
const missionariosCount = 3;
const canibaisCount = 2;

drawMissionarios(missionariosCount);
drawCanibais(canibaisCount);
drawBoat();

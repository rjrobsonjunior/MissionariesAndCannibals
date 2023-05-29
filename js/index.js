// object GameState
const GameState = {
  MENU: "menu",
  PLAYING: "playing",
  GAME_OVER: "game_over",
  GAME_WIN: "game_win",
};


// variables to control the state, time and creation of the game
let gameState = GameState.MENU;
let missionaries_cannibals_count = 0;
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
  missionariesCount = 0;
  cannibalsCount = 0;
  // Reset the game board
  document.getElementById("game-board").innerHTML = "";
  // Implement any other necessary reset logic
}

// Event listeners for control buttons
document.getElementById("start-button").addEventListener("click", startGame);
document.getElementById("pause-button").addEventListener("click", pauseGame);
document.getElementById("restart-button").addEventListener("click", restartGame);
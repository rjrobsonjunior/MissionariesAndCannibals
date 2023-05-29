//
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
      // Lógica para o estado do menu
      // Exibir o menu e aguardar entrada do usuário
      break;
    case GameState.PLAYING:
      // Lógica para o estado de jogo em execução
      // Atualizar a lógica do jogo, movimentos dos personagens, verificação de vitória/derrota, etc.
      break;
    case GameState.GAME_OVER:
      // Lógica para o estado de jogo encerrado
      // Exibir tela de game over, pontuações finais, etc.
      break;
    case GameState.GAME_WIN:
      //
      break;
    default:
      break;
  }
}

// Função para iniciar o jogo
function startGame() {
  if (gameState !== GameState.MENU) return;
  startTime = new Date();
  timerInterval = setInterval(updateTimer, 1000);
  // Obter as quantidades de missionários e canibais inseridas pelo usuário
  missionaries_cannibals_count = parseInt(document.getElementById("number").value);
   
  // Mudar o estado do jogo para PLAYING
  gameState = GameState.PLAYING;
  showEndScreen();
  // Resto da lógica para iniciar o jogo
}

// Função para encerrar o jogo
function endGame() {
  // Mudar o estado do jogo para GAME_OVER
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


// Function to start the game
function startGame() {
  if (gameRunning) return;
  gameRunning = true;
  // Get the selected quantities of missionaries and cannibals from the inputs
  missionariesCount = parseInt(document.getElementById("missionaries").value);
  cannibalsCount = parseInt(document.getElementById("cannibals").value);
  // Clear the game board
  document.getElementById("game-board").innerHTML = "";
  // Create and append the game board elements (e.g., divs representing the islands and characters)
  // Add event listeners for game controls (e.g., pause, restart)
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
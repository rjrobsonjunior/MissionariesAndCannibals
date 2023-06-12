startTime = new Date();
timerInterval = setInterval(updateTimer, 1000);

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

// Exibir o valor do parâmetro na página
const numberDisplay = document.querySelector('#number-display');
numberDisplay.textContent = 'Olá, ' + numberParam + '!';

// Function to pause the game
function pauseGame() {
    if (!gameRunning) return;
    // Pause the game logic
    gameRunning = false;
    // Implement pause functionality (e.g., freeze character movement)
}


const missionariosCanvas = numberParam;
const canibaisCanvas = numberParam;
const boatCanvas = 1;

const missionariosContext = missionariosCanvas.getContext('2d');
const canibaisContext = canibaisCanvas.getContext('2d');
const boatContext = boatCanvas.getContext('2d');

// Configurar o posicionumbernto e estilo dos canvases
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

drawMissionarios(missionariosCanvas);
drawCanibais(canibaisCanvas);
drawBoat();
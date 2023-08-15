// Evento para enviar o nome
const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', function () {
  // Obter o valor do input
  const numberInput = document.querySelector('#number-input');
  const number = numberInput.value;

  // Redirecionar para a próxima página, passando o nome como parâmetro na URL
  window.location.href = 'GameLoop.html?number=' + encodeURIComponent(number);
});


const rulesButton = document.querySelector('#rules-button');
rulesButton.addEventListener('click', function () {
  // Redirecionar para a página de regras do jogo (GameRules.html)
  window.location.href = 'GameRules.html';
});
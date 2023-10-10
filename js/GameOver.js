const MenuButton = document.querySelector('#start-button');
MenuButton.addEventListener('click', function () {
  // Redirecionar para a página de regras do jogo (GameRules.html)
  window.location.href = 'GameLoop.html?number=3';
});

const returnButton = document.querySelector('#info-button');
returnButton.addEventListener('click', function () {
  // Redirecionar para a página de regras do jogo (GameRules.html)
  window.location.href = 'GameMenu.html';
});

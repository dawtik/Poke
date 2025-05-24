// Добавлены звуковые эффекты
function playSound(type) {
  if(type === 'click') {
    const audio = new Audio('sound/click.mp3');
    audio.play();
  }
}

function clickPokemon() {
  pokecoins++;
  updateCounter();
  saveGame();
  playSound('click');
  
  // Анимация при клике
  const pokeball = document.getElementById('pokeball');
  pokeball.style.transform = 'scale(0.9)';
  setTimeout(() => {
    pokeball.style.transform = 'scale(1)';
  }, 100);
}
const juggernaut = require("./juggernaut");

import JuggernautGame from './game';


document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('juggernaut-game');

  const background = document.getElementById('moving-background');
  const movingBackground = background.getContext('2d');
  const juggernautGame = new JuggernautGame(canvas, movingBackground);
  juggernautGame.render();
});
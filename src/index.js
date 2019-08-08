const juggernaut = require("./juggernaut");

import JuggernautGame from './game';


document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('juggernaut-game');

  const background = document.getElementById('moving-background');
  const movingBackground = background.getContext('2d');
  const sentenceInput = document.getElementById('sentence-input');

  const juggernautGame = new JuggernautGame(canvas, movingBackground, sentenceInput);
  juggernautGame.render();
});
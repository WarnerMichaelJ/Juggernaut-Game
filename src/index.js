const juggernaut = require("./juggernaut");

import JuggernautGame from './game';


document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('juggernaut-game');

  const background = document.getElementById('moving-background');
  const movingBackground = background.getContext('2d');
  const sentenceInput = document.getElementById('sentence-input');
  const wallCount = document.getElementById('wall-count');
  wallCount.innerHTML = "Walls Smashed: 0";

  const arcadeMusic = document.getElementById('arcade-music');

  const juggernautGame = new JuggernautGame(canvas, movingBackground, sentenceInput, wallCount);

  arcadeMusic.addEventListener('click', (e) => {
    e.preventDefault();
    juggernautGame.handleMusic();

  });


  const startScreen = document.getElementById('start-screen');
  const startButton = document.getElementById('start-button');
  
  startButton.addEventListener('click', (e) => {
    startScreen.classList.add('displaynone');

    juggernautGame.arcadeMusic.play();

    juggernautGame.render();
    sentenceInput.focus();
  });

  const instructionsButton = document.getElementById('how-to-play');
  const instructionsModalParentDiv = document.getElementById('instructions-modal-parent-div');

  instructionsButton.addEventListener('click', (e) => {
    console.log("inside-instructions-button-click");
    instructionsModalParentDiv.classList.remove('displaynone');
  });

  instructionsModalParentDiv.addEventListener('click', (e) => {
    instructionsModalParentDiv.classList.add('displaynone');
  });


});
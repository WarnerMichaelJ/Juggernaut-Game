/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CANVAS_HEIGHT = 381;\nvar CANVAS_WIDTH = 1000;\n\nvar MovingBackground =\n/*#__PURE__*/\nfunction () {\n  function MovingBackground(movingBackground) {\n    _classCallCheck(this, MovingBackground);\n\n    this.imgCoordinates = [0, 0, 759, 285];\n    this.canvasCoordinates1 = [null, 0, CANVAS_WIDTH, CANVAS_HEIGHT];\n    this.canvasCoordinates2 = [null, 0, CANVAS_WIDTH, CANVAS_HEIGHT];\n    this.xCurrent = 0;\n    this.speed = 2.0;\n    this.context = movingBackground;\n    this.img = new Image();\n    this.img.src = './assets/images/X-Men_background_image.png'; // debugger;\n\n    this.drawBackground = this.drawBackground.bind(this);\n    this.render = this.render.bind(this);\n  }\n\n  _createClass(MovingBackground, [{\n    key: \"drawBackground\",\n    value: function drawBackground() {\n      // debugger; \n      // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)\n      this.context.drawImage(this.img, this.imgCoordinates[0], this.imgCoordinates[1], this.imgCoordinates[2], this.imgCoordinates[3], this.canvasCoordinates1[0], this.canvasCoordinates1[1], this.canvasCoordinates1[2], this.canvasCoordinates1[3]);\n      this.context.drawImage(this.img, this.imgCoordinates[0], this.imgCoordinates[1], this.imgCoordinates[2], this.imgCoordinates[3], this.canvasCoordinates2[0], this.canvasCoordinates2[1], this.canvasCoordinates2[2], this.canvasCoordinates2[3]);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n      this.canvasCoordinates1[0] = this.xCurrent;\n      this.canvasCoordinates2[0] = this.xCurrent + CANVAS_WIDTH;\n      this.drawBackground();\n      if (this.xCurrent <= -CANVAS_WIDTH) this.xCurrent = 0;\n      this.xCurrent -= this.speed; // debugger;\n      // console.log(this.xCurrent);\n    }\n  }]);\n\n  return MovingBackground;\n}();\n\nmodule.exports = MovingBackground;\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return JuggernautGame; });\n/* harmony import */ var _juggernaut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./juggernaut */ \"./src/juggernaut.js\");\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_background__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wall */ \"./src/wall.js\");\n/* harmony import */ var _other_walls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other_walls */ \"./src/other_walls.js\");\n/* harmony import */ var _phrases__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phrases */ \"./src/phrases.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar JuggernautGame =\n/*#__PURE__*/\nfunction () {\n  function JuggernautGame(canvas, movingBackground, sentenceInput, wallCount) {\n    _classCallCheck(this, JuggernautGame);\n\n    this.canvas = canvas;\n    this.movingBackground = movingBackground;\n    this.input = sentenceInput;\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.background = new _background__WEBPACK_IMPORTED_MODULE_1___default.a(movingBackground); // this.background = new Background(this.ctx);\n\n    this.juggernaut = new _juggernaut__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.dimensions);\n    this.wall = new _wall__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx);\n    this.otherWalls = new _other_walls__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.ctx);\n    this.phrases = new _phrases__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    this.phrase = \"inner monologue\";\n    this.successfulSmash;\n    this.breakable = false;\n    this.wallCount = 0;\n    this.wallCountText = wallCount;\n    this.level = 1;\n    this.levelDisplay = document.getElementById(\"current-level\");\n    this.wallSpeed = 1; // this.cycleLoop = [0, 1, 0, 0, 1, 0, 0, 1, 0, 2];\n    // this.cycleLoop = [0, 1];\n\n    this.cycleLoop = [0, 1, 0, 2];\n    this.currentLoopIndex = 0;\n    this.frameCount = 0;\n    this.arcadeMusic = new Audio('./assets/sounds/game_music.wav');\n    this.arcadeMusic.loop = true;\n    this.wallType = \"brick\";\n    this.gameOverScreen = document.getElementById(\"game-over-screen\");\n    this.levelInfo = document.getElementById(\"level-info\");\n    this.handleLevel = this.handleLevel.bind(this);\n    this.handleCollision = this.handleCollision.bind(this);\n    this.juggernautLoopIterate = this.juggernautLoopIterate.bind(this);\n    this.renderLevelInfo = this.renderLevelInfo.bind(this);\n    this.removeLevelInfo = this.removeLevelInfo.bind(this);\n    this.handlePhrase = this.handlePhrase.bind(this);\n    this.handleMusic = this.handleMusic.bind(this);\n    this.handleGameOver = this.handleGameOver.bind(this);\n    this.handleRestart = this.handleRestart.bind(this);\n    this.render = this.render.bind(this);\n  }\n\n  _createClass(JuggernautGame, [{\n    key: \"handlePhrase\",\n    value: function handlePhrase(event) {\n      if (event.keyCode === 13) {\n        var value = this.input.value.trim();\n\n        if (value === this.phrase && !this.breakable) {\n          this.breakable = true;\n          this.successfulSmash = this.phrases.samplePositivity();\n          this.phrase = this.successfulSmash;\n          this.wallSpeed = 4.0;\n          this.input.value = \"\";\n        }\n      }\n    }\n  }, {\n    key: \"handleMusic\",\n    value: function handleMusic() {\n      var muteButton = document.getElementById(\"arcade-music\"); // this.arcadeMusic.muted = !this.arcadeMusic.muted;\n\n      if (!this.arcadeMusic.muted) {\n        this.arcadeMusic.muted = !this.arcadeMusic.muted;\n        muteButton.classList.add(\"muted\");\n        muteButton.innerHTML = \"UNMUTE MUSIC\";\n      } else {\n        this.arcadeMusic.muted = !this.arcadeMusic.muted;\n        muteButton.classList.remove(\"muted\");\n        muteButton.innerHTML = \"Mute Music \";\n      }\n    }\n  }, {\n    key: \"handleGameOver\",\n    value: function handleGameOver() {\n      this.gameOverScreen.classList.remove(\"displaynone\");\n      this.gameOverScreen.addEventListener('click', this.handleRestart);\n    }\n  }, {\n    key: \"handleRestart\",\n    value: function handleRestart() {\n      // event.preventDefault();\n      this.wallCountText.innerHTML = \"Walls Smashed: 0\";\n      this.levelDisplay.innerHTML = \"Level 1\";\n      var newGame = new JuggernautGame(this.canvas, this.movingBackground, this.input, this.wallCountText);\n      newGame.render();\n      this.gameOverScreen.removeEventListener(\"click\", this.handleRestart);\n      this.gameOverScreen.classList.add(\"displaynone\");\n    }\n  }, {\n    key: \"handleLevel\",\n    value: function handleLevel() {\n      if (this.wallCount === 5) {\n        this.level = 2;\n        this.levelDisplay.innerHTML = \"Level \" + this.level;\n        this.renderLevelInfo();\n      } else if (this.wallCount === 10) {\n        this.level = 3;\n        this.levelDisplay.innerHTML = \"Level \" + this.level;\n        this.renderLevelInfo();\n      } else if (this.wallCount === 15) {\n        this.level = 4;\n        this.levelDisplay.innerHTML = \"Level \" + this.level;\n        this.renderLevelInfo();\n      } else if (this.wallCount === 25) {\n        this.level = 5;\n        this.levelDisplay.innerHTML = \"Level \" + this.level;\n        this.renderLevelInfo();\n      }\n    }\n  }, {\n    key: \"renderLevelInfo\",\n    value: function renderLevelInfo() {\n      var levelInfoParagraph1 = document.getElementById(\"level-info-p-tag1\");\n      var levelInfoParagraph2 = document.getElementById(\"level-info-p-tag2\");\n\n      if (this.level === 2) {\n        this.levelInfo.classList.remove(\"displaynone\");\n        levelInfoParagraph1.innerHTML = \"LEVEL 2!\";\n        levelInfoParagraph2.innerHTML = \"You've unlocked new sentences!\";\n        setTimeout(this.removeLevelInfo, 1000);\n      }\n\n      if (this.level === 3) {\n        this.levelInfo.classList.remove(\"displaynone\");\n        levelInfoParagraph1.innerHTML = \"LEVEL 3!\";\n        levelInfoParagraph2.innerHTML = \"You've got new walls to smash!\";\n        setTimeout(this.removeLevelInfo, 1000);\n      }\n\n      if (this.level === 4) {\n        this.levelInfo.classList.remove(\"displaynone\");\n        levelInfoParagraph1.innerHTML = \"LEVEL 4!\";\n        levelInfoParagraph2.innerHTML = \"You can now break the 4th wall!\";\n        setTimeout(this.removeLevelInfo, 1000);\n      }\n\n      if (this.level === 5) {\n        this.levelInfo.classList.remove(\"displaynone\");\n        levelInfoParagraph1.innerHTML = \"LEVEL 5!\";\n        levelInfoParagraph2.innerHTML = \"YOU'RE ON FIRE!\";\n        setTimeout(this.removeLevelInfo, 1000);\n      }\n    }\n  }, {\n    key: \"removeLevelInfo\",\n    value: function removeLevelInfo() {\n      this.levelInfo.classList.add(\"displaynone\");\n    }\n  }, {\n    key: \"handleCollision\",\n    value: function handleCollision() {\n      if (this.wall.x === 181 && this.breakable === false) {\n        this.handleGameOver();\n        return true;\n      }\n\n      if (this.wall.x < 180 && this.wall.x > 175 && this.breakable === true) {\n        this.wallCount++;\n        this.wallCountText.innerHTML = \"Walls Smashed: \" + this.wallCount;\n        return false;\n      }\n    }\n  }, {\n    key: \"juggernautLoopIterate\",\n    value: function juggernautLoopIterate() {\n      if (this.frameCount > 15 && !this.breakable) {\n        this.currentLoopIndex++;\n        this.frameCount = 0;\n      }\n\n      if (this.frameCount > 5 && this.breakable) {\n        this.currentLoopIndex++;\n        this.frameCount = 0;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.handleLevel(); // this.handleCollision();\n\n      if (this.handleCollision()) {\n        return;\n      }\n\n      this.input.addEventListener('keydown', this.handlePhrase);\n      this.frameCount++;\n      this.juggernautLoopIterate();\n      this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n\n      if (this.wall.x <= -240 && this.level >= 3) {\n        this.wall.x = -300;\n        this.wallType = this.wall.wallRandomizer(this.level);\n      }\n\n      if (this.wall.x === 646) {\n        this.phrase = this.phrases.sample(this.level);\n        this.ctx.font = \"30px Georgia\";\n        this.ctx.fillStyle = \"white\";\n        this.breakable = false;\n        this.wallSpeed = 1.0;\n      }\n\n      this.wall.render(this.wallSpeed, this.wallType);\n      this.juggernaut.drawJuggernaut(this.cycleLoop[this.currentLoopIndex]);\n\n      if (this.breakable) {\n        this.ctx.fillText(this.phrase, 150, 170);\n        this.ctx.fillStyle = \"green\";\n        this.ctx.font = \"30px Georgia\";\n      } else {\n        this.ctx.fillText(this.phrase, 150, 170);\n      }\n\n      if (this.currentLoopIndex >= this.cycleLoop.length) {\n        this.currentLoopIndex = 0;\n      }\n\n      this.background.render();\n      window.requestAnimationFrame(this.render);\n    }\n  }]);\n\n  return JuggernautGame;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\nvar juggernaut = __webpack_require__(/*! ./juggernaut */ \"./src/juggernaut.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.getElementById('juggernaut-game');\n  var background = document.getElementById('moving-background');\n  var movingBackground = background.getContext('2d');\n  var sentenceInput = document.getElementById('sentence-input');\n  var wallCount = document.getElementById('wall-count');\n  wallCount.innerHTML = \"Walls Smashed: 0\";\n  var arcadeMusic = document.getElementById('arcade-music');\n  var juggernautGame = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, movingBackground, sentenceInput, wallCount);\n  arcadeMusic.addEventListener('click', function (e) {\n    e.preventDefault();\n    juggernautGame.handleMusic();\n  });\n  var startScreen = document.getElementById('start-screen');\n  var startButton = document.getElementById('start-button');\n  startButton.addEventListener('click', function (e) {\n    startScreen.classList.add('displaynone');\n    juggernautGame.arcadeMusic.play();\n    juggernautGame.render();\n    sentenceInput.focus();\n  });\n  var instructionsButton = document.getElementById('how-to-play');\n  var instructionsModalParentDiv = document.getElementById('instructions-modal-parent-div');\n  instructionsButton.addEventListener('click', function (e) {\n    console.log(\"inside-instructions-button-click\");\n    instructionsModalParentDiv.classList.remove('displaynone');\n  });\n  instructionsModalParentDiv.addEventListener('click', function (e) {\n    instructionsModalParentDiv.classList.add('displaynone');\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/juggernaut.js":
/*!***************************!*\
  !*** ./src/juggernaut.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Juggernaut; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CONSTANTS = {\n  JUGGERNAUT_WIDTH: 530,\n  JUGGERNAUT_HEIGHT: 430,\n  FRAME_Y: 0,\n  CANVAS_X: 145,\n  CANVAS_Y: 185\n};\n\nvar Juggernaut =\n/*#__PURE__*/\nfunction () {\n  function Juggernaut(ctx, dimensions) {\n    _classCallCheck(this, Juggernaut);\n\n    // this.x = this.dimensions.width / 3;\n    // this.y = this.dimensions.height / 2;\n    this.ctx = ctx;\n    this.canvasDimensions = dimensions;\n    this.img = new Image();\n    this.img.src = \"./assets/spritesheets/Juggernaut_Spritesheet_Simplified.png\";\n    this.cycleLoop = [0, 1, 0, 2]; // this.cycleLoop = [0, 1];\n\n    this.currentLoopIndex = 0;\n    this.frameCount = 0;\n    this.drawJuggernaut = this.drawJuggernaut.bind(this);\n  }\n\n  _createClass(Juggernaut, [{\n    key: \"drawJuggernaut\",\n    value: function drawJuggernaut(frameX) {\n      this.ctx.drawImage(this.img, frameX * 500, 0, 528, 435, CONSTANTS.CANVAS_X, CONSTANTS.CANVAS_Y, 146, 120);\n    }\n  }]);\n\n  return Juggernaut;\n}();\n\n\n\n//# sourceURL=webpack:///./src/juggernaut.js?");

/***/ }),

/***/ "./src/other_walls.js":
/*!****************************!*\
  !*** ./src/other_walls.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OtherWalls; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar WALL_SPRITESHEET_COORDINATE = {};\nvar WALL_CONSTANTS = {};\n\nvar OtherWalls =\n/*#__PURE__*/\nfunction () {\n  function OtherWalls(ctx, props) {\n    _classCallCheck(this, OtherWalls);\n\n    this.x = 650; // this.y = props.y;\n\n    this.speed = 1.0;\n    this.ctx = ctx;\n    this.img = new Image();\n    this.img.src = './assets/spritesheets/4th_wall_spritesheet.png';\n    this.bricksBreaking = new Audio('./assets/sounds/bricks_breaking.mp3');\n    this.bricksBreaking.volume = 0.5;\n    this.moveWall = this.moveWall.bind(this);\n    this.drawWall = this.drawWall.bind(this);\n  }\n\n  _createClass(OtherWalls, [{\n    key: \"moveWall\",\n    value: function moveWall() {\n      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.0;\n      this.x -= speed;\n    }\n  }, {\n    key: \"drawWall\",\n    value: function drawWall() {\n      // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)\n      if (this.x <= -150) this.x = 650; // console.log(this.x);\n\n      if (this.x <= 180) {\n        if (this.x > 165) this.bricksBreaking.play(); // Simpsons couch gag\n\n        this.ctx.drawImage(this.img, 410, 0, 410, 300, this.x, 150, 300, 207); // this.ctx.drawImage(this.img,\n        //   450, 280, 600, 450,\n        //   this.x, 150, 300, 207);\n      } else {\n        // Simpsons staring\n        this.ctx.drawImage(this.img, 0, 0, 410, 300, this.x, 150, 300, 207); // Deadpool brickwall\n        // this.ctx.drawImage(this.img,\n        //   0, 400, 410, 300,\n        //   this.x, 170, 300, 207);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render(speed) {\n      this.moveWall(speed);\n      this.drawWall();\n    }\n  }]);\n\n  return OtherWalls;\n}();\n\n\n\n//# sourceURL=webpack:///./src/other_walls.js?");

/***/ }),

/***/ "./src/phrases.js":
/*!************************!*\
  !*** ./src/phrases.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Phrases; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Phrases =\n/*#__PURE__*/\nfunction () {\n  function Phrases() {\n    _classCallCheck(this, Phrases);\n\n    this.sentences = [\"I miss NBA Jam\", \"I like it like that\", \"smash that wall\", \"my neck's wider than a pillow\", \"I can't turn my neck\", \"type this type this\", \"no one asks, hey how's the juggernaut?\", \"smash smash smash\", \"you think this is a game?\", \"was I in deadpool 2\", \"yeah it's the juggernaut, bricks!\", \"I'm a dumb guy, my world view is limited\", \"this road never ends amirite\", \"this is a long street\", \"why does this road have walls\", \"most intense jog ever\", \"damn I hate cardio\", \"damn helmet no peripheral vision\", \"I don't remember why I hate walls so much\"];\n    this.shorterSentences = [\"type this type this\", \"damn I hate cardio\", \"smash that wall\", \"smash smash smash\", \"slow motion for me\", \"what a great jog\", \"this is a long street\", \"yeah it's the juggernaut!\", \"welcome to smashville\"];\n    this.successfulSentences = [\"GuEsS sMaShInG's BaCk oN tHe MeNu bOyS!\", \"YOU'RE A TYPING BEAST\", \"How are you so good at this =O\", \"whoa you type really fast!\", \"Teach me your typing ways\", \"READING IS FUN\", \"LoOk aT yOu gO!!\", \"I could type too if my fingers weren't so MEATY\", \"UGGHHHH I LIKE IT LIKE THAT, SLOW MOTION FO ME~~\"];\n  }\n\n  _createClass(Phrases, [{\n    key: \"samplePositivity\",\n    value: function samplePositivity() {\n      return this.successfulSentences[Math.floor(Math.random() * this.successfulSentences.length)];\n    }\n  }, {\n    key: \"sample\",\n    value: function sample(level) {\n      if (level === 1) {\n        return this.shorterSentences[Math.floor(Math.random() * this.shorterSentences.length)];\n      }\n\n      return this.sentences[Math.floor(Math.random() * this.sentences.length)];\n    }\n  }]);\n\n  return Phrases;\n}();\n\n\n\n//# sourceURL=webpack:///./src/phrases.js?");

/***/ }),

/***/ "./src/wall.js":
/*!*********************!*\
  !*** ./src/wall.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Wall; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar WALL_SPRITESHEET_COORDINATE = {};\nvar WALL_CONSTANTS = {};\n\nvar Wall =\n/*#__PURE__*/\nfunction () {\n  function Wall(ctx, props) {\n    _classCallCheck(this, Wall);\n\n    this.x = 650; // this.y = props.y;\n\n    this.speed = 1.0;\n    this.ctx = ctx;\n    this.brickWall = new Image();\n    this.brickWall.src = './assets/spritesheets/Brick_Wall_Spritesheet.png';\n    this.otherWalls = new Image();\n    this.otherWalls.src = './assets/spritesheets/Other_Walls_Spritesheet.png';\n    this.fourthWall = new Image();\n    this.fourthWall.src = './assets/spritesheets/4th_wall_spritesheet.png';\n    this.bricksBreaking = new Audio('./assets/sounds/bricks_breaking.mp3');\n    this.bricksBreaking.volume = 0.5;\n    this.moveWall = this.moveWall.bind(this);\n    this.drawWall = this.drawWall.bind(this);\n    this.wallRandomizer = this.wallRandomizer.bind(this);\n  }\n\n  _createClass(Wall, [{\n    key: \"wallRandomizer\",\n    value: function wallRandomizer(level) {\n      if (level >= 4) {\n        var moreWallTypes = [\"brick\", \"berlinWall\", \"greatWall\", \"deadpool\", \"simpsons\"];\n        return moreWallTypes[Math.floor(Math.random() * moreWallTypes.length)];\n      }\n\n      var wallTypes = [\"brick\", \"berlinWall\", \"greatWall\"];\n      return wallTypes[Math.floor(Math.random() * wallTypes.length)];\n    }\n  }, {\n    key: \"moveWall\",\n    value: function moveWall() {\n      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.0;\n      this.x -= speed;\n    }\n  }, {\n    key: \"drawWall\",\n    value: function drawWall(wallType) {\n      // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)\n      if (wallType === \"brick\") {\n        if (this.x <= -250) this.x = 650; // console.log(this.x);\n\n        if (this.x <= 180) {\n          if (this.x > 165) this.bricksBreaking.play();\n          this.ctx.drawImage(this.brickWall, 500, 0, 700, 700, this.x, 125, 200, 200);\n        } else {\n          this.ctx.drawImage(this.brickWall, 0, 0, 500, 600, this.x, 125, 200, 200);\n        }\n      }\n\n      if (wallType === \"berlinWall\") {\n        if (this.x <= -250) this.x = 650;\n\n        if (this.x <= 180) {\n          if (this.x > 165) this.bricksBreaking.play();\n          this.ctx.drawImage(this.otherWalls, 300, 0, 430, 300, this.x, 150, 250, 250);\n        } else {\n          this.ctx.drawImage(this.otherWalls, 0, 0, 300, 300, this.x, 125, 300, 300);\n        }\n      }\n\n      if (wallType === \"greatWall\") {\n        if (this.x <= -250) this.x = 650;\n\n        if (this.x <= 180) {\n          if (this.x > 165) this.bricksBreaking.play(); // Genghis Khan\n\n          this.ctx.drawImage(this.otherWalls, 350, 300, 430, 300, this.x, 95, 350, 300);\n        } else {\n          // Great Wall of China\n          this.ctx.drawImage(this.otherWalls, 0, 300, 300, 300, this.x, 95, 300, 300);\n        }\n      }\n\n      if (wallType === \"deadpool\") {\n        if (this.x <= -250) this.x = 650; // console.log(this.x);\n\n        if (this.x <= 180) {\n          if (this.x > 165) this.bricksBreaking.play();\n          this.ctx.drawImage(this.fourthWall, 450, 280, 600, 450, this.x, 150, 300, 207);\n        } else {\n          this.ctx.drawImage(this.fourthWall, 0, 400, 430, 300, this.x, 180, 300, 207);\n        }\n      }\n\n      if (wallType === \"simpsons\") {\n        if (this.x <= -250) this.x = 650; // console.log(this.x);\n\n        if (this.x <= 180) {\n          if (this.x > 165) this.bricksBreaking.play(); // Simpsons couch gag\n\n          this.ctx.drawImage(this.fourthWall, 410, 0, 410, 300, this.x, 150, 300, 207);\n        } else {\n          // Simpsons staring\n          this.ctx.drawImage(this.fourthWall, 0, 0, 410, 300, this.x, 150, 300, 207);\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render(speed, wallType) {\n      this.moveWall(speed);\n      this.drawWall(wallType);\n    }\n  }]);\n\n  return Wall;\n}();\n\n\n\n//# sourceURL=webpack:///./src/wall.js?");

/***/ })

/******/ });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Background; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Background =\n/*#__PURE__*/\nfunction () {\n  function Background(ctx, dimensions) {\n    var _this = this;\n\n    _classCallCheck(this, Background);\n\n    this.ctx = ctx;\n    this.canvasDimensions = dimensions;\n    this.imgBackground = new Image();\n    this.imgBackground.src = \"../assets/images/X-Men_background_image.png\";\n    this.imgBackground.id = \"imgBackground\";\n\n    this.imgBackground.onload = function () {\n      _this.init();\n    };\n\n    this.drawBackground = this.drawBackground.bind(this); // debugger; \n  }\n\n  _createClass(Background, [{\n    key: \"drawBackground\",\n    value: function drawBackground() {\n      // debugger;\n      this.ctx.drawImage(this.imgBackground, 0, 0);\n    }\n  }, {\n    key: \"step\",\n    value: function step() {\n      // debugger; \n      // this.frameCount++;\n      // if (this.frameCount < 10) {\n      //   window.requestAnimationFrame(this.step);\n      //   return;\n      // }\n      // this.frameCount = 0;\n      // this.ctx.clearRect(0, 0, this.canvasDimensions.width, this.canvasDimensions.height);\n      // // this.ctx.drawImage(this.img, 0, 430, 500, 395, 0, 0, 500 * 0.2, 410 * 0.2);\n      // debugger; \n      this.drawBackground(); // this.currentLoopIndex++;\n      // if (this.currentLoopIndex >= this.cycleLoop.length) {\n      //   this.currentLoopIndex = 0;\n      // }\n\n      window.requestAnimationFrame(this.step);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.drawBackground();\n    }\n  }]);\n\n  return Background;\n}();\n\n\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return JuggernautGame; });\n/* harmony import */ var _juggernaut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./juggernaut */ \"./src/juggernaut.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n // import spritesheetJuggernaut from \"../assets/spritesheets/Mobile - Marvel Avengers Alliance iOS - Juggernaut Classic.png\";\n// import yada from \"../assets/images/X-Men_background_image.png\";\n\nvar JuggernautGame =\n/*#__PURE__*/\nfunction () {\n  function JuggernautGame(canvas) {\n    _classCallCheck(this, JuggernautGame);\n\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.background = new _background__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, this.dimensions); // this.background = new Background(this.ctx);\n\n    this.juggernaut = new _juggernaut__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.dimensions); // this.registerEvents();\n    // this.restart();\n  }\n\n  _createClass(JuggernautGame, [{\n    key: \"render\",\n    value: function render() {\n      requestAnimationFrame(this.render);\n      this.background.render();\n    } // init() {\n    //   let canvasScale = 0.2;\n    //   const width = 500;\n    //   const height = 410;\n    //   const scaledWidth = canvasScale * width;\n    //   const scaledHeight = canvasScale * height;\n    //   // Two images for running\n    //   this.ctx.drawImage(this.img, 0, 430, width, 395, 0, 0, scaledWidth, scaledHeight);\n    //   this.ctx.drawImage(this.img, 930, 1150, width, 420, scaledWidth, 0, scaledWidth, scaledHeight);\n    //   // Image for punching\n    //   this.ctx.drawImage(this.img, 0, 0, width, height, scaledWidth * 2, 0, scaledWidth, scaledHeight);\n    //   // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)\n    // }\n    // play() {\n    //   this.running = true;\n    //   this.animate();\n    // }\n    // restart() {\n    //   this.running = false;\n    //   this.score = 0;\n    //   this.bird = new Juggernaut(this.dimensions);\n    //   this.level = new Level(this.dimensions);\n    //   this.animate();\n    // }\n    // registerEvents() {\n    //   this.boundClickHandler = this.click.bind(this);\n    //   this.ctx.canvas.addEventListener(\"mousedown\", this.boundClickHandler);\n    // }\n    // click(e) {\n    //   if (!this.running) {\n    //     this.play();\n    //   }\n    //   this.bird.flap();\n    // }\n    // gameOver() {\n    //   return (\n    //     this.level.collidesWith(this.bird.bounds()) || this.bird.outOfBounds(this.height)\n    //   );\n    // }\n    // this is the key method of gaming action\n    // animate tells the game to advance one bit\n    // the bird moves, the level moves\n    // everything is redrawn to the screen\n    // animate() {\n    //   //first we move and draw the level\n    //   this.level.animate(this.ctx);\n    //   //then we move and draw the bird\n    //   this.bird.animate(this.ctx);\n    //   //then we check to see if the game is over and let the player know\n    //   if (this.gameOver()) {\n    //     alert(this.score);\n    //     this.restart();\n    //   }\n    //   //we see if they have scored a point by passing a pipe\n    //   this.level.passedPipe(this.bird.bounds(), () => {\n    //     this.score += 1;\n    //     console.log(this.score);\n    //   });\n    //   //and draw the score\n    //   this.drawScore();\n    //   //if the game is NOT running, we do not animate the next frame\n    //   if (this.running) {\n    //     //This calls this function again, after around 1/60th of a second\n    //     requestAnimationFrame(this.animate.bind(this));\n    //   }\n    // }\n    // drawScore() {\n    //   //loc will be the location \n    //   const loc = { x: this.dimensions.width / 2, y: this.dimensions.height / 4 }\n    //   this.ctx.font = \"bold 50pt serif\";\n    //   this.ctx.fillStyle = \"white\";\n    //   this.ctx.fillText(this.score, loc.x, loc.y);\n    //   this.ctx.strokeStyle = \"black\";\n    //   this.ctx.lineWidth = 2;\n    //   this.ctx.strokeText(this.score, loc.x, loc.y);\n    // }\n\n  }]);\n\n  return JuggernautGame;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\nvar juggernaut = __webpack_require__(/*! ./juggernaut */ \"./src/juggernaut.js\");\n\n\nvar canvas = document.getElementById('juggernaut-game');\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/juggernaut.js":
/*!***************************!*\
  !*** ./src/juggernaut.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Juggernaut; });\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n // const CONSTANTS = {\n//   RUNNING_SPEED: 8,\n//   JUGGERNAUT_WIDTH: 40,\n//   JUGGERNAUT_HEIGHT: 30\n// };\n// export default class Juggernaut {\n//   constructor(dimensions) {\n//     this.dimensions = dimensions; \n//     this.x = this.dimensions.width / 3;\n//     this.y = this.dimensions.height / 2;\n//     this.vel = 0;\n//   }\n// }\n\nvar CONSTANTS = {\n  JUGGERNAUT_WIDTH: 530,\n  JUGGERNAUT_HEIGHT: 430,\n  FRAME_Y: 0,\n  CANVAS_X: 150,\n  CANVAS_Y: 150\n};\n\nvar Juggernaut =\n/*#__PURE__*/\nfunction () {\n  function Juggernaut(ctx, dimensions) {\n    var _this = this;\n\n    _classCallCheck(this, Juggernaut);\n\n    // this.x = this.dimensions.width / 3;\n    // this.y = this.dimensions.height / 2;\n    this.ctx = ctx; // this.imgBackground = new Image();\n    // this.imgBackground.src = \"../assets/images/X-Men_background_image.png\";\n    // this.imgBackground.id = \"imgBackground\";\n\n    this.imgBackground = new Image();\n    this.imgBackground.src = \"../assets/images/X-Men_background_image.png\";\n    this.canvasDimensions = dimensions;\n    this.img = new Image();\n    this.img.src = \"../assets/spritesheets/Juggernaut_Spritesheet_Simplified.png\";\n\n    this.img.onload = function () {\n      _this.init();\n    }; // this.cycleLoop = [0, 1, 0, 2];\n\n\n    this.cycleLoop = [0, 1];\n    this.currentLoopIndex = 0;\n    this.frameCount = 0;\n    this.step = this.step.bind(this);\n    this.drawJuggernaut = this.drawJuggernaut.bind(this);\n  }\n\n  _createClass(Juggernaut, [{\n    key: \"drawJuggernaut\",\n    value: function drawJuggernaut(frameX) {\n      // this.ctx.drawImage(this.imgBackground, 0, 0);\n      this.ctx.drawImage(this.img, frameX * 500, CONSTANTS.FRAME_Y * 410, 500, 410, CONSTANTS.CANVAS_X, CONSTANTS.CANVAS_Y, 100, 82);\n    }\n  }, {\n    key: \"drawGameState\",\n    value: function drawGameState() {}\n  }, {\n    key: \"step\",\n    value: function step() {\n      // debugger; \n      this.frameCount++;\n\n      if (this.frameCount < 10) {\n        window.requestAnimationFrame(this.step);\n        return;\n      }\n\n      this.frameCount = 0;\n      this.ctx.clearRect(0, 0, this.canvasDimensions.width, this.canvasDimensions.height);\n      this.ctx.drawImage(this.imgBackground, 0, 0);\n      this.drawJuggernaut(this.cycleLoop[this.currentLoopIndex]);\n      this.currentLoopIndex++;\n\n      if (this.currentLoopIndex >= this.cycleLoop.length) {\n        this.currentLoopIndex = 0;\n      }\n\n      window.requestAnimationFrame(this.step);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      window.requestAnimationFrame(this.step);\n    } // bounds() {\n    //   return {\n    //     left: this.x,\n    //     right: this.x + CONSTANTS.JUGGERNAUT_WIDTH,\n    //     top: this.y,\n    //     bottom: this.y + CONSTANTS.JUGGERNAUT_HEIGHT\n    //   };\n    // }\n    // outOfBounds() {\n    //   const aboveTheTop = this.y < 0;\n    //   const belowTheBottom = this.y + CONSTANTS.JUGGERNAUT_HEIGHT > this.dimensions.height;\n    //   return aboveTheTop || belowTheBottom;\n    // }\n\n  }]);\n\n  return Juggernaut;\n}();\n\n\n\n//# sourceURL=webpack:///./src/juggernaut.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CONSTANTS = {\n  PIPE_SPEED: 2,\n  GAP_HEIGHT: 150,\n  PIPE_WIDTH: 50,\n  EDGE_BUFFER: 50,\n  PIPE_SPACING: 220,\n  WARM_UP_SECONDS: 1\n};\n\nvar Level =\n/*#__PURE__*/\nfunction () {\n  function Level(dimensions) {\n    _classCallCheck(this, Level);\n\n    this.dimensions = dimensions;\n    var firstPipeDistance = this.dimensions.width + CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.PIPE_SPEED;\n    this.pipes = [this.randomPipe(firstPipeDistance), this.randomPipe(firstPipeDistance + CONSTANTS.PIPE_SPACING), this.randomPipe(firstPipeDistance + CONSTANTS.PIPE_SPACING * 2)];\n  }\n\n  _createClass(Level, [{\n    key: \"randomPipe\",\n    value: function randomPipe(x) {\n      var heightRange = this.dimensions.height - 2 * CONSTANTS.EDGE_BUFFER - CONSTANTS.GAP_HEIGHT;\n      var gapTop = Math.random() * heightRange + CONSTANTS.EDGE_BUFFER;\n      var pipe = {\n        topPipe: {\n          left: x,\n          right: CONSTANTS.PIPE_WIDTH + x,\n          top: 0,\n          bottom: gapTop\n        },\n        bottomPipe: {\n          left: x,\n          right: CONSTANTS.PIPE_WIDTH + x,\n          top: gapTop + CONSTANTS.GAP_HEIGHT,\n          bottom: this.dimensions.height\n        },\n        passed: false\n      };\n      return pipe;\n    }\n  }, {\n    key: \"animate\",\n    value: function animate(ctx) {\n      this.drawBackground(ctx);\n      this.movePipes();\n      this.drawPipes(ctx);\n    }\n  }, {\n    key: \"drawBackground\",\n    value: function drawBackground(ctx) {\n      ctx.fillStyle = \"skyblue\";\n      ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n    }\n  }, {\n    key: \"passedPipe\",\n    value: function passedPipe(bird, callback) {\n      this.eachPipe(function (pipe) {\n        if (pipe.topPipe.right < bird.left) {\n          if (!pipe.passed) {\n            pipe.passed = true;\n            callback();\n          }\n        }\n      });\n    }\n  }, {\n    key: \"movePipes\",\n    value: function movePipes() {\n      this.eachPipe(function (pipe) {\n        pipe.topPipe.left -= CONSTANTS.PIPE_SPEED;\n        pipe.topPipe.right -= CONSTANTS.PIPE_SPEED;\n        pipe.bottomPipe.left -= CONSTANTS.PIPE_SPEED;\n        pipe.bottomPipe.right -= CONSTANTS.PIPE_SPEED;\n      }); //if a pipe has left the screen add a new one to the end\n\n      if (this.pipes[0].topPipe.right <= 0) {\n        this.pipes.shift();\n        var newX = this.pipes[1].topPipe.left + CONSTANTS.PIPE_SPACING;\n        this.pipes.push(this.randomPipe(newX));\n      }\n    }\n  }, {\n    key: \"drawPipes\",\n    value: function drawPipes(ctx) {\n      this.eachPipe(function (pipe) {\n        ctx.fillStyle = \"green\"; //draw top pipe\n\n        ctx.fillRect(pipe.topPipe.left, pipe.topPipe.top, CONSTANTS.PIPE_WIDTH, pipe.topPipe.bottom - pipe.topPipe.top); //draw bottom pipe\n\n        ctx.fillRect(pipe.bottomPipe.left, pipe.bottomPipe.top, CONSTANTS.PIPE_WIDTH, pipe.bottomPipe.bottom - pipe.bottomPipe.top);\n      });\n    }\n  }, {\n    key: \"eachPipe\",\n    value: function eachPipe(callback) {\n      this.pipes.forEach(callback.bind(this));\n    } //This method shall return true if the bird passed in is currently\n    //colliding with any pipe.\n\n  }, {\n    key: \"collidesWith\",\n    value: function collidesWith(bird) {\n      //this function returns true if the the rectangles overlap\n      var _overlap = function _overlap(rect1, rect2) {\n        //check that they don't overlap in the x axis\n        if (rect1.left > rect2.right || rect1.right < rect2.left) {\n          return false;\n        } //check that they don't overlap in the y axis\n\n\n        if (rect1.top > rect2.bottom || rect1.bottom < rect2.top) {\n          return false;\n        }\n\n        return true;\n      };\n\n      var collision = false;\n      this.eachPipe(function (pipe) {\n        if ( //check if the bird is overlapping (colliding) with either pipe\n        _overlap(pipe.topPipe, bird) || _overlap(pipe.bottomPipe, bird)) {\n          collision = true;\n        }\n      });\n      return collision;\n    }\n  }]);\n\n  return Level;\n}();\n\n\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ })

/******/ });
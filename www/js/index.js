/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	const toolkit = __webpack_require__(1);
	
	class Grid {
	    constructor(container) {
	        this._$container = container;
	    }
	
	    build() {
	        const matrix = toolkit.makeMatrix();
	
	        const $cells = matrix.map(rowVals => rowVals.map(
	            cellVal => $("<span>").text(cellVal)
	        ));
	
	        const $divArray = $cells.map($spanArray =>
	            $("<div>").addClass("row").append($spanArray)
	        );
	
	        this._$container.append($divArray);
	    }
	}
	
	new Grid($("#container")).build();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	const matrixToolkit = {
	  /*
	     * 创建行
	     */
	  makeRow(v = 0) {
	    return new Array(9).fill(v);
	  },
	
	  /*
	     * 创建九宫格数组
	     */
	  makeMatrix(v = 0) {
	    return Array.from({ length: 9 }, () => this.makeRow(v));
	  },
	
	  /*
	     * 洗牌算法
	     */
	  shuffleRow(array) {
	    const randomAry = Array.from(
	      { length: 9 },
	      (_, idx) => ({ random: Math.random(), idx })
	    );
	
	    return randomAry.sort(({ random: r1 }, { random: r2 }) => {
	      if (r1 == r2) return 0;
	      return (r1 > r2) ? 1 : -1;
	    })
	      .map(({ _, idx }) => array[idx]);
	  },
	};
	
	module.exports = matrixToolkit;


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (() => {

eval("const form = document.querySelector('form');\nconst input = document.querySelector('input');\nconst itemDiv = document.querySelector('.list');\nconst editDiv = document.querySelector('.edit');\nconst editEl = document.querySelector('.fa-edit');\nconst deleteEl = document.querySelector('.fa-trash-alt');\nconst temp = [];\nform.addEventListener('submit', addItem);\nfunction addItem(e) {\n    e.preventDefault();\n    const newItem = input.value;\n    let items = [];\n    if (localStorage.getItem('items') === null) {\n        items = [];\n    }\n    else {\n        items = JSON.parse(localStorage.getItem('items'));\n    }\n    items.push(newItem);\n    localStorage.setItem('items', JSON.stringify(items));\n    input.value = '';\n    console.log(items);\n    addToHtml(newItem);\n}\nfunction editItem(e) {\n    e.preventDefault();\n}\nfunction addToHtml(input) {\n    // items div\n    const newDiv = document.createElement('div');\n    newDiv.classList.add('item');\n    const items = document.createElement('p');\n    items.textContent = input;\n    // icons div\n    const icons = document.createElement('div');\n    icons.classList.add('edit');\n    const edit = document.createElement('i');\n    edit.classList.add('fas', 'fa-edit');\n    const deleteIcon = document.createElement('i');\n    deleteIcon.classList.add('fas', 'fa-trash-alt');\n    newDiv.appendChild(items);\n    icons.appendChild(edit);\n    icons.appendChild(deleteIcon);\n    newDiv.appendChild(icons);\n    itemDiv.appendChild(newDiv);\n}\nfunction getItems() {\n    const items = localStorage.getItem('items');\n    // Ajout des items 1 par 1 dans le dom au chargement de la page\n    if (items !== null) {\n        const itemArray = JSON.parse(items);\n        itemArray.forEach(function (item) {\n            addToHtml(item);\n        });\n    }\n}\ngetItems();\n\n\n//# sourceURL=webpack://grocery-list/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"]();
/******/ 	
/******/ })()
;
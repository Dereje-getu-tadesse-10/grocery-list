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

eval("const form = document.querySelector('form');\nconst input = document.querySelector('input');\nconst itemDiv = document.querySelector('.list');\nconst editDiv = document.querySelector('.edit');\nconst editEl = document.querySelectorAll('.fa-edit');\nconst deleteEl = document.querySelectorAll('.fa-trash-alt');\nconst temp = [];\nconst tempu = [];\nform.addEventListener('submit', addItem);\nfunction addItem(e) {\n    e.preventDefault();\n    const newItem = input.value;\n    let items = [];\n    if (localStorage.getItem('items') === null) {\n        items = [];\n    }\n    else {\n        items = JSON.parse(localStorage.getItem('items'));\n    }\n    items.push(newItem);\n    localStorage.setItem('items', JSON.stringify(items));\n    input.value = '';\n    addToHtml(newItem);\n}\nfunction addToHtml(input) {\n    const newDiv = document.createElement('div');\n    itemsCreated(newDiv, input);\n    icons(newDiv);\n    itemDiv.appendChild(newDiv);\n}\n// function create item\nfunction itemsCreated(div, input) {\n    div.classList.add('item');\n    const items = document.createElement('p');\n    items.textContent = input;\n    div.appendChild(items);\n}\n// function create icons\nfunction icons(div) {\n    const icons = document.createElement('div');\n    icons.classList.add('edit');\n    const edit = document.createElement('i');\n    edit.classList.add('fas', 'fa-edit');\n    const deleteIcon = document.createElement('i');\n    deleteIcon.classList.add('fas', 'fa-trash-alt');\n    div.appendChild(icons);\n    icons.appendChild(edit);\n    icons.appendChild(deleteIcon);\n    const editItems = document.querySelectorAll('.fa-edit');\n    editItems.forEach((editItem) => {\n        // console.log(editItem);\n        editItem.addEventListener('click', () => {\n            const edit = editItem.parentElement.parentElement.childNodes[0].textContent;\n            editItem.parentElement.parentElement.childNodes[0].textContent = edit;\n            // modification du text avec contenteditable\n            editItem.parentElement.parentElement.childNodes[0].contentEditable = 'true';\n            editItem.parentElement.parentElement.childNodes[0].focus();\n            editItem.parentElement.parentElement.childNodes[0].addEventListener('blur', () => {\n                editItem.parentElement.parentElement.childNodes[0].contentEditable = 'false';\n            });\n            editItem.parentElement.parentElement.childNodes[0].addEventListener('keypress', (e) => {\n                if (e.key === 'Enter') {\n                    editItem.parentElement.parentElement.childNodes[0].contentEditable = 'false';\n                    const items = localStorage.getItem('items');\n                    const itemsArray = JSON.parse(items);\n                    itemsArray.forEach(function (item) {\n                        if (item === edit) {\n                            for (let i = 0; i < itemsArray.length; i++) {\n                                if (itemsArray[i] === edit) {\n                                    itemsArray[i] = editItem.parentElement.parentElement.childNodes[0].textContent;\n                                    localStorage.setItem('items', JSON.stringify(itemsArray));\n                                }\n                            }\n                        }\n                    });\n                }\n            });\n            // console.log(editItem.parentElement.parentElement.childNodes[0]);\n        });\n    });\n}\nfunction getItems() {\n    const items = localStorage.getItem('items');\n    if (items !== null) {\n        const itemsArray = JSON.parse(items);\n        itemsArray.forEach(function (item) {\n            addToHtml(item);\n        });\n    }\n}\ngetItems();\n\n\n//# sourceURL=webpack://grocery-list/./src/app.ts?");

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
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scroll */ "./src/js/modules/scroll.js");












window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider', '.feedback-slider-item', 'horizontal', '.main-next-btn', '.main-prev-btn');
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider', '.main-slider-item', 'vertical');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  Object(_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price');
  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])('.portfolio-menu', '.portfolio-wrapper', '.portfolio-no', 'active', ['all', 'lovers', 'chef', 'girl', 'guy', 'grandmother', 'granddad']);
  Object(_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])('.sizes-block');
  Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])('.accordion-heading', 'active-header', 'accordion-block-active');
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])('.burger', '.burger-menu');
  Object(_modules_scroll__WEBPACK_IMPORTED_MODULE_11__["default"])();
});

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function accordion(headersSelector, activeHeaderClass, activeBlockClass) {
  const headers = document.querySelectorAll(headersSelector);

  function hideAllItems() {
    for (const header of headers) {
      header.classList.remove(activeHeaderClass);
      header.nextElementSibling.classList.remove(activeBlockClass, 'animated', 'fadeInDown');
    }
  }

  function showItem(itemHeader) {
    itemHeader.classList.add(activeHeaderClass);
    itemHeader.nextElementSibling.classList.add(activeBlockClass, 'animated', 'fadeInDown');
  }

  function handleItems() {
    for (const header of headers) {
      header.addEventListener('click', function (evt) {
        if (evt.target) {
          evt.preventDefault();
        }

        hideAllItems();
        showItem(this);
      });
    }
  }

  handleItems();
}

/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function burger(burgerSelector, menuSelector) {
  const burger = document.querySelector(burgerSelector);
  const menu = document.querySelector(menuSelector);
  menu.style.display = 'none';
  menu.classList.add('animated', 'fadeInDown');
  burger.addEventListener('click', evt => {
    if (evt.target) {
      evt.preventDefault();
    } //window.innerWidth is neede instead of
    //document.documentElement.clientWidth because of markup


    if (menu.style.display == 'none' && window.innerWidth <= 990) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 990) {
      menu.style.display = 'none';
    }
  });
  menu.addEventListener('click', evt => {
    if (evt.target && evt.target.matches('a')) {
      menu.style.display = 'none';
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc(sizeSelector, materialSelector, extraSelector, promocodeSelector, resultSelector) {
  const sizeElem = document.querySelector(sizeSelector);
  const materialElem = document.querySelector(materialSelector);
  const extraElem = document.querySelector(extraSelector);
  const promocodeElem = document.querySelector(promocodeSelector);
  const resultElem = document.querySelector(resultSelector);
  let sum = 0;
  sizeElem.addEventListener('change', getResult);
  materialElem.addEventListener('change', getResult);
  extraElem.addEventListener('change', getResult);
  promocodeElem.addEventListener('input', getResult);

  function getResult() {
    if (sizeElem.value == '' || materialElem.value == '') {
      resultElem.textContent = 'Пожалуйста выберите размер и материал для расчета';
      return;
    }

    sum = +sizeElem.value * +materialElem.value + +extraElem.value;

    if (promocodeElem.value === 'IWANTPOPART') {
      sum *= 0.7;
    }

    resultElem.textContent = sum;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function checkTextInputs(selector) {
  const inputs = document.querySelectorAll(selector);

  for (const input of inputs) {
    input.addEventListener('keypress', evt => {
      if (evt.key.match(/[^а-яё 0-9]/ig)) {
        evt.preventDefault();
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function filter(menuListSelector, portfolioWrapperSelector, noResultsSelector, activeClass, classesForFilter) {
  const menu = document.querySelector(menuListSelector);
  const portfolio = document.querySelector(portfolioWrapperSelector);
  const noResultsElem = document.querySelector(noResultsSelector);

  function hideAllItems() {
    for (const item of menu.querySelectorAll('li')) {
      item.classList.remove(activeClass);
    }

    for (const item of portfolio.querySelectorAll('div')) {
      item.style.display = 'none';
      item.classList.remove('animated', 'fadeIn');
    }
  }

  function handleMenuItem(selector) {
    const menuItem = menu.querySelector(selector);
    const worksToShow = portfolio.querySelectorAll(selector);
    menuItem.addEventListener('click', evt => {
      if (evt.target) {
        evt.preventDefault();
      }

      hideAllItems();
      menuItem.classList.add(activeClass);

      if (worksToShow.length > 0) {
        for (const work of worksToShow) {
          work.style.display = '';
          work.classList.add('animated', 'fadeIn');
        }

        noResultsElem.classList.remove('animated', 'fadeInUp');
        noResultsElem.style.display = 'none';
      } else {
        noResultsElem.classList.add('animated', 'fadeInUp');
        noResultsElem.style.display = 'block';
      }
    });
  }

  for (const className of classesForFilter) {
    handleMenuItem(`.${className}`);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/js/modules/services.js");


function forms() {
  const formsList = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const formWithFileSelector = '[data-form-with-file]';
  const inputsWithFile = document.querySelectorAll('[data-form-with-file] input[type="file"]');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Мы с Вами скоро свяжемся!',
    fail: 'Ошибка отправки данных...',
    okImg: 'assets/img/ok.png',
    failImg: 'assets/img/fail.png',
    spinnerImg: 'assets/img/spinner.gif'
  };
  let currentMessage = '';
  let currentImg = '';
  let submitUrl = '';

  function clearInputs() {
    for (const input of inputs) {
      input.value = '';
    }

    for (const fileInput of inputsWithFile) {
      fileInput.previousElementSibling.textContent = 'Файл не выбран';
    }
  }

  function initForms() {
    for (const fileInput of inputsWithFile) {
      fileInput.addEventListener('input', () => {
        let fileName = fileInput.files[0].name;

        if (fileName.length > 10) {
          let [pureName, extension] = fileName.split('.');
          pureName = pureName.slice(0, 6) + '..';
          fileName = `${pureName}.${extension}`;
        }

        fileInput.previousElementSibling.textContent = fileName;
      });
    }

    for (const item of formsList) {
      item.addEventListener('submit', evt => {
        evt.preventDefault();
        const formData = new FormData(item);
        const messageBox = document.createElement('div');
        const statusText = document.createElement('div');
        const statusImg = document.createElement('img');
        messageBox.classList.add('status');
        statusText.textContent = message.loading;
        statusImg.setAttribute('src', message.spinnerImg);
        messageBox.classList.add('animated', 'fadeInUp');
        messageBox.append(statusImg);
        messageBox.append(statusText);
        item.style.display = 'none';
        item.parentElement.append(messageBox);

        if (item.matches(formWithFileSelector)) {
          submitUrl = './assets/question.php';
        } else {
          submitUrl = './assets/server.php';
        }

        if (item.contains(document.querySelector('.calc-price'))) {
          formData.set('price', document.querySelector('.calc-price').textContent);
        }

        Object(_services__WEBPACK_IMPORTED_MODULE_0__["sendForm"])(submitUrl, formData).then(response => {
          currentMessage = message.success;
          currentImg = message.okImg;
          console.log(response);
          return response;
        }).catch(error => {
          currentMessage = `${message.fail}: ${error}`;
          currentImg = message.failImg;
        }).finally(() => {
          statusText.textContent = currentMessage;
          statusImg.setAttribute('src', currentImg);
          setTimeout(() => {
            messageBox.remove();
            clearInputs();
            item.classList.add('animated', 'fadeInUp');
            item.style.display = '';
          }, 5000);
        });
      });
    }
  }

  initForms(); // handleDigitalInputs('input[name="user_phone"]');    
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function mask(selector) {
  let inputs = document.querySelectorAll(selector);

  for (const input of inputs) {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  }

  function setCursorPosition(pos, elem) {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  function createMask(evt) {
    let matrix = '+7 (___) ___ __ __';
    let i = 0;
    let def = matrix.replace(/\D/g, '');
    let val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (evt.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function modals() {
  let isShown = false;
  const allModalsSelector = '[data-modal]';

  function runModal(modalSelector, triggerSelector, closeSelector, delTrigger = false) {
    const modal = document.querySelector(modalSelector);
    const close = modal.querySelector(closeSelector);
    const triggers = document.querySelectorAll(triggerSelector);
    document.querySelectorAll(allModalsSelector).forEach(item => {
      item.classList.add('animated', 'fadeIn');
    });

    for (const trigger of triggers) {
      trigger.addEventListener('click', evt => {
        if (evt.target) {
          evt.preventDefault();
        }

        hideModal(allModalsSelector);
        showModal(modalSelector);

        if (delTrigger) {
          trigger.remove();
        }
      });
    }

    modal.addEventListener('click', evt => {
      if (evt.target === modal && !modal.dataset.closeOnlyWithButton) {
        hideModal(modalSelector);
      }
    });
    close.addEventListener('click', evt => {
      if (evt.target) {
        evt.preventDefault();
      }

      hideModal(modalSelector);
    });
    document.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        hideModal(modalSelector);
      }
    });
  }

  function showModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    const scrollWidth = getScrollWidth();
    isShown = true;
    modal.style.display = 'block'; // document.body.style.overflow = 'hidden';

    document.body.classList.add('modal-open');
    document.body.style.marginRight = `${scrollWidth}px`;
  }

  function hideModal(modalSelector) {
    const modals = document.querySelectorAll(modalSelector);

    for (const modal of modals) {
      modal.style.display = '';
    } // document.body.style.overflow = '';


    document.body.classList.remove('modal-open');
    document.body.style.marginRight = ``;
  }

  function showModalWithDelay(modalSelector, time) {
    setTimeout(() => {
      if (!isShown) {
        hideModal(allModalsSelector);
        showModal(modalSelector);
      }
    }, time);
  }

  function getScrollWidth() {
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  function showModalAfterScroll(triggerSelector) {
    window.addEventListener('scroll', function scrollHandler() {
      if (isShown) {
        window.removeEventListener('scroll', scrollHandler);
      }

      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom; // if user scrolled enough (< 50px to the end)

      if (!isShown && windowRelativeBottom < document.documentElement.clientHeight + 50) {
        document.querySelector(triggerSelector).click();
        window.removeEventListener('scroll', scrollHandler);
      }
    });
  }

  runModal('.popup-design', '.button-design', '.popup-close');
  runModal('.popup-consultation', '.button-consultation', '.popup-close');
  runModal('.popup-gift', '.fixed-gift', '.popup-close', true);
  showModalAfterScroll('.fixed-gift'); // showModalWithDelay('.popup-consultation', 60000);
}

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function pictureSize(selector) {
  const imgBlocks = document.querySelectorAll(selector);

  function showImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.split('.').join('-1.');

    for (const item of block.querySelectorAll('p:not(.sizes-hit)')) {
      item.style.display = 'none';
    }
  }

  function hideImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.split('-1.').join('.');

    for (const item of block.querySelectorAll('p:not(.sizes-hit)')) {
      item.style.display = '';
    }
  }

  for (const block of imgBlocks) {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function scroll() {
  const smoothLinks = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      const id = smoothLink.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  ;
}

/* harmony default export */ __webpack_exports__["default"] = (scroll);

/***/ }),

/***/ "./src/js/modules/services.js":
/*!************************************!*\
  !*** ./src/js/modules/services.js ***!
  \************************************/
/*! exports provided: sendForm, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendForm", function() { return sendForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
async function sendForm(url, data) {
  // let object = {};
  // data.forEach((value, key) => object[key] = value);
  // let json = JSON.stringify(object); 
  // console.log(json);
  const response = await fetch(url, {
    method: 'POST',
    // headers: {
    //     'Content-Type': 'application/json;charset=utf-8'
    // },           
    body: data
  });

  if (response.ok) {
    return await response.text();
  } else {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  }
}
async function getResource(url) {
  const response = await fetch(url);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  }
}

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/js/modules/services.js");


function showMoreStyles(triggerSelector, wrapperSelector) {
  const trigger = document.querySelector(triggerSelector);
  const wrapper = document.querySelector(wrapperSelector);

  function showMoreCards(url) {
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])(url).then(res => {
      for (const {
        src,
        title,
        link
      } of res) {
        const card = document.createElement('div');
        card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        card.innerHTML = `
                        <div class="styles-block">
                            <img src=${src} alt=${title}>
                            <h4>${title}</h4>
                            <a href="${link}">Подробнее</a>
                        </div>
                    `;
        wrapper.append(card);
      }

      trigger.remove();
    }).catch(err => {
      console.log(err);
      const errMessage = document.createElement('div');
      errMessage.classList.add('animated', 'fadeInUp', 'status');
      errMessage.textContent = `Загрузка данных с сервера не удалась. Ошибка: ${err}`;
      wrapper.append(errMessage);
    });
  }

  trigger.addEventListener('click', evt => {
    if (evt.target) {
      evt.preventDefault();
    }

    showMoreCards('http://localhost:3000/styles');
  });
}

/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider(sliderSelector, slidesSelector, direction, nextSelector, prevSelector) {
  const slider = document.querySelector(sliderSelector);
  const slides = slider.querySelectorAll(slidesSelector);
  let currentIndex = 0;
  let intervalId;
  initSlider();

  function initSlider() {
    slider.parentElement.style.overflow = 'hidden';

    for (const item of slides) {
      item.classList.add('animated');
    }

    hideAllSlides();
    showSlide(currentIndex);

    try {
      const next = slider.querySelector(nextSelector);
      const prev = slider.querySelector(prevSelector);
      next.addEventListener('click', evt => {
        if (evt.target) {
          evt.preventDefault();
        }

        showNext();
      });
      prev.addEventListener('click', evt => {
        if (evt.target) {
          evt.preventDefault();
        }

        showPrev();
      });
    } catch (err) {
      console.log(err);
    }

    intervalId = setInterval(showNext, 3000);
    slider.addEventListener('mouseover', () => {
      clearInterval(intervalId);
    });
    slider.addEventListener('mouseout', () => {
      intervalId = setInterval(showNext, 3000);
    });
  }

  function showSlide(index) {
    slides[index].style.display = 'block';
  }

  function hideAllSlides() {
    for (const item of slides) {
      item.style.display = 'none';

      if (direction === 'vertical') {
        item.classList.remove('fadeInUp');
        item.classList.remove('fadeInDown');
      } else {
        item.classList.remove('fadeInRight');
        item.classList.remove('fadeInLeft');
      }
    }
  }

  function showNext() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }

    hideAllSlides();

    if (direction === 'vertical') {
      slides[currentIndex].classList.add('fadeInUp');
    } else {
      slides[currentIndex].classList.add('fadeInRight');
    }

    showSlide(currentIndex);
  }

  function showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1;
    }

    hideAllSlides();

    if (direction === 'vertical') {
      slides[currentIndex].classList.add('fadeInDown');
    } else {
      slides[currentIndex].classList.add('fadeInRight');
    }

    showSlide(currentIndex);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
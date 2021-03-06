import modals from './modules/modal';
import slider from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scroll from './modules/scroll';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    modals();
    slider('.feedback-slider', '.feedback-slider-item', 'horizontal', '.main-next-btn', '.main-prev-btn');
    slider('.main-slider', '.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter('.portfolio-menu', '.portfolio-wrapper', '.portfolio-no', 'active', ['all', 'lovers', 'chef', 'girl', 'guy', 'grandmother', 'granddad']);
    pictureSize('.sizes-block');
    accordion('.accordion-heading', 'active-header', 'accordion-block-active');
    burger('.burger', '.burger-menu');
    scroll();
    drop('.file_upload');
});
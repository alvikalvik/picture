import modals from './modules/modal';
import slider from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    modals();
    slider('.feedback-slider', '.feedback-slider-item', 'horizontal', '.main-next-btn', '.main-prev-btn');
    slider('.main-slider', '.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
});
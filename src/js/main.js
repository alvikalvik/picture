import modals from './modules/modal';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    modals();
    slider('.feedback-slider', '.feedback-slider-item', 'horizontal', '.main-next-btn', '.main-prev-btn');
    slider('.main-slider', '.main-slider-item', 'vertical');
});
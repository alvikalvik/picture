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

            next.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }
                showNext();
            });
            prev.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }
                showPrev();
            });
        } catch(err) {
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
        if (currentIndex < (slides.length - 1)) {  
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

export default slider;
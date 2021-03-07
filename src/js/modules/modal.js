function modals() {
    let isShown = false;
    const allModalsSelector = '[data-modal]'; 

    function runModal(modalSelector, triggerSelector, closeSelector, delTrigger = false) {
        const modal = document.querySelector(modalSelector);
        const close = modal.querySelector(closeSelector);
        const triggers = document.querySelectorAll(triggerSelector); 
        
        document.querySelectorAll(allModalsSelector).forEach( (item) => {
            item.classList.add('animated', 'fadeIn');
        });

        for (const trigger of triggers) {
            trigger.addEventListener('click', (evt) => {
                if(evt.target) {
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
            if(evt.target === modal && !modal.dataset.closeOnlyWithButton) {
                hideModal(modalSelector);
            }
        });

        close.addEventListener('click', (evt) => {
            if(evt.target) {
                evt.preventDefault();
            }

            hideModal(modalSelector);                
        });

        document.addEventListener('keydown', (evt) => {            
            if (evt.code === 'Escape') {
                hideModal(modalSelector);
            }
          });
        
    }

    function showModal(modalSelector) {
        const modal = document.querySelector(modalSelector);
        const scrollWidth = getScrollWidth();

        isShown = true;                

        modal.style.display = 'block';
        // document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');
        document.body.style.marginRight = `${scrollWidth}px`;        
    }
    function hideModal(modalSelector) {
        const modals = document.querySelectorAll(modalSelector);

        for (const modal of modals) {
            modal.style.display = '';            
        }      
        // document.body.style.overflow = '';
        document.body.classList.remove('modal-open');
        document.body.style.marginRight = ``;  
    }

    function showModalWithDelay(modalSelector, time) {
        setTimeout( () => {            
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

            let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

            // if user scrolled enough (< 50px to the end)
            if (!isShown && (windowRelativeBottom < document.documentElement.clientHeight + 50)) {
                document.querySelector(triggerSelector).click();
                window.removeEventListener('scroll', scrollHandler);
            }
        });        
    }

    runModal('.popup-design', '.button-design', '.popup-close');
    runModal('.popup-consultation', '.button-consultation', '.popup-close');
    runModal('.popup-gift', '.fixed-gift', '.popup-close', true);
    showModalAfterScroll('.fixed-gift');
    

    // showModalWithDelay('.popup-consultation', 60000);
}

export default modals;
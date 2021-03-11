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
            header.addEventListener('click', function(evt) {
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

export default accordion;
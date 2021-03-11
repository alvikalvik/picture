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

        menuItem.addEventListener('click', (evt) => {
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

export default filter;
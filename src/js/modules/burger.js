function burger(burgerSelector, menuSelector) {
    const burger = document.querySelector(burgerSelector);
    const menu = document.querySelector(menuSelector);

    menu.style.display = 'none';
    menu.classList.add('animated', 'fadeInDown');

    burger.addEventListener('click', (evt) => {
        if (evt.target) {
            evt.preventDefault();
        }

        //window.innerWidth is neede instead of
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

    menu.addEventListener('click', (evt) => {
        if (evt.target && evt.target.matches('a')) {
            menu.style.display = 'none';
        }
    });
}

export default burger;
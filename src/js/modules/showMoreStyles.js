function showMoreStyles(triggerSelector, cardsSelector) {
    const trigger = document.querySelector(triggerSelector);
    const cards = document.querySelectorAll(cardsSelector);

    trigger.addEventListener('click', (evt) => {
        if (evt.target) {
            evt.preventDefault();
        }

        for (const card of cards) {
            card.classList.add('animated', 'fadeInUp');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
        }

        trigger.remove();
    });
}

export default showMoreStyles;
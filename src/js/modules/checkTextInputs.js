function checkTextInputs(selector) {
    const inputs = document.querySelectorAll(selector);

    for (const input of inputs) {
        input.addEventListener('keypress', (evt) => {
            if (evt.key.match(/[^а-яё 0-9]/ig)) {
                evt.preventDefault();
            }
        });
    }
}

export default checkTextInputs;
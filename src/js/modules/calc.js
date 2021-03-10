function calc(sizeSelector, materialSelector, extraSelector, promocodeSelector, resultSelector) {
    const sizeElem = document.querySelector(sizeSelector);
    const materialElem = document.querySelector(materialSelector);
    const extraElem = document.querySelector(extraSelector);
    const promocodeElem = document.querySelector(promocodeSelector);
    const resultElem = document.querySelector(resultSelector);

    let sum = 0;

    sizeElem.addEventListener('change', getResult);
    materialElem.addEventListener('change', getResult);
    extraElem.addEventListener('change', getResult);
    promocodeElem.addEventListener('input', getResult);

    function getResult() {
        if (sizeElem.value == '' || materialElem.value == '') {
            resultElem.textContent = 'Пожалуйста выберите размер и материал для расчета';
            return;
        }

        sum = (+sizeElem.value) * (+materialElem.value) + (+extraElem.value);
            
        if (promocodeElem.value === 'IWANTPOPART') {
            sum *= 0.7;
        }

        resultElem.textContent = sum;
    }
}

export default calc;
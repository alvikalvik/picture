import {sendForm} from './services';

function forms() {
    const formsList = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input'); 
    const formWithFileSelector = '[data-form-with-file]';
    const inputsWithFile = document.querySelectorAll('[data-form-with-file] input[type="file"]');    

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы с Вами скоро свяжемся!',
        fail: 'Ошибка отправки данных...',
        okImg: 'assets/img/ok.png',
        failImg: 'assets/img/fail.png',
        spinnerImg: 'assets/img/spinner.gif',
    };

    let currentMessage = '';    
    let currentImg = '';
    let submitUrl = '';

    function clearInputs() {
        for (const input of inputs) {
            input.value = '';
        }
        for (const fileInput of inputsWithFile) {
            fileInput.previousElementSibling.textContent = 'Файл не выбран';
        }
    }

    function initForms() {
        for (const fileInput of inputsWithFile) {
            fileInput.addEventListener('input', () => {
                let fileName = fileInput.files[0].name;
                if (fileName.length > 10) {
                    let [pureName, extension] = fileName.split('.');
                    pureName = pureName.slice(0, 6) + '..';
                    fileName = `${pureName}.${extension}`;
                }
                fileInput.previousElementSibling.textContent = fileName;
            });
        }

        for (const item of formsList) {
            item.addEventListener('submit', (evt) => {
                evt.preventDefault();
    
                const formData = new FormData(item);
                const messageBox = document.createElement('div');                
                const statusText = document.createElement('div');
                const statusImg = document.createElement('img');
    
                messageBox.classList.add('status');
                statusText.textContent = message.loading;
                statusImg.setAttribute('src', message.spinnerImg);
                messageBox.classList.add('animated', 'fadeInUp');
                messageBox.append(statusImg);
                messageBox.append(statusText);
                item.style.display = 'none';
                item.parentElement.append(messageBox);

                if (item.matches(formWithFileSelector)) {
                    submitUrl = './assets/question.php';
                } else {
                    submitUrl = './assets/server.php';
                }

                if (item.contains(document.querySelector('.calc-price'))) {
                    formData.set('price', document.querySelector('.calc-price').textContent);
                }
    
                sendForm(submitUrl, formData)            
                .then(response => {
                    currentMessage = message.success;
                    currentImg = message.okImg;
                    console.log(response);
                    return response;
                })            
                .catch(error => {
                    currentMessage = `${message.fail}: ${error}`;
                    currentImg = message.failImg;
                })
                .finally( () => {
                    statusText.textContent = currentMessage;
                    statusImg.setAttribute('src', currentImg);
                    setTimeout( () => {
                        messageBox.remove();
                        clearInputs();
                        item.classList.add('animated', 'fadeInUp');
                        item.style.display = '';
                    }, 5000);
                });           
    
            });
        }        
    }    

    initForms();
    // handleDigitalInputs('input[name="user_phone"]');    
}

export default forms;
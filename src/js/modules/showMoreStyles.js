import {getResource} from './services';

function showMoreStyles(triggerSelector, wrapperSelector) {
    const trigger = document.querySelector(triggerSelector);
    const wrapper = document.querySelector(wrapperSelector);

    function showMoreCards(url) {
        getResource(url)
            .then(res => {                
                for (const {src, title, link} of res) {
                    const card = document.createElement('div');   

                    card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
                    card.innerHTML = `
                        <div class="styles-block">
                            <img src=${src} alt=${title}>
                            <h4>${title}</h4>
                            <a href="${link}">Подробнее</a>
                        </div>
                    `;

                    wrapper.append(card);                    
                }
                
                trigger.remove();
            })
            .catch(err => {
                console.log(err);
                const errMessage = document.createElement('div');                    
                    errMessage.classList.add('animated', 'fadeInUp', 'status');
                    errMessage.textContent = `Загрузка данных с сервера не удалась. Ошибка: ${err}`;

                    wrapper.append(errMessage);
            });        
    }

    trigger.addEventListener('click', (evt) => {
        if (evt.target) {
            evt.preventDefault();
        }

        showMoreCards('http://localhost:3000/styles');
    });
}

export default showMoreStyles;
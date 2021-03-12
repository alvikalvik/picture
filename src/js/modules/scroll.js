function scroll() {
    const smoothLinks = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
        
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (evt) {
            evt.preventDefault();
            const id = smoothLink.getAttribute('href');
            
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });                        
        });
    };
}

export default scroll;
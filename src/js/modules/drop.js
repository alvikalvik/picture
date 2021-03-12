function drop(dropAreasSelector) {
    const dropAreas = document.querySelectorAll(dropAreasSelector);

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropAreas.forEach(area => {
            area.addEventListener(eventName, handleArea);
        });
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        dropAreas.forEach(area => {
            area.addEventListener(eventName, () => highlight(area));
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropAreas.forEach(area => {
            area.addEventListener(eventName, () => unhighlight(area));
        });
    });

    ['drop'].forEach(eventName => {
        dropAreas.forEach(area => {
            const input = area.querySelector('input[type="file"]');
            area.addEventListener(eventName, (evt) => {                
                input.files = evt.dataTransfer.files; 

                let fileName = input.files[0].name;
                if (fileName.length > 10) {
                    let [pureName, extension] = fileName.split('.');
                    pureName = pureName.slice(0, 6) + '..';
                    fileName = `${pureName}.${extension}`;
                }
                input.previousElementSibling.textContent = fileName;
            });
        });
    });

    function handleArea(evt) {
        evt.preventDefault();
        evt.stopPropagation();
    }

    function highlight(area) {
        area.style.border = '5px solid yellow';
        area.style.backgroundColor = 'rgba(0,0,0, 0.7)';
    }

    function unhighlight(area) {
        area.style.border = '';
        area.style.backgroundColor = '';
    }
}

export default drop;
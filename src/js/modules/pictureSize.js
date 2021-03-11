function pictureSize(selector) {
    const imgBlocks = document.querySelectorAll(selector);

    function showImg(block) {
        const img = block.querySelector('img');

        img.src = img.src.split('.').join('-1.');
        for (const item of block.querySelectorAll('p:not(.sizes-hit)')) {
            item.style.display = 'none';
        }
    }

    function hideImg(block) {
        const img = block.querySelector('img');

        img.src = img.src.split('-1.').join('.');
        for (const item of block.querySelectorAll('p:not(.sizes-hit)')) {
            item.style.display = '';
        }
    }

    for (const block of imgBlocks) {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });
        
        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    }
}

export default pictureSize;
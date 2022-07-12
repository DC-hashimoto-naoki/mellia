window.addEventListener('load', function(){
    let images = this.document.getElementsByTagName('img');
    let sources = this.document.getElementsByTagName('source');
    let exceptionImages = this.document.querySelectorAll('.exceptionImage')


    function changeImageSize_px_to_rem(tags) {
        tags = Array.prototype.slice.call(tags);

        tags.forEach(image => {
            if(image.classList.contains('exceptionImage')){return};
            let width_px = image.naturalWidth;
            let width_rem = width_px / 10;
            image.setAttribute('style', `width: ${width_rem}rem`);
        });
    }

    changeImageSize_px_to_rem(images);
    changeImageSize_px_to_rem(sources);

    this.window.addEventListener('resize', ()=>{
        changeImageSize_px_to_rem(images);
        changeImageSize_px_to_rem(sources);    
    })
})
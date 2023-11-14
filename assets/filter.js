function colorFilter(nav, id){
    for(let y = 0; y < nav.length; y++ ) {
        nav[y].classList.remove('active')
    }
    nav[id].classList.add('active')
}
function DisplayNoneImg(idFilter){
    let galleryImg = document.querySelectorAll('.gallery-item')
    let galleryImgDiv = document.querySelectorAll('.gallery .item-column')
    for(let i = 0; i < galleryImg.length; i++) {
        
        idItem = galleryImg[i].getAttribute("data-gallery-tag");
        if(idFilter == 'all') {
                galleryImgDiv[i].classList.remove('hidden')
        } else {
                if (idFilter != idItem){
                    galleryImgDiv[i].classList.add('hidden')
                }else {
                    galleryImgDiv[i].classList.remove('hidden')

                }
        }
    }
}

var galleryNav = document.querySelectorAll('.nav-link')
var idFilter;
for(let i=0 ; i < galleryNav.length ; i++) {
    galleryNav[i].addEventListener('click', ()=> {
         idFilter = galleryNav[i].getAttribute("data-images-toggle");
        colorFilter(galleryNav,i);
        DisplayNoneImg(idFilter);

    });
}

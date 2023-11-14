let galleryImg = document.querySelectorAll(".gallery-item");
let galleryDivImg = document.querySelectorAll(".item-column")
let modal = document.getElementById('my_awesome_lightbox');
let boxImg = document.querySelector('.light_box_image');
let body = document.querySelector('body');
let modalBackdrop = document.querySelector('.modal-backdrop');
let next = document.querySelector('.mg-next');
let prev = document.querySelector('.mg-prev');

for( let i = 0; i < galleryImg.length; i++){
    galleryImg[i].dataset.number = i
}

let index = 0;
for(let i = 0; i < galleryImg.length; i++){
    galleryImg[i].addEventListener('click', ()=> {

        modal.classList.remove('hidden');
        modal.classList.add('show')
        body.classList.add('body-no-scroll');
        modalBackdrop.classList.remove('hidden');
        modalBackdrop.classList.add('show')
        index = i;
        boxImg.src = galleryImg[i].src
    })
}
next.addEventListener('click', ()=> {
    if(index < galleryImg.length - 1){
        index++

        while (galleryDivImg[index].classList.contains('hidden') === true){
            index++
            if(index == galleryImg.length){
                index = 0
            }
        }
        boxImg.src = galleryImg[index].src
    }else if(index = galleryImg.length - 1) {
        index = 0
        while (galleryDivImg[index].classList.contains('hidden') === true){
            index++
        }
        boxImg.src = galleryImg[index].src
    }
})
prev.addEventListener('click', ()=> {
    
    if(index > 0){
        index--

        while (galleryDivImg[index].classList.contains('hidden') === true){
            index--
            if(index == -1){
                index = galleryImg.length - 1
            }
        }
        boxImg.src = galleryImg[index].src

    }else if(index = -1){
        index = galleryImg.length - 1 
        while (galleryDivImg[index].classList.contains('hidden') === true){
            index--
        }

        boxImg.src = galleryImg[index].src
    }
    })



next.addEventListener('click', ()=> {
    let data = boxImg.dataset.number

})
modalBackdrop.addEventListener('click', ()=> {
    modal.classList.add('hidden');
    body.classList.remove('body-no-scroll');
    modalBackdrop.classList.add('hidden')
})

var galleryItem = document.querySelectorAll('.gallery-item');
var galleryDiv = document.querySelector('.gallery-items-row')
if (galleryItem) {
    for(let i=0; i < galleryItem.length; i++) {
        var divParent = document.createElement('div');
        divParent.classList.add('item-column', 'mb-4', 'col-12' ,'col-sm-6', 'col-md-4' , 'col-lg-4',  'col-xl-4')
        galleryDiv.appendChild(divParent)
        divParent.appendChild(galleryItem[i]);   
    }
}




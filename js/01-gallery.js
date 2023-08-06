import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');


function createGalleryItem(item){
return item.map(({preview, original, description}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`).join('');
}


galleryList.insertAdjacentHTML('beforeend', createGalleryItem(galleryItems)) 
galleryList.addEventListener('click', handlerClick)

function handlerClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
  
    const largeImageUrl = evt.target.dataset.source;
  
    const instance = basicLightbox.create(`
      <img src="${largeImageUrl}" alt="Image description" />
    `);
  
    instance.show();
}
 
console.log(galleryItems);

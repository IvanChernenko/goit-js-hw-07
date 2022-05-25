import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createImgInGallery(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryContainer.addEventListener('click', onPictureClick);

function createImgInGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" "onclick = event.preventDefault()">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}).join("");
    
}


function onPictureClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains("gallery__image")) {
        return;
    } else {
        const instance = basicLightbox.create(`
  <img
  src = "${e.target.dataset.source}"/>
`);

instance.show()
    }
console.log(e.target)
}
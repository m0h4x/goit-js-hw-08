// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let myGallery = document.querySelector('.gallery');

const liPictures = galleryItems
  .map(
    pic => `<a class="gallery__item" href="${pic.original}">
                <img class="gallery__image" src=${pic.preview} alt=${pic.description} />
            </a>`,
  )
  .join('');

myGallery.insertAdjacentHTML('beforeend', liPictures);

for (let i = 0; i < document.getElementsByClassName('gallery__item').length; i++) {
  document.getElementsByClassName('gallery__item')[i].addEventListener('click', function (event) {
    event.preventDefault();
    return false;
  });
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  animationSpeed: 250,
});
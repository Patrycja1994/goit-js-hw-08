// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector("div.gallery");
const elements = galleryItems
    .map( ({preview, original, description}) =>
       `<div class= "gallery__item">
        <a class="gallery__link" href= '${original}'>
            <img class = "gallery__image"
            src = '${preview}' 
            data-source = '${original}' 
            alt = '${description}'/> 
        </a>
        </div>`
    ) 
    .join("");

galleryList.insertAdjacentHTML("beforeend", elements);

const lightbox = new SimpleLightbox('.gallery a', { 
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 250
});
console.log(galleryItems);
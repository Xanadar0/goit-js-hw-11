import iziToast from "izitoast";
import axios from 'axios';
import { findPhotos } from "./js/pixabay-api";
import SimpleLightbox from "simplelightbox";
import { createGalleryCardTemplate } from "./js/render-functions";

const searchFormEl = document.querySelector('.form-search');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const lightbox  = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionPosition: 'bottom',
    captionsData: 'alt',
    overlayOpacity: 1,
});

const searchFormSubmit = event => {
    event.preventDefault();
    const searchedValue = searchFormEl.elements["search-text"].value.trim();
    if (searchedValue === '') {
        iziToast.warning({
            message: 'Please enter a search query.',
            position: 'bottomRight',
        });
        return;
    }

    loaderEl.classList.remove('is-hidden');

    findPhotos(searchedValue)
        .then(data => {
            loaderEl.classList.add('is-hidden')
            if (!data.hits || data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'bottomRight'
                });
                galleryEl.innerHTML = '';
                searchFormEl.reset();
                return;
            }

            const galleryCardsTemplate = data.hits
                .map(imgDetails => createGalleryCardTemplate(imgDetails))
                .join('');
            galleryEl.innerHTML = galleryCardsTemplate;
            lightbox.refresh();
        })
        .catch(err => {
            loaderEl.classList.add('is-hidden');
            iziToast.error({
                message: 'An error occurred. Please try again later.',
                position: 'bottomRight',
            });
            console.log(err);
        });
};

searchFormEl.addEventListener('submit', searchFormSubmit);





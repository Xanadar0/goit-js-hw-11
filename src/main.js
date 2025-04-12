import iziToast from "izitoast";
import axios from 'axios';
import { findPhotos } from "./js/pixabay-api";
import SimpleLightbox from "simplelightbox";
import {
  createGalleryCardTemplate,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions";

const searchFormEl = document.querySelector('.form-search');
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

    clearGallery();
    showLoader();

    findPhotos(searchedValue)
        .then(data => {
            hideLoader();

            if (!data.hits || data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'bottomRight'
                });
                searchFormEl.reset();
                return;
            }

            createGalleryCardTemplate(data.hits);
            lightbox.refresh();
        })
        .catch(err => {
            hideLoader();
            iziToast.error({
                message: 'An error occurred. Please try again later.',
                position: 'bottomRight',
            });
            console.log(err);
        });
};

searchFormEl.addEventListener('submit', searchFormSubmit);





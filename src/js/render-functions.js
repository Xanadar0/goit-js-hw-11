const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export const createGalleryCardTemplate = photoInfo => {
  gallery.innerHTML = photoInfo
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-img"
          src="${webformatURL}"
          alt="${tags}"
          load="lazy"
        />
      </a>
      <ul class="gallery-info">
        <li class="gallery-info-item">
          <p class="gallery-info-title">Likes</p>
          <p class="gallery-info-text">${likes}</p>
        </li>
        <li class="gallery-info-item">
          <p class="gallery-info-title">Views</p>
          <p class="gallery-info-text">${views}</p>
        </li>
        <li class="gallery-info-item">
          <p class="gallery-info-title">Comments</p>
          <p class="gallery-info-text">${comments}</p>
        </li>
        <li class="gallery-info-item">
          <p class="gallery-info-title">Downloads</p>
          <p class="gallery-info-text">${downloads}</p>
        </li>
      </ul>
    </li>`
    )
    .join('');
  }

export const clearGallery = () => 
  gallery.innerHTML = '';


export const showLoader = () => 
  loader.classList.add('loader');


export const hideLoader = () => 
  loader.classList.remove('loader');

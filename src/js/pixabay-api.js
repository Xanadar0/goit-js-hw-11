const BASE_URL = 'https://pixabay.com/api/?';

export const findPhotos = searchedValue => {
    const urlParams = new URLSearchParams({
        key: '49462102-62c5bd388bb9085ad52d727ed',
        q: searchedValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true, 
    });

    return fetch(`${BASE_URL}${urlParams}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }

        return response.json();
    });
};

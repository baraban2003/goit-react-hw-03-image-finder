export default async function fetchPictures(name, pageNumber) {
  const axios = require('axios');

  const API_KEY = '26835321-4f7740cc42e1042b435da3ff7';

  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${pageNumber}`;

  const pictures = await axios.get(URL);

  const newPictures = pictures.data.hits.map(e => {
    return {
      id: e.id,
      largeImageURL: e.largeImageURL,
      tags: e.tags,
      webformatURL: e.webformatURL,
    };
  });

  return newPictures;
}

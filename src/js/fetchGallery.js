const apiKey = '20452679-d2c9a4c3f38fef4a414948741';
function fetchGallery(searchQuery) {
  const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&per_page=12&key=${apiKey}`;

  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => data.hits)
    .catch(error => console.log(error));
}

export default fetchGallery;

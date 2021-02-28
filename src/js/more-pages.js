const apiKey = '20452679-d2c9a4c3f38fef4a414948741';
export default {
  searchQuery: '',
  page: 1,
  fetchGallery(searchQuery, page = 1) {
    const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;

    return fetch(baseUrl)
      .then(res => res.json())
      .then(({ hits }) => hits);
  },
  resetPage() {
    this.page = 1;
  },
};

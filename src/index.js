import './css/styles.css';
import refs from './js/refs';
//import fetchGallery from './js/fetchGallery';
import updateGallerymarkup from './js/update-gallery-markup';
import morePages from './js/more-pages';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  searchQuery = form.elements.query.value;

  refs.containerGallery.innerHTML = '';
  form.reset();

  morePages.resetPage();

  fetchGallery(searchQuery).then(hits => {
    updateGallerymarkup(hits);
    page += 1;
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  fetchGallery(searchQuery).then(hits => {
    updateGallerymarkup(hits);
    page += 1;
  });
});

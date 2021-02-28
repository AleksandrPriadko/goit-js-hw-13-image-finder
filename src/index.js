import './css/styles.css';
import refs from './js/refs';
import fetchGallery from './js/fetchGallery';
import updateGallerymarkup from './js/update-gallery-markup';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;
  console.log(inputValue);
  refs.containerGallery.innerHTML = '';
  fetchGallery(inputValue).then(updateGallerymarkup);
  console.log(fetchGallery(inputValue));
});

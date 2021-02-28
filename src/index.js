import './css/styles.css';
import refs from './js/refs';
import updateGallerymarkup from './js/update-gallery-markup';
import morePages from './js/more-pages';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  morePages.query = form.elements.query.value;

  refs.containerGallery.innerHTML = '';

  morePages.resetPage();
  refs.loadMoreBtn.classList.add('is-hidden');

  morePages.fetchGallery().then(hits => {
    updateGallerymarkup(hits);
    refs.loadMoreBtn.classList.remove('is-hidden');
  });
  form.reset();
});

refs.loadMoreBtn.addEventListener('click', () => {
  morePages.fetchGallery().then(hits => {
    updateGallerymarkup(hits);
    window.scrollTo({
      top: window.innerHeight + window.pageYOffset,
      behavior: 'smooth',
    });
  });
});

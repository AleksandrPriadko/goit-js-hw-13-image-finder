import refs from '../js/refs';
import cardTemplate from '../templates/image-card.hbs';

function updateGallerymarkup(hits) {
  const markup = cardTemplate(hits);
  refs.containerGallery.insertAdjacentHTML('beforeend', markup);
}

export default updateGallerymarkup;

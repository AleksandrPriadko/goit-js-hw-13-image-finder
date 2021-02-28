import refs from '../js/refs';
import cardTemplate from '../templates/image-card.hbs';

function updateGallerymarkup(data) {
  const markup = cardTemplate(data);
  refs.containerGallery.insertAdjacentHTML('beforeend', markup);
}
export default updateGallerymarkup;

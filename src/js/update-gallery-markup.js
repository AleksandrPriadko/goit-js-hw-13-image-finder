import refs from '../js/refs';
import cardTemplate from '../templates/image-card.hbs';
import fetchGallery from './fetchGallery';

function updateGallerymarkup(data) {
  const markup = cardTemplate(data);
  console.log(markup);
  refs.containerGallery.insertAdjacentHTML('beforeend', markup);
}
console.log(updateGallerymarkup);
export default updateGallerymarkup;

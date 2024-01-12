'use strict';

import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const buttonResults = document.querySelector('.more-results');

const modal = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const per_page = 40;
let page = 1;
const totalPages = Math.ceil(500 / per_page);
let userSearch = '';

form.addEventListener('submit', async event => {
  event.preventDefault();
  userSearch = form.search.value.trim();

  try {
    loader.classList.remove('hide');
    const images = await fetchImages();
    renderImages(images);
  } catch (error) {
    console.log(error.message);
  } finally {
    loader.classList.add('hide');
    console.log();
  }

  buttonResults.addEventListener('click', async () => {
    try {
      loader.classList.remove('hide');
      const images = await fetchImages();
      renderImages(images);

      if (page > totalPages) {
        iziToast.error({
          position: 'topRight',
          message: "We're sorry, there are no more posts to load",
        });
      }

      loader.classList.add('hide');
    } catch (error) {
      console.log(error.message);
    } finally {
      loader.classList.add('hide');
      console.log();
    }
  });
});

async function fetchImages() {
  page += 1;

  const images = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '41563330-08ed4e1341b4edecabdae7272',
      q: userSearch,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: per_page,
      page: page,
    },
  });
  return images.data;
}

async function renderImages(images) {
  const markup = images.hits.reduce(
    (
      html,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) => {
      return (
        html +
        `<li class='gallery-item'>
              <a class='gallery-link' href='${largeImageURL}'>
                <img
                    class='gallery-image'
                    src='${webformatURL}'
                    alt='${tags}'
                    width='360'
                    height='200'
                    />
              </a>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${likes}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${views}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${comments}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${downloads}</span></p></li>
              </ul>
            </li>`
      );
    },
    ''
  );

  gallery.insertAdjacentHTML('beforeend', markup);
  modal.refresh();
  buttonResults.classList.remove('hide');
}

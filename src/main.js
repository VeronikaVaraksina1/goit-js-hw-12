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
let userSearch = '';

form.addEventListener('submit', toForm);
buttonResults.addEventListener('click', toButton);

async function toForm(event) {
  event.preventDefault();
  buttonResults.classList.add('hide');
  gallery.innerHTML = '';
  page = 1;
  userSearch = form.search.value.trim();

  const images = await fetchImages();

  if (images.hits.length === 0) {
    iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: '#fff',
    });
  }
  renderImages(images);
}

async function toButton() {
  const images = await fetchImages();
  loader.classList.add('hide');

  if (page >= Math.ceil(images.totalHits / per_page)) {
    buttonResults.classList.add('hide');
    iziToast.error({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
      backgroundColor: '#fff',
    });
  }
  renderImages(images);
  moveCard();
}

async function fetchImages() {
  loader.classList.remove('hide');

  page += 1;

  try {
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
  } catch (error) {
    console.log(error.message);
  } finally {
    loader.classList.add('hide');
    form.reset();
  }
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
              <p class='gallery-tags'>Tags: ${tags}</p>
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

  if (
    images.hits.length === 0 ||
    page >= Math.ceil(images.totalHits / per_page)
  ) {
    buttonResults.classList.add('hide');
  } else {
    buttonResults.classList.remove('hide');
  }
}

function moveCard() {
  const card = document.querySelector('.gallery-item');
  const domRect = card.getBoundingClientRect().height;
  window.scrollBy({
    top: domRect * 2,
    behavior: 'smooth',
  });
}

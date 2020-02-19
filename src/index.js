import pixiApi from './apiService.js';
import galaryUl from './galaryUl.hbs';
import debounce from 'lodash.debounce';
import * as basicLightbox from 'basiclightbox';
import './styles.css';
import './basicLightbox.min.css';

const loadButton = document.querySelector('#btn-load-more');
const search = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
let page = 1;
let inp = '';


function parseData(data) {
  const dataInp = galaryUl(data);
  gallery.insertAdjacentHTML('beforeend', dataInp);
}
function onInput(e) {
  const searchQuery = e.target.value;
  inp = searchQuery;
  if (!searchQuery) {
    return;
  } else {
    pixiApi(searchQuery, page, parseData);
  }
}

function onClick(e) {
  loadButton.setAttribute('disabled', true);
  const searchQuery = inp;
  pixiApi(searchQuery, ++page, parseData);
  loadButton.removeAttribute('disabled');
}

function modale(e) {
  if (e.target.localName === 'img') {
    const instance = basicLightbox.create(`
    <img src="${e.target.alt}" >
    `);
    instance.show();
  }
}


loadButton.addEventListener('click', onClick);
search.addEventListener('input', debounce(onInput, 500));
document.body.addEventListener('click', modale);





  
  // infScroll = new InfiniteScroll(gallery, {
  //   path: '.pagination__next',
  //   append: '.post',
  //   history: false,
//   });
import PNotify from 'pnotify/dist/es/PNotify.js';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import PNotifyButtons from '../node_modules/pnotify/dist/es/PNotifyButtons.js';
const KEY = '15301640-60ff378e35eeb1b3833f20eb8';

export default function pixiApi(search, numberPage, callback) {
  const mainURL = `https://pixabay.com/api?image_type=photo&orientation=horizontal&q=${search}&page=${numberPage}&per_page=14&key=${KEY}`;
  fetch(mainURL)
    .then(data => data.json())
    .then(data => callback(data))
    .then(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    })
    .then(() => {
      PNotify.success({
        title: 'Success!',
        delay: 4000,
        text: 'That thing that you were trying to do worked.',
      });
    })
    .catch(err => {
      PNotify.error({
        title: 'Warning!',
        text: `${err}`,
      });
    });
}


    // .then(data => 
    //  {
    //   const a = document.querySelector('.pagination__next');
    //   a.setAttribute(
    //     'href',
    //     `https://pixabay.com/api?image_type=photo&orientation=horizontal&q=${search}&page=${++numberPage}&per_page=14&key=${KEY}`,
    //   );
    //   callback(data);
    // })

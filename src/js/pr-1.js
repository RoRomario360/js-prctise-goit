import searchByname from './api/swapi';
import createMarkup from './tameplates/createmarkup';

const input = document.querySelector('.apisearch');
input.addEventListener('input', onInput);

function onInput(evt) {
  console.log(evt.target.value);
  const quary = evt.target.value;
  searchByname(quary).then(response => {
    console.log(response);
    createMarkup(response.results);
  });
}

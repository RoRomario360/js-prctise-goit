// import { galleryItems } from './gallery-items';
// import Swiper from 'swiper';

// // import styles bundle
// import '../../node_modules/swiper/swiper-bundle.css';

// const photos = `
//   <!-- Additional required wrapper -->
//   <div class="swiper-wrapper">
//     <!-- Slides -->
//     <div class="swiper-slide"> <a class="gallery__item" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a></div>

//     ...
//   </div>
//   <!-- If we need pagination -->
//   <div class="swiper-pagination"></div>

//   <!-- If we need navigation buttons -->
//   <div class="swiper-button-prev"></div>
//   <div class="swiper-button-next"></div>

//   <!-- If we need scrollbar -->
//   <div class="swiper-scrollbar"></div>
// `;

// const galleryList = document.querySelector('.swiper');
// galleryList.insertAdjacentHTML('beforeend', photos);
// console.log(photos.join(''));

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

// TransformStreamDefaultController;

// NOTE;
// TransformStreamDefaultControlle;
fetchPokemon();

function fetchPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
      return response.json();
    })
    .then(renderPokemonCard)
    .catch(error => {
      console.log('Error');
    });
}

function renderPokemonCard(pokemon) {}

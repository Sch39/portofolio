import main from './view/main.js';
import 'regenerator-runtime';
/* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@popperjs/core';

const hamburgerButton = document.querySelector('#menu');
const drawerElement = document.querySelector('#drawer');

const bodyElement = document.querySelector('body');

hamburgerButton.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

bodyElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
});


document.addEventListener('DOMContentLoaded', main);

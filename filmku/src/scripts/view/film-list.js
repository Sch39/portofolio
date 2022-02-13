/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
class FilmList extends HTMLElement {
  constructor() {
    super();
    // eslint-disable-next-line object-curly-spacing
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set films(films) {
    this._films = films;
    this.render();
  }


  render() {
    this.shadowDOM.innerHTML = '';
    this._films.forEach((film) => {
      const filmItemElement = document.createElement('film-item');
      filmItemElement.film = film;
      this.shadowDOM.appendChild(filmItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
    .placeholder{
      font-weight: lighter;
      color: white;
      color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
    }
    </style>
    `;
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}
customElements.define('film-list', FilmList);

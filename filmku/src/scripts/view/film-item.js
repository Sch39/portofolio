// eslint-disable-next-line require-jsdoc
class FilmItem extends HTMLElement {
  // eslint-disable-next-line require-jsdoc
  constructor() {
    super();
    // eslint-disable-next-line object-curly-spacing
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  // eslint-disable-next-line require-jsdoc
  set film(film) {
    this._film = film;
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    const basePosterPath = 'https://image.tmdb.org/t/p/original';

    this.shadowDOM.innerHTML = `

    <style>

    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :host{
      display:block;
      margin-bottom: 18px;
      box-shadow: 0 4px 8px 0 white;
      border-radius: 15px;
      overflow: hidden;
    }

    .poster-film{
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      object-position: center;
    }

    .film-info{
      padding: 20px;
      color:white;
    }

    .film-info>h2{
      font-weight: lighter;
    }

    .film-info>p{
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10;
    }


    </style>



    <img class="poster-film" src="${basePosterPath}${this._film.poster_path}" alt="poster ${this._film.title}">

    <div class="film-info">
    <h2 class="title">${this._film.title}</h2>
    <p class="popularity">Popularity: ${this._film.popularity}</p>
    <p class="overview">${this._film.overview}</p>
    </div>
    `;
  }
}

customElements.define('film-item', FilmItem);

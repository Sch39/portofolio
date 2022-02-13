import './film-item.js';
import './film-list.js';
import DataApi from '../data/data-api.js';

const main = () => {
  const filmListElement = document.querySelector('film-list');
  // half-hour in milisecond
  const halfHour = 1800000;

  const onDocumentLoaded = async () => {
    try {
      const result = await DataApi.fetchData();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }

    setTimeout(onDocumentLoaded, halfHour);
  };


  const renderResult = (results) => {
    filmListElement.films = results;
  };

  const fallbackResult = (message) => {
    filmListElement.renderError(message);
  };


  onDocumentLoaded();
};

export default main;

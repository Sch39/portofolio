/* eslint-disable indent */
// eslint-disable-next-line require-jsdoc
class DataApi {
  // eslint-disable-next-line require-jsdoc
  static fetchData() {
    return fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=fcbc1cb15905b9a4b9a360d866b4b685')
      .then(response => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          (error => {
            return Promise.reject(error);
          });
        }
      });
  }
}
export default DataApi;

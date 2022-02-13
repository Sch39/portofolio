function getDataCovid() {
  fetch('https://indonesia-covid-19.mathdro.id/api')
    .then(response => response.json())
    .then(data => {
      let positif = data.jumlahKasus;
      let sembuh = data.sembuh;
      let meninggal = data.meninggal;

      document.getElementById("data-positif").innerHTML = positif;
      document.getElementById("data-sembuh").innerHTML = sembuh;
      document.getElementById("data-meninggal").innerHTML = meninggal;
    })
    .catch(err => {

    });
  window.setTimeout(getDataCovid, 3000);

}

document.addEventListener("DOMContentLoaded", function () {
  getDataCovid();
});
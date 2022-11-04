const main = () => {
  const baseUrl = "https://cuaca-gempa-rest-api.vercel.app";
  const getProvince = () => {
    fetch(`${baseUrl}/weather/jawa-tengah`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllProvince(responseJson.data);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  /*
        jangan ubah kode di bawah ini ya!
    */

  const renderAllProvince = (provinces) => {
    // let spesifik = province[0];
    const tittle = document.querySelector("#tittle");
    tittle.innerHTML = `Perkiraan Cuaca di ${provinces.areas[0].domain} per ${provinces.issue.day}-${provinces.issue.month}-${provinces.issue.year} `;
    const listProvince = document.querySelector("#listProvince");
    listProvince.innerHTML = "";

    provinces.areas.forEach((province) => {
      if (province.params) {
        const suhuPagi = `${province.params[5].times[1].celcius}`;
        const suhuSiang = `${province.params[5].times[2].celcius}`;
        const suhuSore = `${province.params[5].times[3].celcius}`;
        const suhuMalam = `${province.params[5].times[4].celcius}`;
        const pagi = `${province.params[6].times[1].name}`;
        const siang = `${province.params[6].times[2].name}`;
        const sore = `${province.params[6].times[3].name}`;
        const malam = `${province.params[6].times[4].name}`;

        listProvince.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="cards">
            <h5 class="text-center fw-bold mb-3">${province.description}</h5>
            <div class="mx-auto d-flex wmax">
              <h6 class="me-1 fw-bold">Pagi</h6>
              <h6>: ${pagi}, ${suhuPagi}</h6>
            </div>
            <div class="mx-auto d-flex wmax">
              <h6 class="me-1 fw-bold">Siang</h6>
              <h6>: ${siang}, ${suhuSiang}</h6>
            </div>
            <div class="mx-auto d-flex wmax">
              <h6 class="me-1 fw-bold">Sore</h6>
              <h6>: ${sore}, ${suhuSore}</h6>
            </div>
            <div class="mx-auto d-flex wmax">
              <h6 class="me-1 fw-bold">Malam</h6>
              <h6>: ${malam}, ${suhuMalam}</h6>
            </div>
          </div>
        </div>
        `;
      }
    });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };
  getProvince();
};

export default main;

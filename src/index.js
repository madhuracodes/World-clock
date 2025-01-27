function updateTime() {
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  berlinDateElement.innerHTML = moment().format("ddd, LL");
  berlinTimeElement.innerHTML = moment().tz("Europe/Berlin").format("LTS");

  let mumbaiElement = document.querySelector("#mumbai");
  let mumbaiDateElement = mumbaiElement.querySelector(".date");
  let mumbaiTimeElement = mumbaiElement.querySelector(".time");
  mumbaiDateElement.innerHTML = moment().format("ddd, LL");
  mumbaiTimeElement.innerHTML = moment().tz("Asia/Calcutta").format("LTS");
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("ddd,LL")}</div>
          </div>
          <div class="time">${cityTime.format("LT")}</div>
        </div>
          <a href="index.html">Back to homepage</a>

      `;
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

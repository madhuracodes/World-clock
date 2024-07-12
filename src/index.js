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

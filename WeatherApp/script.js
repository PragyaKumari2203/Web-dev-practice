const url = "https://api.openweathermap.org/data/2.5/weather?q="

const img = document.querySelector(".weather-img")
const weatherBtn = document.querySelector(".search-btn")
const inputVal = document.querySelector("input")

async function getWeatherInfo(city) {

  const response = await fetch(`http://localhost:3000/weather?city=${city}`);
  var data = await response.json()
  console.log(data);

  if (data.cod == 404) {
    document.querySelector(".weather-info").style.display = "none"
    document.querySelector(".error").style.display = "block"
  }
  else {
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind-Speed-value").innerHTML = data.wind.speed + " km/h";

    var weatherInfo = data.weather[0].main;

    if (weatherInfo == "Clear") {
      img.src = "images/clear.png";
    }
    else if (weatherInfo == "Clouds") {
      img.src = "images/clouds.png";
    }
    else if (weatherInfo == "Fog") {
      img.src = "images/clouds.png";
    }
    else if (weatherInfo == "Drizzle") {
      img.src = "images/drizzle.png";
    }
    else if (weatherInfo == "Snow") {
      img.src = "images/snow.png";
    }
    else if (weatherInfo == "Rain") {
      img.src = "images/rain.png";
    }
    else if (weatherInfo == "Mist") {
      img.src = "images/mist.png";
    }

    document.querySelector(".weather-info").style.display = "block"
    document.querySelector(".error").style.display = "none"
    inputVal.value=""
  }

}

weatherBtn.addEventListener("click", () => {
  getWeatherInfo(inputVal.value)
})

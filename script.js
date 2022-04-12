const showWeatherBtn = document.getElementById('show-weather')
const zipCode = document.getElementById('zipcode')
const cityName = document.getElementById('city-name')
const latitude = document.getElementById('lat')
const longitude = document.getElementById('lon')
const main = document.getElementById('weather-main')
const description = document.getElementById('weather-desc')
const tempCurrent = document.getElementById('temp-current')
const tempMin = document.getElementById('temp-min')
const tempMax = document.getElementById('temp-max')
const humidity = document.getElementById('humidity')
const windSpeed = document.getElementById('wind-speed')
const windDegree = document.getElementById('wind-degree')


showWeatherBtn.addEventListener('click', getWeather)

//using async
async function getWeather() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  const api = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode.value + '&appid=f351a7a8f3e6c00276a0736c46937289'
  const res = await fetch(api, config)
  const data = await res.json()
  if (data.name == null) {
    alert('Invalid Zipcode ' + zipCode.value)
  } else {

    cityName.innerHTML = data.name
    latitude.innerHTML = data.coord.lat
    longitude.innerHTML = data.coord.lon
    main.innerHTML = data.weather[0].main
    description.innerHTML = data.weather[0].description
    tempCurrent.innerHTML = data.main.temp
    tempMin.innerHTML = data.main.temp_min
    tempMax.innerHTML = data.main.temp_max
    humidity.innerHTML = data.main.humidity
    windSpeed.innerHTML = data.wind.speed
    windDegree.innerHTML = data.wind.deg
  }
}

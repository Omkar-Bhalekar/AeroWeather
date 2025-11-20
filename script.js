document.addEventListener('DOMContentLoaded', () => {

  const cityInput = document.getElementById('city-input');
  const getWeatherBtn = document.getElementById('get-weather-btn');
  const weatherInfo = document.getElementById('weather-info');
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const feelsLike = document.getElementById("feelslike");
  const errorMessage = document.getElementById("error-message");
  
  const AQIInfo = document.getElementById("aqi-info");

  const API_Key = "e32773a927d9976f87bad6f7883fb5e2";

  getWeatherBtn.addEventListener('click', async function(e) {
    const city = cityInput.value.trim();

    if(!city) return ;  // If City is empty then we return


    // 1. It may throw an error 
    // 2. The server/Database is always in another continent / i.e it will take time 

    try {
      const weatherData = await fetchWeatherData(city);
      const aqiData = await fetchAqiData(city);
      displayWeatherData(weatherData,aqiData);
      document.getElementById("Aqi").classList.add("hidden");
      
    } 
    catch (error) {
      showError();
    }
  })


  async function fetchWeatherData(city){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_Key}`;
      
      

      const response = await fetch(url);
      console.log(typeof(response));
      
      console.log("RESPONSE:",response);

      

      if(!response.ok){
        throw new Error(`ERROR:${response.status}`)
      }

      const data =  await response.json();
      return data;

  }

  function displayWeatherData(Data,aqiData){
    const city = cityInput.value.trim();
   console.log(Data);
 

   const {name,main,weather} = Data;

   cityNameDisplay.textContent = name;
   temperatureDisplay.textContent = `Temperature : ${main.temp}°C`;
   feelsLike.textContent = `Feels Like : ${main.feels_like}°C`
   descriptionDisplay.textContent = `Weather : ${weather[0].description}`;
   
    let iconCode = weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById("weatherIcon").src = iconUrl;

    document.getElementById("Aqibutton").addEventListener("click",function(){

      document.querySelector("#Aqi p").textContent = `AQI : ${aqiData.data.aqi}`
      document.getElementById("Aqi").classList.remove("hidden");
    })

  
   weatherInfo.classList.remove("hidden");
   AQIInfo.classList.remove("hidden");
   errorMessage.classList.add("hidden");
  }

  function showError(){
    weatherInfo.classList.add("hidden");
    AQIInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }

  async function fetchAqiData(city) {
     
      const AQIurl = `https://api.waqi.info/feed/${city}/?token=4b73e17e4d51aee3c99217f4721d891f18e31db8`
     
      const AqiResponse = await fetch(AQIurl);
      const AqiData = await AqiResponse.json();

      return AqiData;

      console.log(AqiData);

  
  }

})













/*
document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-messag");

  const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e"; //env variables

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // it may throw an error
    // server/database is always in another continent

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    //gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);

    if (!response.ok) {
      throw new Error(" City Not found");
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    console.log(data);
    const { name, main, weather } = data;
    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `Temperature : ${main.temp}`;
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`;

    //unlock the display
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }
});  */

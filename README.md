# **AeroWeather – Real-Time Weather & AQI Web App**

AeroWeather is a lightweight, responsive web application that provides **real-time weather information and Air Quality Index (AQI)** updates for any city across the world. Designed with simplicity and speed in mind, it integrates public APIs to deliver accurate environmental insights through a clean and modern UI.

---

## 🚀 **Features**

### ✔ Real-Time Weather Data
- Live temperature (°C)
- Feels-like temperature
- Weather description
- Dynamic weather icons
- Auto city-name display

### ✔ AQI (Air Quality Index) Check
- Fetches real-time AQI data
- Displays AQI value + visual AQI scale
- Helps users understand air quality of their region

### ✔ Error Handling
- User-friendly error messages
- Handles invalid city inputs
- Graceful fallback for API issues

---

## 🛠 **Tech Stack**

- **HTML5** – Structure and layout  
- **CSS3** – Styling, layout, responsiveness  
- **JavaScript (Vanilla JS)** – API calls & DOM manipulation  
- **OpenWeather API** – Weather information  
- **WAQI API** – Air Quality Index data  

---

## 📡 **APIs Used**

### **1. OpenWeather API**
Fetches temperature, feels-like value, weather descriptions, and icons.

https://api.openweathermap.org/data/2.5/weather?q=%7BCITY_NAME%7D&units=metric&appid=%7BYOUR_OPENWEATHER_API_KEY%7D


### **2. WAQI API**
Provides city-wise AQI values.

https://api.waqi.info/feed/%7Bcity%7D/?token=%7BAQI_TOKEN%7D


##📝 Disclaimer

This project is made for educational purposes.
Weather and AQI data accuracy depends entirely on external APIs.


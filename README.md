🌦️ WEATHER APP - README
=========================

📌 OVERVIEW:
------------
This is a fully functional Weather App that displays real-time weather data using the OpenWeatherMap API. It includes a stylish welcome screen, smooth UI transitions, and current weather information such as temperature, description, wind speed, and icon.

🗂️ FILE STRUCTURE:
-------------------
- index.html        → Main webpage (Welcome screen + Weather interface)
- style.css         → All styling including layout and animations
- script.js         → Weather data fetching and display logic (with jQuery)
- README.txt        → Project description and usage guide

🔗 EXTERNAL LIBRARIES USED:
-----------------------------
- jQuery v3.6.0
- Moment.js (for date/time formatting)
- Animate.css (CSS animations)
- Font Awesome (icons)
- Google Fonts (Montserrat)

🌍 API USED:
------------
**OpenWeatherMap API**  
Endpoint: `https://api.openweathermap.org/data/2.5/weather`  
API Key: `f00c38e0279b7bc85480c3fe775d518c` *(You can replace this with your own key)*

📖 HOW TO RUN:
---------------
1. Open `index.html` in your web browser.
2. Welcome screen appears with an animated intro.
3. Click **"Go to Weather App"** button to proceed.
4. By default, weather for **Pune** is shown.
5. Enter any city name and click **"Get Weather"** to fetch real-time weather data.

🔍 DISPLAYED INFO:
-------------------
✔ City Name  
✔ Current Date and Time  
✔ Temperature (°C)  
✔ Weather Description  
✔ Wind Speed  
✔ Weather Icon

🧪 SAMPLE API CALL:
--------------------
`https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric`

💡 FEATURES:
-------------
- Default city loads on app open (Pune)
- Real-time weather data using `fetch()`
- Friendly alerts on errors or invalid city names
- Animated transitions and fade-in effect for result
- Responsive and clean design

🚀 FUTURE ENHANCEMENTS:
------------------------
- Add 5-day forecast using OpenWeatherMap’s forecast endpoint
- Show humidity, pressure, and sunrise/sunset
- Allow GPS-based location fetch
- Dark/Light mode toggle
- Save recent searches

👩‍💻 DEVELOPER INFO:
----------------------
Project: Real-Time Weather App  
Author: Tejitha Teju  
Language: HTML, CSS, JavaScript  
API: OpenWeatherMap  

📦 USAGE RIGHTS:
------------------
This project is open for learning and demo purposes. Replace the demo API key with your own for production usage from [https://openweathermap.org/](https://openweathermap.org/)


const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
  // Show welcome page initially
  $('#welcome-page').show();
  $('#weather-page').hide();

  // When "Go to Weather App" clicked
  $('#start-weather-btn').click(function () {
    $('#welcome-page').hide();
    $('#weather-page').show();
    weatherFn('Pune'); // Load default city weather on weather page
  });

  // On clicking Get Weather button
  $('#city-input-btn').click(function () {
    const city = $('#city-input').val().trim();
    if (city) {
      weatherFn(city);
    } else {
      alert('Please enter a city name');
    }
  });
});

async function weatherFn(cityName) {
  const apiURL = `${url}?q=${cityName}&appid=${apiKey}&units=metric`;
  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    if (res.ok) {
      weatherShowFn(data);
    } else {
      alert('City not found. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Failed to fetch weather data. Please try again later.');
  }
}

function weatherShowFn(data) {
  $('#city-name').text(data.name);
  $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  $('#temperature').html(`${data.main.temp}°C`);
  $('#description').text(data.weather[0].description);
  $('#wind-speed').html(`Wind Speed: ${data.wind.speed} m/s`);
  $('#weather-icon').attr(
    'src',
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  $('#weather-info').fadeIn();
}

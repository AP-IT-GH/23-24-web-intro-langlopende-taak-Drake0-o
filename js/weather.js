function getWeather() {
    const apiKey = '8301ad31bfd6ba98b0d47f134b7e862d'; 
    const city = document.getElementById('city-input').value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('weather-info').innerHTML = 'Error fetching weather data. Please try again.';
    });
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const visibility = data.visibility;
    const description = data.weather[0].description;

    const weatherTable = `
        <table>
            <tr>
                <th colspan="2">Weather in ${cityName}</th>
            </tr>
            <tr>
                <td>Temperature:</td>
                <td>${temperature}Â°C</td>
            </tr>
            <tr>
                <td>Humidity:</td>
                <td>${humidity}%</td>
            </tr>
            <tr>
                <td>Wind Speed:</td>
                <td>${windSpeed} m/s</td>
            </tr>
            <tr>
                <td>Visibility:</td>
                <td>${visibility / 1000} km</td>
            </tr>
            <tr>
                <td>Description:</td>
                <td>${description}</td>
            </tr>
        </table>
    `;

    document.getElementById('weather-info').innerHTML = weatherTable;
}
// step 1: import essensiel module in this case 'node_fetch' module for handling https request
const fetch = require('node_fetch');

// step 2: define api endpoints
const apiUrl = "https://api.example.com/weather";
const apiKey = "the_api_key";
const city = "Dellys";

// step 3: Make a request to the API
fetch(`${apiUrl}?city=${city}&apiKey=${apiKey}`)
    .then(response =>
    {
        // step 4: check if the request is succesful `.ok` means `status_code == 200`
        if(response.ok) {
            // step 5: parse data
            return response.Json();
        } else {
            throw new Error("Falied to fetch weather data.");
        }
    })
    .then(data => {
        const temperature = data.temperature;
        const weatherDescription = data.description;
        console.log(`The current temperatur in ${city} is ${temperature}°C. ${weatherDescription}.`);
    })
    .catch(error => {
        console.error(error.message);
    });
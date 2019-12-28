function getUserLocation() {
    const LOCATION_API_TOKEN = '2438c6f33c5dbd';

    return fetch(`https://ipinfo.io/json?token=${LOCATION_API_TOKEN}`)
        .then(res => res.json());
}

function getWeatherForecast(locationCoordinates) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const WEATHER_API_TOKEN = '7ea19e8e10159b02611bc4f0b01a90fc/';

    return fetch(`${proxy}https://api.darksky.net/forecast/${WEATHER_API_TOKEN}${locationCoordinates}`)
        .then(res => res.json());
}

function init() {
    getUserLocation()
        .then(location => {
            console.log('location: ', location);
            const { loc } = location;
            getWeatherForecast(loc)
                .then(forecast => {
                    console.log('forecast: ', forecast);
                });
        });
}

init();
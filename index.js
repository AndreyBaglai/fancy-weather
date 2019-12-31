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

function getBackgroundFoto() {
    //const proxy = 'https://cors-anywhere.herokuapp.com/';
    const PHOTO_API_TOKEN = 'd5fbdbc4ae0848723de931f78c74fb1622310a4dcbe00be8d17db8343b6f037b';

    return fetch(`https://api.unsplash.com/search/photos?query=dnipro&client_id=${PHOTO_API_TOKEN}`)
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
    getBackgroundFoto()
        .then(photos => {
            console.log('photos: ', photos);
        });
}

init();
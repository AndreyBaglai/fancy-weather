class Weather {
    getWeather(locationCoordinates, lang) {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const WEATHER_API_TOKEN = '7ea19e8e10159b02611bc4f0b01a90fc/';

        return fetch(
            `${proxy}https://api.darksky.net/forecast/${WEATHER_API_TOKEN}${locationCoordinates}?lang=${lang}&exclude=hourly,daily`
        ).then(res => res.json());
    }
}

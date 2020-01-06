class Weather {
    getWeather(locationCoordinates) {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const WEATHER_API_TOKEN = '7ea19e8e10159b02611bc4f0b01a90fc/';
    
        return fetch(`${proxy}https://api.darksky.net/forecast/${WEATHER_API_TOKEN}${locationCoordinates}`)
            .then(res => res.json());       
    }
}
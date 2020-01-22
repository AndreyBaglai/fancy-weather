class Geocoder {
    getGeoData(city) {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const GEOCODER_API_TOKEN = '77e74e7dec07433f987124688e11e311';

        return fetch(
            `${proxy}https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${GEOCODER_API_TOKEN}&_type=city&language=en`
        ).then(res => res.json());
    }
}

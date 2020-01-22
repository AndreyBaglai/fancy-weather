class Location {
    getLocation() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const LOCATION_API_TOKEN = '2438c6f33c5dbd';

        return fetch(
            `${proxy}https://ipinfo.io/geo?token=${LOCATION_API_TOKEN}`
        ).then(res => res.json());
    }
}

class Location {
    getLocation() {
        const LOCATION_API_TOKEN = '2438c6f33c5dbd';
    
        return fetch(`https://ipinfo.io/json?token=${LOCATION_API_TOKEN}`)
            .then(res => res.json());
    }
}
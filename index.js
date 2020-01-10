const root = document.getElementById('root');
let city;
let country;
let currentTime;

class App {
    init = () => {
        new Location()
            .getLocation()
            .then(location => {
                const { loc, city, country } = location;

                console.log('location: ', location);

                return Promise.all([
                    new Pictures().getPictures(city),
                    new Weather().getWeather(loc)
                ]);
            })
            .then(([pictures, weather]) => {
                sessionStorage.setItem('weather', JSON.stringify(weather));
                sessionStorage.setItem('pictures', JSON.stringify(pictures));
                console.log('pictures: ', pictures);
                console.log('weather: ', weather);

                currentTime = weather.currently.time;
                console.log('time', currentTime);
            });

        const controls = new Controls(new Search().markup).markup;
        const forecast = new Forecast(new Map().markup, {
            city,
            country,
            currentTime
        }).markup;

        root.innerHTML = `${controls}${forecast}`;
    };
}

/*function randomPicturesIndex(max) {
    return Math.floor(Math.random() * max);
}

refreshBtn.addEventListener('click', () => {
    const countPictures = JSON.parse(sessionStorage.getItem('picturesBg')).length;
    const randomIndex = randomPicturesIndex(countPictures);
    document.body.style.backgroundImage = `url(${JSON.parse(sessionStorage.getItem('picturesBg'))[randomIndex]}`;
});

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

function getBackgroundPhoto() {
   //const proxy = 'https://cors-anywhere.herokuapp.com/';
    const PHOTO_API_TOKEN = 'd5fbdbc4ae0848723de931f78c74fb1622310a4dcbe00be8d17db8343b6f037b';


    return fetch(`https://api.unsplash.com/search/photos?query=boston&client_id=${PHOTO_API_TOKEN}`)
        .then(res => res.json()); 
}

function init() {
    getUserLocation()
        .then(location => {
            console.log('location: ', location);
            const { loc } = location;
            getWeatherForecast(loc)
                .then(forecast => {
                    const { icon, temperature } = forecast.currently;
                    console.log('forecast: ', forecast);
                });
        });
    getBackgroundPhoto()
        .then(photos => {
            const picturesBody = photos.results.map(obj => {
                return obj.urls.raw;
            });

            sessionStorage.setItem('picturesBg', JSON.stringify(picturesBody));
            if (sessionStorage.getItem('picturesBg')) {
                console.log('From storage: ', JSON.parse(sessionStorage.getItem('picturesBg')));
            }


            const randomIndex = randomPicturesIndex(picturesBody.length);
            document.body.style.backgroundImage = `url(${JSON.parse(sessionStorage.getItem('picturesBg'))[randomIndex]}`;
            console.log('photos: ', picturesBody, randomIndex);
        });
}

init();*/

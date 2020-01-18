const root = document.getElementById('root');
let city;
let country;
let temperatureC;
let temperatureF;
let summary;
let windSpeed;
let humidity;
let icon;
let loc;

class App {
    init = () => {
        new Location()
            .getLocation()
            .then(location => {
                loc = location.loc;
                city = location.city;
                country = location.country;

                //console.log('location: ', location);

                return Promise.all([new Pictures().getPictures(city), new Weather().getWeather(loc, 'en')]);
            })
            .then(([pictures, weather]) => {
                sessionStorage.setItem('weather', JSON.stringify(weather));
                //console.log('weather: ', weather);

                const controls = new Controls(new Search().markup);

                temperatureF = Math.floor(weather.currently.temperature);
                temperatureC = controls.inCelsius(weather.currently.temperature);
                summary = weather.currently.summary;
                windSpeed = Math.floor(weather.currently.windSpeed);
                humidity = weather.currently.humidity;
                icon = weather.currently.icon;

                const forecast = new Forecast(new Map(loc).markup, {
                    city,
                    country,
                    temperatureC,
                    icon,
                    description: {
                        summary,
                        windSpeed,
                        humidity
                    }
                });

                const controlsHTML = controls.markup;
                const forecastHTML = forecast.markup;

                root.innerHTML = `${controlsHTML}${forecastHTML}`;
                const canvas = document.getElementById('icon');
                forecast.setIconWeather(icon, canvas);

                return pictures;
            })
            .then(pictures => {
                const picturesObj = new Pictures();
                const links = picturesObj.parsePictures(pictures);

                sessionStorage.setItem('links', JSON.stringify(links));
                document.body.style.backgroundImage = `url(${links[picturesObj.randomPicturesIndex(links.length)]})`;

                document.getElementById('refresh').addEventListener('click', (e) => {
                    const photos = JSON.parse(sessionStorage.getItem('links'));
                    document.body.style.backgroundImage = `url(${photos[picturesObj.randomPicturesIndex(photos.length)]})`;
                });
                //console.log('links: ', links);
            })
            .then(() => {
               const elMap = document.createElement('script'); 
               const GOOGLE_MAP_KEY = 'AIzaSyAMQPeEt9WfeEn3cxE6beEAhc1UqCSB8Mk';
               elMap.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&callback=initMap`;
               elMap.setAttribute('async', '');
               elMap.setAttribute('defer', '');
               
               document.body.appendChild(elMap);
            })
            .then(() => {
                document.getElementById('fahrenheit').addEventListener('click', (e) => {
                    e.target.classList.add('active-temperature');
                    document.getElementById('celsius').classList.remove('active-temperature');
                    const temp = temperatureF > 0 ? '+' + temperatureF : temperatureF;
                    document.getElementById('temperatureNumber').innerHTML = `${temp}`;
                });

                document.getElementById('celsius').addEventListener('click', (e) => {
                    e.target.classList.add('active-temperature');
                    document.getElementById('fahrenheit').classList.remove('active-temperature'); 
                    document.getElementById('temperatureNumber').innerHTML = `${temperatureC}`;
                });
            });
    };
}

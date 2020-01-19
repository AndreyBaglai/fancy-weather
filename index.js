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
                console.log('weather: ', weather);

                const controls = new Controls(new Search().markup);

                temperatureF = Math.floor(weather.currently.temperature);
                temperatureC = controls.inCelsius(weather.currently.temperature);
                summary = weather.currently.summary;
                windSpeed = Math.floor(weather.currently.windSpeed);
                humidity = weather.currently.humidity;
                icon = weather.currently.icon;

                const forecast = new Forecast(new googleMap(loc).markup, {
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

                document.getElementById('refresh').addEventListener('click', e => {
                    const photos = JSON.parse(sessionStorage.getItem('links'));
                    document.body.style.backgroundImage = `url(${photos[picturesObj.randomPicturesIndex(photos.length)]})`;
                });
                //console.log('links: ', links);
            })
            .then(() => {
                mapboxgl.accessToken = 'pk.eyJ1IjoibXVzdGFuZzExNyIsImEiOiJjazVrM3loZGMwOTlwM2RxaWw1b3Y3N2MxIn0.C0cjKBuxRm86J52WdF1WFw';

                const coord = loc.split(',');
                const latitude = +coord[0];
                const longitude = +coord[1];

                const map = new mapboxgl.Map({
                    container: 'mapApi',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [longitude, latitude],
                    zoom: 8
                });

                map.on('load', function() {
                    map.loadImage('https://cors-anywhere.herokuapp.com/https://i.pinimg.com/originals/86/fd/17/86fd17769a3b2537d2b028601cda7b92.png', function(error, image) {
                        if (error) throw error;

                        map.addImage('marker', image);
                        map.addLayer({
                            id: 'points',
                            type: 'symbol',
                            source: {
                                type: 'geojson',
                                data: {
                                    type: 'FeatureCollection',
                                    features: [
                                        {
                                            type: 'Feature',
                                            geometry: {
                                                type: 'Point',
                                                coordinates: [longitude, latitude]
                                            }
                                        }
                                    ]
                                }
                            },
                            layout: {
                                'icon-image': 'marker',
                                'icon-size': 0.1
                            }
                        });
                    });
                });
            })
            .then(() => {
                document.getElementById('fahrenheit').addEventListener('click', e => {
                    e.target.classList.add('active-temperature');
                    document.getElementById('celsius').classList.remove('active-temperature');

                    const temp = temperatureF > 0 ? '+' + temperatureF : temperatureF;

                    document.getElementById('temperatureNumber').innerHTML = `${temp}`;
                });

                document.getElementById('celsius').addEventListener('click', e => {
                    e.target.classList.add('active-temperature');

                    document.getElementById('fahrenheit').classList.remove('active-temperature');
                    document.getElementById('temperatureNumber').innerHTML = `${temperatureC}`;
                });
            });
    };
}
//const OPENCAGEDATA_MAP_KEY = '77e74e7dec07433f987124688e11e311';

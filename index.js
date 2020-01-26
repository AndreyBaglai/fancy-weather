let city;
let country;
let temperatureC;
let temperatureF;
let summary;
let windSpeed;
let humidity;
let icon;
let loc;
let pressure;
let visibility;

class App {
    constructor() {
        this.root = document.getElementById('root');

        this._picturesBody = new Pictures();
        this._weather = new Weather();
        this._location = new Location();
        this._geocoder = new Geocoder();
    }

    init = () => {
        this._location
            .getLocation()
            .then(location => {
                loc = location.loc;
                city = location.city;
                country = location.country;

                return Promise.all([this._picturesBody.getPictures(city), this._weather.getWeather(loc, 'en')]);
            })
            .then(([pictures, weather]) => {
                const controls = new Controls(new Search().markup);

                temperatureF = Math.floor(weather.currently.temperature);
                temperatureC = controls.inCelsius(weather.currently.temperature);

                summary = weather.currently.summary;
                windSpeed = Math.floor(weather.currently.windSpeed);
                humidity = weather.currently.humidity;
                icon = weather.currently.icon;
                pressure = Math.floor(weather.currently.pressure);
                visibility = Math.floor(weather.currently.visibility);

                const forecast = new Forecast(new Map(loc).markup, {
                    city,
                    country,
                    temperatureC,
                    icon,
                    pressure,
                    visibility,
                    description: {
                        summary,
                        windSpeed,
                        humidity
                    }
                });

                const controlsHTML = controls.markup;
                const forecastHTML = forecast.markup;

                this.root.innerHTML = `${controlsHTML}${forecastHTML}`;

                const canvas = document.getElementById('icon');
                forecast.setIconWeather(icon, canvas);

                return pictures;
            })
            .then(pictures => {
                const links = this._picturesBody.parsePictures(pictures);

                sessionStorage.setItem('links', JSON.stringify(links));
                document.body.style.backgroundImage = `url(${links[this._picturesBody.randomPicturesIndex(links.length)]})`;
            })
            .then(() => {
                const mapbox = new Map(loc);
                mapbox.createMapbox();
            })
            .then(() => {
                this.initHandlers();
            });
    };

    initHandlers() {
        this.onFahrenheit();
        this.onCelsius();
        this.onRefreshBtn();
        this.onSearchBtn();
        this.onSearchInput();
    }

    onSearchBtn() {
        document.getElementById('searchBtn').addEventListener('click', () => {
            const inputCity = document.getElementById('searchField').value;

            this._geocoder
                .getGeoData(inputCity)
                .then(geoData => {
                    if (!geoData.results.length) return;

                    loc = geoData.results[0].geometry.lat + ',' + geoData.results[0].geometry.lng;
                    city = inputCity;
                    country = geoData.results[0].components['ISO_3166-1_alpha-2'];

                    return Promise.all([this._picturesBody.getPictures(city), this._weather.getWeather(loc, 'en')]);
                })
                .then(([pictures, weather]) => {
                    const controls = new Controls(new Search().markup);

                    temperatureF = Math.floor(weather.currently.temperature);
                    temperatureC = controls.inCelsius(weather.currently.temperature);
                    summary = weather.currently.summary;
                    windSpeed = Math.floor(weather.currently.windSpeed);
                    humidity = weather.currently.humidity;
                    icon = weather.currently.icon;
                    pressure = Math.floor(weather.currently.pressure);
                    visibility = Math.floor(weather.currently.visibility);

                    const forecast = new Forecast(new Map(loc).markup, {
                        city,
                        country,
                        temperatureC,
                        icon,
                        pressure,
                        visibility,
                        description: {
                            summary,
                            windSpeed,
                            humidity
                        }
                    });

                    const controlsHTML = controls.markup;
                    const forecastHTML = forecast.markup;

                    this.root.innerHTML = `${controlsHTML}${forecastHTML}`;
                    const canvas = document.getElementById('icon');
                    forecast.setIconWeather(icon, canvas);

                    return pictures;
                })
                .then(pictures => {
                    const links = this._picturesBody.parsePictures(pictures);

                    sessionStorage.setItem('links', JSON.stringify(links));
                    document.body.style.backgroundImage = `url(${links[this._picturesBody.randomPicturesIndex(links.length)]})`;
                })
                .then(() => {
                    const mapbox = new Map(loc);
                    mapbox.createMapbox();
                })
                .then(() => {
                    this.initHandlers();
                })
                .catch((e) => {
                    this.invalidCity();
                });
        });
    }
    
    onSearchInput() {
        document.getElementById('searchField').addEventListener('change', () => {
            const inputCity = document.getElementById('searchField').value;

            this._geocoder
                .getGeoData(inputCity)
                .then(geoData => {
                    if (!geoData.results.length) return;

                    loc = geoData.results[0].geometry.lat + ',' + geoData.results[0].geometry.lng;
                    city = inputCity;
                    country = geoData.results[0].components['ISO_3166-1_alpha-2'];

                    return Promise.all([this._picturesBody.getPictures(city), this._weather.getWeather(loc, 'en')]);
                })
                .then(([pictures, weather]) => {
                    const controls = new Controls(new Search().markup);

                    temperatureF = Math.floor(weather.currently.temperature);
                    temperatureC = controls.inCelsius(weather.currently.temperature);
                    summary = weather.currently.summary;
                    windSpeed = Math.floor(weather.currently.windSpeed);
                    humidity = weather.currently.humidity;
                    icon = weather.currently.icon;
                    pressure = Math.floor(weather.currently.pressure);
                    visibility = Math.floor(weather.currently.visibility);

                    const forecast = new Forecast(new Map(loc).markup, {
                        city,
                        country,
                        temperatureC,
                        icon,
                        pressure,
                        visibility,
                        description: {
                            summary,
                            windSpeed,
                            humidity
                        }
                    });

                    const controlsHTML = controls.markup;
                    const forecastHTML = forecast.markup;

                    this.root.innerHTML = `${controlsHTML}${forecastHTML}`;
                    const canvas = document.getElementById('icon');
                    forecast.setIconWeather(icon, canvas);

                    return pictures;
                })
                .then(pictures => {
                    const links = this._picturesBody.parsePictures(pictures);

                    sessionStorage.setItem('links', JSON.stringify(links));
                    document.body.style.backgroundImage = `url(${links[this._picturesBody.randomPicturesIndex(links.length)]})`;
                })
                .then(() => {
                    const mapbox = new Map(loc);
                    mapbox.createMapbox();
                })
                .then(() => {
                    this.initHandlers();
                })
                .catch((e) => {
                    this.invalidCity();
                });
        });
    }

    invalidCity() {
        const msg = document.getElementById('invalidCity');
        const delay = 2000;

        msg.style.display = 'block';
        
        setTimeout(() => {
            msg.style.display = 'none';
            document.getElementById('searchField').value = '';
        }, delay);  
    }

    onFahrenheit() {
        document.getElementById('fahrenheit').addEventListener('click', e => {
            const temp = temperatureF > 0 ? '+' + temperatureF : temperatureF;
            document.getElementById('temperatureNumber').innerHTML = `${temp}`;

            e.target.classList.add('active-temperature');
            document.getElementById('celsius').classList.remove('active-temperature'); 
        });
    }

    onCelsius() {
        document.getElementById('celsius').addEventListener('click', e => {
            e.target.classList.add('active-temperature');

            document.getElementById('fahrenheit').classList.remove('active-temperature');
            document.getElementById('temperatureNumber').innerHTML = `${temperatureC}`;
        });
    }

    onRefreshBtn() {
        document.getElementById('refresh').addEventListener('click', () => {
            const links = JSON.parse(sessionStorage.getItem('links'));
            document.body.style.backgroundImage = `url(${links[this._picturesBody.randomPicturesIndex(links.length)]})`;
        });
    }
}

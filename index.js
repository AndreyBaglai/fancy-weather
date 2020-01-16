const root = document.getElementById('root');
let city;
let country;
let temperature;
let summary;
let windSpeed;
let humidity;
let icon;

class App {
    init = () => {
        new Location()
            .getLocation()
            .then(location => {
                const { loc } = location;
                city = location.city;
                country = location.country;

                console.log('location: ', location);

                return Promise.all([new Pictures().getPictures(city), new Weather().getWeather(loc, 'en')]);
            })
            .then(([pictures, weather]) => {
                sessionStorage.setItem('weather', JSON.stringify(weather));
                sessionStorage.setItem('pictures', JSON.stringify(pictures));
                console.log('pictures: ', pictures);
                console.log('weather: ', weather);

                const controls = new Controls(new Search().markup);

                temperature = controls.inCelsius(weather.currently.temperature);
                summary = weather.currently.summary;
                windSpeed = weather.currently.windSpeed;
                humidity = weather.currently.humidity;
                icon = weather.currently.icon;

                const forecast = new Forecast(new Map().markup, {
                    city,
                    country,
                    temperature,
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
            });
    };
}

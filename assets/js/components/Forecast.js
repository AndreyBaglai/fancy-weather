class Forecast {
    constructor(el, data) {
        this.markup = this.renderForecast(el, data);
    }

    renderForecast(map, data) {
        return `<main>
                    <div class="main-content grow">
                        <div class="black-bg">
                            <div class="state">
                                <p class="country">${data.country}, </p>
                                <p class="city">${data.city}</p>
                            </div>
                        </div>

                        <div class="black-bg">
                            <div class="current-date">
                                <p>${new Date(
                                    data.currentTime
                                ).toLocaleDateString()}<span class="time">${new Date(
            data.currentTime
        ).toLocaleTimeString()}</span></p>
                            </div>
                        </div>

                        <div class="black-bg">
                            <div class="forecast">
                                <div class="temperature-value">
                                    <div id="temperatureNumber">7</div>
                                    <div id="temperatureDegrees">&#176;</div>
                                </div>

                                <div class="description">
                                    <canvas id="icon"></canvas>
                                    <ul class="description-weather">
                                        <li>Text 1</li>
                                        <li>Text 2</li>
                                        <li>Text 3</li>
                                        <li>Text 4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    ${map}
                </main>`;
    }
}

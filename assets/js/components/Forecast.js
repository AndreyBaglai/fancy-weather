class Forecast {
    constructor(el) {
        this.markup = this.renderForecast(el);
    }

    renderForecast(map) {
        return `<main>
                    <div class="main-content grow">
                        <div class="black-bg">
                            <div class="state">
                                <p class="country">Ukrain,</p>
                                <p class="city">Dnipro</p>
                            </div>
                        </div>

                        <div class="black-bg">
                            <div class="current-date">
                                <p>Wed 25 December <span class="time">Time</span></p>
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
class Controls {
    constructor(el) {
        this.markup = this.renderControls(el);
    }

    renderControls(blockSearch) {
        return `<header class="controls">
                    <div class="black-bg grow">
                        ${this.renderRefreshBtn()}
                        ${this.renderTemperatureBtns()}                   
                    </div>
                    ${blockSearch} 
                </header>`;
    }

    renderRefreshBtn() {
        return `<button id="refresh" class="btn">Refresh</button>`;
    }

    renderTemperatureBtns() {
        return `<div id="temperatureBtns">
                    <button id="celsius" class="btn active-temperature">&#8451;</button>
                    <button id="fahrenheit" class="btn">&#8457;</button>
                </div>`;
    }

    inCelsius(val) {
        const celsius = (Math.ceil(((val - 32) * 5) / 9));
        return celsius > 0 ? '+' + celsius : celsius;
    }
}

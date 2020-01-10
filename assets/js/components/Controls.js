class Controls {
    constructor(el) {
        this.markup = this.renderControls(el);
    }

    renderControls(blockSearch) {
        return `<header class="controls">
                    <div class="black-bg grow">
                        ${this.renderRefreshBtn()}
                        ${this.renderSelectLang()}
                        ${this.renderTemperatureBtns()}                   
                    </div>
                    ${blockSearch} 
                </header>`;
    }

    renderRefreshBtn() {
        return `<button id="refresh" class="btn">Refresh</button>`;
    }

    renderSelectLang() {
        return `<div id="languages">
                    <select class="btn">
                        <option>RU</option>
                        <option>EN</option>
                    </select>
                </div>`;
    }

    renderTemperatureBtns() {
        return `<div id="temperatureBtns">
                    <button id="celsius" class="btn active-temperature">&#8451;</button>
                    <button id="fahrenheit" class="btn">&#8457;</button>
                </div>`;
    }
}

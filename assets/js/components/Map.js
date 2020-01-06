class Map {
    constructor() {
        this.markup = this.renderMap();
    }

    renderMap() {
        return `<div class="black-bg">
                    <div class="map">
                        <div class="mapApi">map</div>
                        <div class="coordinates">
                            <p class="latitude">Latitude: 58:1111</p>
                            <p class="longitude">Longitude: 58:1111</p>
                        </div>
                    </div>
                </div>`;
    }
}
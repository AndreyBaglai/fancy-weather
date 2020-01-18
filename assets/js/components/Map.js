class Map {
    constructor(coordinates) {
        this.markup = this.renderMap(coordinates);
    }

    renderMap(coordinates) {
        return `<div class="black-bg">
                    <div class="map">
                        <div id="mapApi"></div>
                        <div class="coordinates">
                            ${this.setCoordinates(coordinates)}
                        </div>
                    </div>
                </div>`;
    }

    setCoordinates(coordinates) {
        const coord = coordinates.split(',');
        const latitude = coord[0];
        const longitude = coord[1];

        return `
            <p class="latitude">Latitude: ${latitude}&#176; N</p>
            <p class="longitude">Longitude: ${longitude}&#176; W</p>`;
    }
}

function initMap() {
    const coord = loc.split(',');
    const latitude = +coord[0];
    const longitude = +coord[1];

    const options = {
        zoom: 8,
        center: { lat: latitude, lng: longitude }
    };

    const map = new google.maps.Map(document.getElementById('mapApi'), options);
    const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map
    });
}
class googleMap {
    constructor(coordinates) {
        const coord = coordinates.split(',');

        this.latitude = coord[0];
        this.longitude = coord[1];
        
        this.markup = this.renderMap();
    }

    renderMap() {
        return `<div class="black-bg">
                    <div class="map">
                        <div id="mapApi"></div>
                        <div class="coordinates">
                            ${this.setCoordinates()}
                        </div>
                    </div>
                </div>`;
    }

    setCoordinates() {
        return `
            <p class="latitude">Latitude: ${this.latitude}&#176; N</p>
            <p class="longitude">Longitude: ${this.longitude}&#176; W</p>`;
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
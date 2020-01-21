class Map {
    constructor(coordinates) {
        const coord = coordinates.split(',');

        this.latitude = +coord[0];
        this.longitude = +coord[1];

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

    createMapbox() {
        const MAPBOX_API_KEY = 'pk.eyJ1IjoibXVzdGFuZzExNyIsImEiOiJjazVrM3loZGMwOTlwM2RxaWw1b3Y3N2MxIn0.C0cjKBuxRm86J52WdF1WFw';
        
        mapboxgl.accessToken = MAPBOX_API_KEY;

        const map = new mapboxgl.Map({
            container: 'mapApi',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [this.longitude, this.latitude],
            zoom: 8
        });

        this.setMarker(map);
    }

    setMarker(map) {
        const self = this;
        const markerIcon = 'https://i.pinimg.com/originals/86/fd/17/86fd17769a3b2537d2b028601cda7b92.png';
        const proxy = 'https://cors-anywhere.herokuapp.com/';

        map.on('load', function() {
            map.loadImage(`${proxy}${markerIcon}`, function(error, image) {
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
                                        coordinates: [self.longitude, self.latitude]
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
    }
}

import Map from 'https://cdn.skypack.dev/ol/Map.js';
import View from 'https://cdn.skypack.dev/ol/View.js';
import TileLayer from 'https://cdn.skypack.dev/ol/layer/Tile.js';
import OSM from 'https://cdn.skypack.dev/ol/source/OSM.js';
import { fromLonLat } from 'https://cdn.skypack.dev/ol/proj.js';
import { createMarker } from './controller/markers.js';
import { createPopups, displayPopup } from './controller/popups.js';

const map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ],
    view: new View({
        center: fromLonLat([107.6098, -6.9175]),
        zoom: 12
    })
});

let markerCoords = [];
fetch('https://parkirgratis.github.io/data/marker.json')
    .then(response => response.json())
    .then(data => {
        if (data.markers && Array.isArray(data.markers)) {
            markerCoords = data.markers;
        } else {
            console.error('Marker data is not an array:', data);
        }
        console.log('Marker Coordinates:', markerCoords);

        createMapMarkers(markerCoords);
    })
    .catch(error => console.error('Error fetching marker data:', error));


let popupsData = [];
fetch('https://parkirgratis.github.io/data/lokasi.json')
    .then(response => response.json())
    .then(data => {
        if (Array.isArray(data)) {
            data.forEach(item => {
                if (item.lon && item.lat && item.nama_tempat && item.lokasi && item.fasilitas) {
                    popupsData.push({
                        coordinate: [item.lon, item.lat],
                        content: `
                            <div style="background-color: white; padding: 10px;">
                                <table>
                                    <tr>
                                        <th>${item.nama_tempat}</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>${item.lokasi}</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>${item.fasilitas}</th>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>`
                    });
                } else {
                    console.error('Invalid popup data item:', item);
                }
            });
        } else {
            console.error('Popup data is not an array:', data);
        }
        console.log('Popup Data:', popupsData);

        initializeMapPopups(popupsData);
    })
    .catch(error => console.error('Error fetching popup data:', error));

    let popups = [];

    function initializeMapPopups(popupsData) {
        popups = createPopups(map, popupsData);
    }

    function createMapMarkers(markerCoords) {
        const markers = markerCoords.map(coord => createMarker(map, coord));
        markers.forEach((marker, index) => {
            marker.getElement().addEventListener('click', () => {
                const popup = popups[index];
                const popupData = popupsData[index];
                if (popup && popupData && popupData.coordinate) {
                    displayPopup(popup, popupData.coordinate, popupData.content);
                } else {
                    console.error('Popup or popup data not found for marker index:', index);
                }
            });
        });
    }
    

map.on('click', function(event) {
    popups.forEach(popup => {
        popup.setPosition(null);
    });
});

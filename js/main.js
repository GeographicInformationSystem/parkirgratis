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

const markerCoords = [
    [107.57806170827054, -6.87616450819235], //alfamart 
    [107.57699001587744, -6.878240461265228],
    [107.57443704813844, -6.865543210439596],
    [107.58023768006228, -6.8739512071239846],
    [107.57674995307603, -6.879421693090783],
    [107.55090379994242, -6.862020504462997],
    [107.57613168830173, -6.8620573920747585],
    [107.69155583045713, -6.900889681458682]
];

const popupsData = [
    {
        coordinate: markerCoords[0],
        content: `
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg" id="iniTabel">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tr>
        <th scope="col" class="px-6 py-3">
            #ID
        </th>
        <th scope="col" class="px-6 py-3">
            #Nama
        </th>
        <th scope="col" class="px-6 py-3">
            #Lokasi
        </th>
        <th scope="col" class="px-6 py-3">
            #Fasilitas
        </th>
                </table>
            </div>`
    },
    {
      coordinate: markerCoords[1],
      content: `
          <div style="background-color: white; padding: 10px;">
              <table>
                  <tr>
                      <th>Alfamart sarimanah</th>
                      <td></td>
                  </tr>
                  <tr>
                      <th>Jl. Sarimanah Kel No.87, RT.04/RW.09,<br>
                       Sarijadi, Kec. Sukasari, Kota Bandung, 
                       Jawa Barat 40151</th>
                      <td></td>
                  </tr>
              </table>
          </div>`
  },
  {
    coordinate: markerCoords[2],
    content: `
        <div style="background-color: white; padding: 10px;">
            <table>
                <tr>
                    <th>Alfamart sarimanah</th>
                    <td></td>
                </tr>
                <tr>
                    <th>Jl. Sarimanah Kel No.87, RT.04/RW.09,<br>
                     Sarijadi, Kec. Sukasari, Kota Bandung, 
                     Jawa Barat 40151</th>
                    <td></td>
                </tr>
            </table>
        </div>`
},
{
  coordinate: markerCoords[3],
  content: `
      <div style="background-color: white; padding: 10px;">
          <table>
              <tr>
                  <th>Alfamart sarimanah</th>
                  <td></td>
              </tr>
              <tr>
                  <th>Jl. Sarimanah Kel No.87, RT.04/RW.09,<br>
                   Sarijadi, Kec. Sukasari, Kota Bandung, 
                   Jawa Barat 40151</th>
                  <td></td>
              </tr>
          </table>
      </div>`
},
{
  coordinate: markerCoords[4],
  content: `
      <div style="background-color: white; padding: 10px;">
          <table>
              <tr>
                  <th>Alfamart sarimanah</th>
                  <td></td>
              </tr>
              <tr>
                  <th>Jl. Sarimanah Kel No.87, RT.04/RW.09,<br>
                   Sarijadi, Kec. Sukasari, Kota Bandung, 
                   Jawa Barat 40151</th>
                  <td></td>
              </tr>
          </table>
      </div>`
},
{
  coordinate: markerCoords[5],
  content: `
      <div style="background-color: white; padding: 10px;">
          <table>
              <tr>
                  <th>Alfamart sarimanah</th>
                  <td></td>
              </tr>
              <tr>
                  <th>Jl. Sarimanah Kel No.87, RT.04/RW.09,<br>
                   Sarijadi, Kec. Sukasari, Kota Bandung, 
                   Jawa Barat 40151</th>
                  <td></td>
              </tr>
          </table>
      </div>`
},
{
  coordinate: markerCoords[6],
  content: `
      <div style="background-color: white; padding: 10px;">
          <table>
              <tr>
                  <th>Alfamart sarimanah</th>
                  <td></td>
              </tr>
              <tr>
                  <th>Jl. Sarimanah Kel No.87, RT.04/RW.09,<br>
                   Sarijadi, Kec. Sukasari, Kota Bandung, 
                   Jawa Barat 40151</th>
                  <td></td>
              </tr>
          </table>
      </div>`
},
{
  coordinate: markerCoords[7],
  content: `
      <div style="background-color: white; padding: 10px;">
          <table>
              <tr>
                  <th>Alfamart sarimanah</th>
                  <td></td>
              </tr>
              <tr>
                  <th>Jl. Sarimanah Kel No.87, RT.04/RW.09,<br>
                   Sarijadi, Kec. Sukasari, Kota Bandung, 
                   Jawa Barat 40151</th>
                  <td></td>
              </tr>
          </table>
      </div>`
},
{
  coordinate: markerCoords[8],
  content: `
      <div style="background-color: white; padding: 10px;">
          <table>
              <tr>
                  <th>Alfamart sarimanah</th>
                  <td></td>
              </tr>
              <tr>
                  <th>Jl. Sarimanah Kel No.87, RT.04/RW.09,<br>
                   Sarijadi, Kec. Sukasari, Kota Bandung, 
                   Jawa Barat 40151</th>
                  <td></td>
              </tr>
          </table>
      </div>`
},

  
    // Add other popup data here
];

const markers = markerCoords.map(coord => createMarker(map, coord));
const popups = createPopups(map, popupsData);

markers.forEach((marker, index) => {
    marker.getElement().addEventListener('click', () => {
        const popup = popups[index];
        displayPopup(popup, popupsData[index].coordinate, popupsData[index].content);
    });
});

map.on('click', function(event) {
    popups.forEach(popup => {
        popup.setPosition(null);
    });
});

import React, { Component } from "react";
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import omnivore from "@mapbox/leaflet-omnivore";

import meadSea from "../../geodata/medsea_zones.geo.json";
import ibi from "../../geodata/ibi_zones.json";
import blackSea from "../../geodata/blacksea.json";
import global from "../../geodata/global.topo_1.json";
import artic from "../../geodata/arctic_zone.topo.json";
import baltic from "../../geodata/baltic_zone.geo.json";
import nws from "../../geodata/nws_zone.geo.json";

const area = [
  {
    name:'arctic-ocean', bb:  [[44.59046718130883,-79.8046875],[87.25291244998124,100.546875]], aliases: ['arctic-ocean'], color: 'red'
  },
  {
    name: 'mediterranean-sea', bb: [[18.89589255941504,-7.55859375],[51.45400691005982,37.529296875]], aliases: ['mediterranean-sea'], color: 'blue'
  },
  {
    name:'iberian-biscay-irish', bb:[[25.48295117535531,-40.517578125],[55.677584411089505,4.5703125]], aliases: ['iberian-biscay-irish'], color: 'grey'
  },
  {
    name: 'north-sea', bb: [[48,-20],[62,13]], aliases: ['north-sea'], color: 'red'
  },
  {
    name: '', bb: [[48.45835188280866,-2.98828125],[68.97416358340674,42.099609375]], color: 'green'
  },
  {
    name: '', bb: [[-83.35951133035451,-166.640625],[83.52016238353205,194.0625]], color: 'green'
  },
  {
    name: '', bb: [[35.28150065789119,23.027343749999996],[50.20503326494332,45.57128906249999]], color: 'blue'
  },
  {
    name: 'north-atlantic-ocean', bb: [[-2.460181181020993,-81.9140625],[61.938950426660604,8.26171875]], aliases: ['north-atlantic-ocean', 'north-atlantic'], color: 'red'
  },
  {
    name: 'south-atlantic-ocean', bb: [[-62.59334083012023,-68.5546875],[1.0546279422758869,21.62109375]], aliases: ['south-atlantic-ocean', 'south-atlantic'], color: 'red'
  },
  {
    name: 'north-pacific-ocean', bb: [[-0.5273363048115043,-181.7578125],[62.83508901142283,-91.58203125]], aliases: ['north-pacific-ocean', 'north-pacific'], color: 'red'
  },
  {
    name: 'south-pacific-ocean', bb: [[-67.87554134672943,-151.171875],[-11.5230875068685,-60.99609375]], aliases: ['south-pacific-ocean', 'south-pacific'], color: 'red'
  },
  {
    name: 'tropical-atlantic-ocean', bb: [[-37.99616267972811,-64.6874],[37.71859032558815,25.48828124]], aliases: ['tropical-atlantic-ocean', 'tropical-atlantic'], color: 'red'
  },
  {
    name: 'tropical-pacific-ocean', bb: [[-35.317366329237856,-154.68749999999997],[40.3130432088809,-64.51171875]], aliases: ['tropical-pacific-ocean', 'tropical-pacific'], color: 'red'
  },
];
const layersActions = {
  zoneColorDefault: {color: '#004689', weight: 0, fillColor: '#004689', fillOpacity: .05, strokeOpacity: 0},
}
let activeZoneLayer = null;
// let zonesLayers =  
// {
//   medsea: { 
//     layer: omnivore.geojson(
//       'geodata/medsea_zones.geo.json', 
//       null, 
//       L.geoJson( null, {
//         style: layersActions.zoneColorDefault, 
//         // onEachFeature: function(feature, layer) { layersActions.onEachFeature(feature, layer) } 
//       })
//     )
//   },
//   ibi: {
//     layer: omnivore.geojson(
//       'geodata/ibi_zones.json', 
//       null, 
//       L.geoJson( null, {
//         style: layersActions.zoneColorDefault, 
//         // onEachFeature: function(feature, layer) { layersActions.onEachFeature(feature, layer) } 
//       })
//     )
//   },
//   blacksea: {
//     layer: omnivore.geojson(
//       'geodata/blacksea.json', 
//       null, 
//       L.geoJson( null, {
//         style: layersActions.zoneColorDefault, 
//         // onEachFeature: function(feature, layer) { layersActions.onEachFeature(feature, layer) } 
//       })
//     )
//   },
//   global: {
//     layer: omnivore.topojson(
//       'geodata/global.topo_1.json'/*'geodata/global.topo.json'*/,
//       null,
//       L.geoJson( null, {
//         style: layersActions.zoneColorDefault,
//         // onEachFeature: function(feature, layer) { layersActions.onEachFeature(feature,layer) }
//       }))
//   },
//   arctic: {
//     layer: omnivore.topojson(
//       'geodata/arctic_zone.topo.json',
//       null,
//       L.geoJson( null, {
//         style: layersActions.zoneColorDefault,
//         // onEachFeature: function(feature, layer) { layersActions.onEachFeature(feature,layer) }
//       })
//     )
//   },
//   balticsea: {
//     layer: omnivore.geojson(
//       'geodata/baltic_zone.geo.json',
//       null,
//       L.geoJson( null, {
//         style: layersActions.zoneColorDefault,
//         // onEachFeature: function(feature, layer) { layersActions.onEachFeature(feature,layer) }
//       })
//     )
//   },
//   nws: {
//     layer: omnivore.geojson(
//       'geodata/nws_zone.geo.json',
//       null,
//       L.geoJson( null, {
//         style: layersActions.zoneColorDefault,
//         // onEachFeature: function(feature, layer) { layersActions.onEachFeature(feature,layer) }
//       })
//     )
//   }
// }
const bounds = {
  'arctic': {name:'', bb:  [[44.59046718130883,-79.8046875],[87.25291244998124,100.546875]], aliases: ['arctic-ocean']},
  'medsea': {name: '', bb: [[18.89589255941504,-7.55859375],[51.45400691005982,37.529296875]], aliases: ['mediterranean-sea']},
  'ibi': {name:'', bb:[[25.48295117535531,-40.517578125],[55.677584411089505,4.5703125]], aliases: ['iberian-biscay-irish']},
  'nws': {name: '', bb: [[48,-20],[62,13]], aliases: ['north-sea']},
  'balticsea': {name: '', bb: [[48.45835188280866,-2.98828125],[68.97416358340674,42.099609375]]},
  'global': {name: '', bb: [[-83.35951133035451,-166.640625],[83.52016238353205,194.0625]]},
  'blacksea': {name: '', bb: [[35.28150065789119,23.027343749999996],[50.20503326494332,45.57128906249999]]},
  'NOA': {name: '', bb: [[-2.460181181020993,-81.9140625],[61.938950426660604,8.26171875]], aliases: ['north-atlantic-ocean', 'north-atlantic']},
  'SOA': {name: '', bb: [[-62.59334083012023,-68.5546875],[1.0546279422758869,21.62109375]], aliases: ['south-atlantic-ocean', 'south-atlantic']},
  'NPA': {name: '', bb: [[-0.5273363048115043,-181.7578125],[62.83508901142283,-91.58203125]], aliases: ['north-pacific-ocean', 'north-pacific']},
  'SPA': {name: '', bb: [[-67.87554134672943,-151.171875],[-11.5230875068685,-60.99609375]], aliases: ['south-pacific-ocean', 'south-pacific']},
  'inTA': {name: '', bb: [[-37.99616267972811,-64.6874],[37.71859032558815,25.48828124]], aliases: ['tropical-atlantic-ocean', 'tropical-atlantic']},
  'inTP': {name: '', bb: [[-35.317366329237856,-154.68749999999997],[40.3130432088809,-64.51171875]], aliases: ['tropical-pacific-ocean', 'tropical-pacific']}
};


export class LeafletMapView extends Component {


  componentDidMount() {
    document.getElementById('weathermap').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
    const initialCenter = new L.LatLng(0.94184, 13.71094);
    this.map = L.map('map').setView(initialCenter, 2);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    // this.geojsonLayer = L.geoJSON(data).addTo(this.map)
    for (let i = 0; i < area.length; i += 1) {
      L.circleMarker(area[i].bb[0], {
        radius: '2',
        color: area[i].color,
      }).addTo(this.map).bindPopup(area[i].name);
    }
    console.log('zone', meadSea);
    L.rectangle(bounds['medsea'].bb, {color: "#ff7800", weight: 1}).addTo(this.map);
    this.map.fitBounds(bounds['medsea'].bb);
  }

  componentWillReceiveProps(newProps) {
    // if (newProps.areas !== this.props.areas) {
    //   if (this.geojsonLayer) {
    //     this.geojsonLayer.removeFrom(this.map);
    //   }
    //   this.geojsonLayer = L.geoJSON(newProps.areas)
    //   .bindPopup(function (layer) {
    //     const { zone, name } = layer.feature.properties;
    //     return ( zone !== '' ? `[${zone}] ` : '' ) + name;
    //   });
    //   this.geojsonLayer.addTo(this.map);
    // }
  }


  // showZone(zone){
  //   if(null != activeZoneLayer && this.map.hasLayer(activeZoneLayer)) {
  //     this.map.removeLayer(activeZoneLayer);
  //   }
  //   if(zonesLayers[zone] && zonesLayers[zone].layer) {
  //     activeZoneLayer = zonesLayers[zone].layer;
  //     activeZoneLayer.addTo(this.map);
  //   }
  // }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div
        className='LeafletMap'
        id='weathermap'
        style={{
          width: '100 %',
          height: 'calc(100vh - 100px + 1rem)'
        }}
      />
    );
  }
}
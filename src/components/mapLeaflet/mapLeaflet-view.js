import React, { Component } from "react";
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const bounds = [
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


export class LeafletMapView extends Component {


  componentDidMount() {
    document.getElementById('weathermap').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
    this.map = L.map('map').setView([0,0], 2);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    // this.geojsonLayer = L.geoJSON(data).addTo(this.map)
    for (let i = 0; i < bounds.length; i += 1) {
      L.circleMarker(bounds[i].bb[0], {
        radius: '2',
        color: bounds[i].color,
      }).addTo(this.map).bindPopup(bounds[i].name);
    }
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
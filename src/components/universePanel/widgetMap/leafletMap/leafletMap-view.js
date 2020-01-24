import React, {Component} from "react";
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import {changeNameAreas} from "../../../../utils";
import meadSea from "../../../../geodata/medsea_zones.geo.json";
import ibi from "../../../../geodata/ibi_zones.json";
import blackSea from "../../../../geodata/blacksea.json";
import global from "../../../../geodata/global.geo.json";
import artic from "../../../../geodata/arctic_zone.geo.json";
import baltic from "../../../../geodata/baltic_zone.geo.json";
import nws from "../../../../geodata/nws_zone.geo.json";
import LabeledMarker from "leaflet-labeled-circle";

const bounds = [
  {name:'arctic', bb:  [[44.59046718130883,-79.8046875],[87.25291244998124,100.546875]], aliases: ['arctic-ocean']},
  {name: 'medsea', bb: [[18.89589255941504,-7.55859375],[51.45400691005982,37.529296875]], aliases: ['mediterranean-sea']},
  {name:'ibi', bb:[[25.48295117535531,-40.517578125],[55.677584411089505,4.5703125]], aliases: ['iberian-biscay-irish']},
  {name: 'nws', bb: [[48,-20],[62,13]], aliases: ['north-sea']},
  {name: 'balticsea', bb: [[48.45835188280866,-2.98828125],[68.97416358340674,42.099609375]]},
  {name: 'global', bb: [[-83.35951133035451,-166.640625],[83.52016238353205,194.0625]]},
  {name: 'blacksea', bb: [[35.28150065789119,23.027343749999996],[50.20503326494332,45.57128906249999]]},
  {name: 'NOA', bb: [[-2.460181181020993,-81.9140625],[61.938950426660604,8.26171875]], aliases: ['north-atlantic-ocean', 'north-atlantic']},
  {name: 'SOA', bb: [[-62.59334083012023,-68.5546875],[1.0546279422758869,21.62109375]], aliases: ['south-atlantic-ocean', 'south-atlantic']},
  {name: 'NPA', bb: [[-0.5273363048115043,-181.7578125],[62.83508901142283,-91.58203125]], aliases: ['north-pacific-ocean', 'north-pacific']},
  {name: 'SPA', bb: [[-67.87554134672943,-151.171875],[-11.5230875068685,-60.99609375]], aliases: ['south-pacific-ocean', 'south-pacific']},
  {name: 'inTA', bb: [[-37.99616267972811,-64.6874],[37.71859032558815,25.48828124]], aliases: ['tropical-atlantic-ocean', 'tropical-atlantic']},
  {name: 'inTP', bb: [[-35.317366329237856,-154.68749999999997],[40.3130432088809,-64.51171875]], aliases: ['tropical-pacific-ocean', 'tropical-pacific']}
];
const errorMarkers = {
  'ibi': [],
  'medsea': [],
  'global':[],
  'arctic':[],
  'balticsea':[],
  'nws': []
};
let geojsonMarkerOptions = {
  radius: 4,
  weight: 1,
  opacity: 1,
  fillOpacity: 0.5,
  color: 'red',
};

const labeled = {
  "type": "Feature",
  "properties": {
    "text": 'test',
    "labelPosition": [
      35, 22
    ]
  },
  "geometry": {
    "type": "Point",
    "coordinates": [ 35, 22 ]
  }
};

export class LeafletMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    area: this.props.area,
    currentFilters: this.props.filtersReducer,
    };
  }

  componentDidMount() {
    document.getElementById('weathermap').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
    const initialCenter = new L.LatLng(51.505, -0.09);
    this.map = L.map('map').setView(initialCenter, 2);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    const onEachFeature = function(feature, layer) {
      if(
          feature.properties 
          && feature.properties.NAME 
          && feature.properties.zoneCode 
          && (feature.properties.subZone 
          || feature.properties.subZoneAlias)
        ) {
          let bb = bounds['global'] && bounds['global'].bb;
          let _center;
          if(feature.properties.subZone.indexOf('pacific') !== -1) {          
            for(let i in bounds) {
              if(bounds[i].aliases && bounds[i].aliases.indexOf(feature.properties.subZone) !== -1) {
                bb = bounds[i].bb;
                _center = [(bb[0][0] + bb[1][0])/2 , (bb[0][1] + bb[1][1])/2];
                feature.properties.bb = bb;
              }
            }
          } else{
              bb = layer.getBounds();
            _center = bb.getCenter();
            feature.properties.bb = layer.getBounds();

          }
          if(feature.properties.subZoneAlias || feature.properties.subZoneAlias === feature.properties.subZone){

              let myIcon_1 = L.divIcon({
                className: 'ZoneIcon js-zoneIcon'+feature.properties.zoneCode , 
                html: '<span title="click to display the RMSD " id="di_'+feature.properties.subZoneAlias+'" class="ZoneIcon-subZone js-subZone--'+feature.properties.subZoneAlias+' is-hidden"></span>'
              });

              let m1 = L.marker(_center, {icon: myIcon_1});
              if(errorMarkers[feature.properties.zoneCode]) {
                errorMarkers[feature.properties.zoneCode].push(m1);
              }
              m1.on('click', function(){
                let pc = this._icon.firstChild.getAttribute('data-popup');
                if(pc) this.setPopupContent(pc.split('|').join('<br>'));
              })

              m1.bindPopup(
                feature.properties.NAME + '<div id="dip_'+ feature.properties.subZone +'" class="js-subZone--'+ feature.properties.subZoneAlias +'"></div>',
                {className: 'js-popupZoneError--'+feature.properties.zoneCode}
              )
              layer.bindPopup(
                feature.properties.NAME + '<div class="js-subZone--'+ feature.properties.subZoneAlias +'"></div>',
                {className: 'js-popupZone--'+feature.properties.zoneCode}
              )
          }else{
            let myIcon = L.divIcon({
              className: 'ZoneIcon js-zoneIcon'+feature.properties.zoneCode , 
              html: '<span title="click to display the RMSD " id="di_'+feature.properties.subZone+'" class="ZoneIcon-subZone js-subZone--'+feature.properties.subZone+' is-hidden"></span>'
            
            }); 
            let m = L.marker(_center, {icon: myIcon});
            if(errorMarkers[feature.properties.zoneCode]) {
              errorMarkers[feature.properties.zoneCode].push(m);
            }
            m.on('click', function(){
              console.log(this)
              let pc = this._icon.firstChild.getAttribute('data-popup');
              if(pc) this.setPopupContent(pc.split('|').join('<br>'));
            })

            m.bindPopup(
              feature.properties.NAME + '<div id="dip_'+ feature.properties.subZone +'" class="js-subZone--'+ feature.properties.subZone +'"></div>',
              {className: 'js-popupZoneError--'+feature.properties.zoneCode}
            )
            layer.bindPopup(
              feature.properties.NAME + '<div class="js-subZone--'+ feature.properties.subZone +'"></div>',
              {className: 'js-popupZone--'+feature.properties.zoneCode}
            )
          }
          if(feature.properties.subZoneAlias && feature.properties.subZoneAlias !== feature.properties.subZone){

            let myIcon2 = L.divIcon({
              className: 'ZoneIcon js-zoneIcon'+feature.properties.zoneCode , 
              html: '<span title="click to display the RMSD" id="di_'+feature.properties.subZone+'" class="ZoneIcon-subZone js-subZone--'+feature.properties.subZone+' is-hidden"></span>'
            });

            let m2 = L.marker(_center, {icon: myIcon2});
            if(errorMarkers[feature.properties.zoneCode]) {
              errorMarkers[feature.properties.zoneCode].push(m2);
            }
            m2.on('click', function(){
              let pc = this._icon.firstChild.getAttribute('data-popup');
              if(pc) this.setPopupContent(pc.split('|').join('<br>'));
            })

            m2.bindPopup(
              feature.properties.NAME +'<div id="dip_'+ feature.properties.subZone +'" class="js-subZone--'+ feature.properties.subZone +'"></div>',
              {className: 'js-popupZoneError--'+feature.properties.zoneCode}
            )
            layer.bindPopup(
              feature.properties.NAME +'<div class="js-subZone--'+ feature.properties.subZone +'"></div>',
              {className: 'js-popupZone--'+feature.properties.zoneCode}
            )
          }
      }
    }
    switch (this.props.area) {
      case 'medsea':
        L.geoJson( meadSea, {
          color: "yellow", weight: 1,
          onEachFeature: function(feature, layer) { onEachFeature(feature,layer) }
        }).addTo(this.map);
        this.showGeojsonMap('MED');
      break;
      case 'ibi':
        L.geoJson( ibi, {
          color: "yellow", weight: 1,
          onEachFeature(feature, layer) { onEachFeature(feature,layer) }
        }).addTo(this.map);
        this.showGeojsonMap('IBI');
      break;
      case 'blacksea':
        L.geoJson( blackSea, {
          color: "yellow", weight: 1,
          onEachFeature(feature, layer) { onEachFeature(feature,layer) }
        }).addTo(this.map);
        this.showGeojsonMap('BS');
      break;
      case 'global':
        L.geoJson( global, {
          color: "yellow", weight: 1,
          onEachFeature(feature, layer) { onEachFeature(feature,layer) }
        }).addTo(this.map);
        this.showGeojsonMap('GLO');
      break;
      case 'arctic':
        L.geoJson( artic, {
          color: "yellow", weight: 1,
          onEachFeature(feature, layer) { onEachFeature(feature,layer) }
        }).addTo(this.map);
        this.showGeojsonMap('ARC');
      break;
      case 'balticsea':
        L.geoJson( baltic, {
          color: "yellow", weight: 1,
          onEachFeature(feature, layer) { onEachFeature(feature,layer) }
        }).addTo(this.map);
        this.showGeojsonMap('BAL');
      break;
      case 'nws':
        L.geoJson( nws, {
          color: "yellow", weight: 1,
          onEachFeature(feature, layer) { onEachFeature(feature,layer) }
        }).addTo(this.map);
        this.showGeojsonMap('NWS');
      break;
      default:
        L.geoJson( global, {
          color: "yellow", weight: 1,
          onEachFeature(feature, layer) { onEachFeature(feature,layer) }
        }).addTo(this.map);
        this.showGeojsonMap('GLO');
      break;
    }
  }

  componentDidUpdate() {
    if(this.state.area !== this.props.area) {
      this.setState({ area: this.props.area});
    }
    this.componentDidMount();
  }

  async showGeojsonMap() {
    if(this.props.showFloats) {
      new LabeledMarker(
        labeled.geometry.coordinates.slice().reverse(),
        labeled, {
          markerOptions: { color: '#050' }
        }).bindPopup('test').addTo(this.map);
    }
    const product = this.state.currentFilters && this.state.currentFilters.product.toUpperCase();
    const result = await import('../../../../errors/result.json');
    const errorsFile = await import('../../../../errors/CLASS2/'+changeNameAreas(this.props.area)+'/'+product+'.json');
    // Use Props and product
    const imgfiles = await import('../../../../plots_class2/BAL/resize/FehmarnBelt_BALTICSEA_ANALYSIS_FORECAST_PHYS_003_006.png');
    // const imgfiles = await import('../../../../plots_class2/'+'BAL'+'/resize/FehmarnBelt_'+this.state.currentFilters && this.state.currentFilters.product.toUpperCase()+'.png');
    //Use Props and product
    if(this.props.showFloats) {
      this.pointToLayer(errorsFile, imgfiles);
    }
  };

  pointToLayer(latlng, imgfiles) {
    const customOptions =
      {
        'maxWidth': '900',
        'maxHeight': '600',
      }
      latlng.features.map((data) => {
        let rmsd = data.properties.rmse;
        if (rmsd <= 0.3) {
          geojsonMarkerOptions.color = "green"
        }
        if (rmsd > 0.3 && rmsd <= 0.5) {
          geojsonMarkerOptions.color = "yellow"
        }
        if (rmsd > 0.5 && rmsd <= 1) {
          geojsonMarkerOptions.color = "orange"
        }
        if (rmsd > 1 ) {
          geojsonMarkerOptions.color = "red"
        }
        const sizeImg = this.props.open ? "700px" : "350px";
        const popupText = "<b>Ref:</b> " + data.properties.NAME.bold() +
          "<br><b>RMSD:</b> " + data.properties.rmse.toFixed(2) +
          "<br><b>Corr:</b> " + data.properties.correlation.toFixed(2) +
          "<br><b>Variance explained:</b> " + data.properties.variance_exp.toFixed(2) +
          "<br><b>Scatter index:</b> " + data.properties.scatter_index.toFixed(2) +
          "<img src=" + imgfiles.default + " width=" + sizeImg + "/>";
        return L.circleMarker(data && data.geometry && data.geometry.coordinates,geojsonMarkerOptions).bindPopup(popupText, customOptions).addTo(this.map)
      }
    )
  };

  render() {
    return (
      <div
        className='LeafletMap'
        id='weathermap'
        style={{
          width: '100%',
          height: !this.props.open ? '80%' : '90%',
        }}
      />
    );
  }
}
import React from "react";
import Card from "./widgetMap-styles";
import LeafletMap from "./leafletMap";
import {Widget} from './../widget';

export function WidgetMapView(props){
  return (
    <Card>
      <Widget 
        title="Estimated Accuracy Numbers Cartography"
        smallContent={<LeafletMap />}
        bigContent={<LeafletMap />}
      />
    </Card>
  );
}
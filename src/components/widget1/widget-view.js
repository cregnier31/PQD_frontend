import React from "react";
import Card from "./widget-styles";
import {LeafletMap} from "../mapLeaflet";

export function WidgetView(props){
  return (
    <div>
      <Card>
        <LeafletMap />
      </Card>
    </div>
  );
}
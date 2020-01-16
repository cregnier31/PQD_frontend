import React from "react";
import Card from "./widgetMap-styles";
import LeafletMap from "./leafletMap";
import { makeStyles } from '@material-ui/core/styles';
import {Widget} from './../widget';

const useStyles = makeStyles(theme => ({
  right: {
    float: 'right',
  },
  left: {
    float: 'left',
    marginLeft: '10px'
  },
  content: {
    height: '100% !important',
    marginTop: '0px !important',
    marginBottom: '0px !important',
  },
}));

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
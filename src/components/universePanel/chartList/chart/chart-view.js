import React, { useState } from "react";
import Card from "./chart-styles";
import {Widget} from './../../widget';
import {ChartContent} from './chartContent';

export function ChartView(props){
  const [see_all, setSeeAll] = useState(true)

  if( typeof(props.data) ==="undefined"){
    return (<Card><Widget title="No Data" smallContent={null} bigContent={null} /></Card>);
  }

  const toggle = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSeeAll(value);
  }

  return (
    <Card>
      <Widget 
        title={props.kind}
        smallContent={<ChartContent see_all={see_all} height={200} width={350} data={props.data} />}
        bigContent={<ChartContent see_all={see_all} height={500} width={750} data={props.data} />}
      />
      <label>
        See all variable :
        <input name="see_all" type="checkbox" checked={see_all} onChange={toggle} />
      </label>
    </Card>
  );
}
import React, { useState } from "react";
import Card from "./chart-styles";
import {Widget} from './../../widget';
import './../../../../../node_modules/react-vis/dist/style.css';
import {ChartContent} from './chartContent';

export function ChartView(props){
  const [see_all, setSeeAll] = useState(false)

  if( typeof(props.data) ==="undefined"){
    return (<Card><Widget title="No Data" smallContent={null} bigContent={null} /></Card>);
  }

  const data = props.data.map((item) => {
    return item.content
  })

  const toggle = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSeeAll(value);
  }

  return (
    <Card>
      <Widget 
        title={props.kind}
        smallContent={<ChartContent see_all={see_all} height={200} width={350} data={data} />}
        bigContent={<ChartContent see_all={see_all} height={500} width={750} data={data} />}
      />
      <label>
        See all variable :
        <input name="see_all" type="checkbox" checked={see_all} onChange={toggle} />
      </label>
    </Card>
  );
}
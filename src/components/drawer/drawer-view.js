import React from "react";
import Drawer from "./drawer-styles";

export function FooterView(props){
  return (
    <div>
      <Drawer
        variant="permanent"
        open
        className={'drawer'}
      >
        FILTERS
      </Drawer>
    </div>
  );
}
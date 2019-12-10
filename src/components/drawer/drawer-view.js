import React from "react";
import Drawer from "./drawer-styles";

export function DrawerView(props){
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
import React from "react";
import Grid from '@material-ui/core/Grid';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WebIcon from '@material-ui/icons/Web';

export function LinkRawView(props){
  return (
      <Grid container direction="row" alignItems="flex-start">
        <Grid item xs={4} md={4}>
          Sous titre
        </Grid>
        <Grid item xs={4} md={4}>
          <MenuBookIcon />
          Catalogue
        </Grid>
        <Grid item xs={4} md={4}>
          <WebIcon />
          Site producteur
        </Grid>
      </Grid>
  );
}
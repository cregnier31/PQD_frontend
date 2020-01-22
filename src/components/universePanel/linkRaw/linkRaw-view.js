import React from "react";
import Grid from '@material-ui/core/Grid';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WebIcon from '@material-ui/icons/Web';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'ccl-heading--h3'
  },
}));

export function LinkRawView(props){
  const classes = useStyles();
  return (
      <Grid container direction="row" alignItems="flex-start">
        <Grid item xs={4} md={4}>
        <Typography className={classes.title}>Sous titre</Typography>
        </Grid>
        <Grid item xs={4} md={4}>
          <Typography className={classes.title}>
            <MenuBookIcon />
            Catalogue
          </Typography>
        </Grid>
        <Grid item xs={4} md={4}>
          <Typography className={classes.title}>
            <WebIcon />
            Site producteur
          </Typography>
        </Grid>
      </Grid>
  );
}
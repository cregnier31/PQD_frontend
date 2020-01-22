import React from "react";
import Grid from '@material-ui/core/Grid';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WebIcon from '@material-ui/icons/Web';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  titleLeft: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'ccl-heading--h3',
    float: 'left',
    marginLeft: '10px'
  },
  titleRight: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'ccl-heading--h3',
    float: 'left',
  },
  root: {
    display: 'inline-flex'
  }
}));

export function LinkRawView(props){
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center" className={classes.root}>
      <Grid item xs={6} md={6}>
        <Typography className={classes.titleLeft}>Sous titre</Typography>
      </Grid>
      <Grid item xs={1} md={1} style={{marginTop: '5px', marginRight: '5px'}} justify="flex-end">
        <MenuBookIcon />
      </Grid>
      <Grid item xs={1} md={1} style={{marginRight: '10px'}} justify="flex-end">
        <p className={classes.titleRight}>Catalogue</p>
      </Grid>
      <Grid item xs={1} md={1} style={{marginTop: '7px', marginRight: '5px'}} justify="flex-end">
        <WebIcon />
      </Grid>
      <Grid item xs={2} md={2}style={{marginRight: '5px'}} justify="flex-end">
        <p className={classes.titleRight}>Site producteur</p>
      </Grid>
    </Grid>


// <Grid container direction="row" className={classes.root}>
//         <Grid item xs={6} md={6}>
//         <Typography className={classes.titleLeft}>Sous titre</Typography>
//         </Grid>
//         <Grid item xs={6} md={6}>
//           <Typography className={classes.site}>
//             <WebIcon style={{marginRight: '10px'}}/>
//             Site producteur
//           </Typography>
//           <Typography className={classes.catalogue}>
//             <MenuBookIcon style={{marginRight: '10px'}} />
//             Catalogue
//           </Typography>
//         </Grid>
//       </Grid>

  );
}
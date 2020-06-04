import React from "react";
import Grid from '@material-ui/core/Grid';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WebIcon from '@material-ui/icons/Web';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { colorUniverses } from './../../../utils';
import { color } from './../../../utils';

const useStyles = makeStyles(theme => ({
  titleLeft: {
    fontFamily: 'ccl-heading--h3',
    float: 'left',
    marginLeft: '20px',
    fontWeight: 700,
    fontSize: 20,
    marginTop: 25,
    marginLeft: 50
  },
  titleRight: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 'bold',
    fontFamily: 'ccl-heading--h3',
    float: 'left'
  },
  root: {
    display: 'inline-flex',
    width: '100%',
    marginTop: '10px'
  },
  root2: {
    width: '100%',
    marginTop: '-1.6em',
    marginLeft: '3em',
  },
  iconsSite: {
    float: 'left',
    marginTop: '1px',
    marginRight: '5px'
  },
  iconsCatalogue: {
    float: 'left',
    marginTop: '3px',
    marginRight: '5px'
  }
}));

export function LinkRawView(props){
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="row" alignItems="center" justify="flex-start" className={classes.root}>
        <Grid item xs={12} md={12}>
          <Typography className={classes.titleLeft} data-tut="reactour__11" style={{color: '#273b4b'}}>Quality information for product: {props.product ? props.product : ''} </Typography>
        </Grid>
        <Grid item xs={12} md={12} className={classes.root} data-tut="reactour__6">
          <div className={classes.title} style={{backgroundColor: '#A4A4B2', marginLeft: 50, width: '94.5%', height: 1.85, marginTop: 8}}></div>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="center" justify="flex-end" className={classes.root2} data-tut="reactour__12">
        {typeof(props.data.catalogue_url) !== 'undefined' && props.data.catalogue_url !== null && 
          <Grid item xs={5} md={2} >
            <MenuBookIcon className={classes.iconsSite} style={{color: color[props.universe]['background']}} />
            <Typography className={classes.titleRight} style={{color: colorUniverses(props.universe)}}>
              <a style={{color: color[props.universe]['background'], textDecoration: 'none'}} href={props.data.catalogue_url}>Catalogue</a>
            </Typography>
          </Grid>
        }
        {typeof(props.data.documentation_url) !== 'undefined' && props.data.documentation_url !== null &&
          <Grid item xs={7} md={4}>
            <WebIcon className={classes.iconsCatalogue} style={{color: colorUniverses(props.universe)}}/>
            <Typography className={classes.titleRight} style={{color: colorUniverses(props.universe)}}>
              <a style={{color: colorUniverses(props.universe), textDecoration: 'none'}} href={props.data.documentation_url}>Site producteur</a>
            </Typography>
          </Grid>
        }
      </Grid>
    </div> 
  );
}

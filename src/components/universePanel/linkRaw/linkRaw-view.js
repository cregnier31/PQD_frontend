import React from "react";
import Grid from '@material-ui/core/Grid';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WebIcon from '@material-ui/icons/Web';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {producers} from '../../../utils'

const useStyles = makeStyles(theme => ({
  titleLeft: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'ccl-heading--h3',
    float: 'left',
    marginLeft: '20px',
  },
  titleRight: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'ccl-heading--h3',
    float: 'left',
  },
  root: {
    display: 'inline-flex',
    width: '50%',
    marginTop: '10px'
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
  console.log('props', props)
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="row" alignItems="center" justify="flex-start" className={classes.root}>
        <Grid item xs={12} md={8}>
          <Typography className={classes.titleLeft} data-tut="reactour__11">Quality information for product: {props.product ? props.product : ''} </Typography>
        </Grid>
      </Grid>

      <Grid container direction="row" alignItems="center" justify="flex-end" className={classes.root} data-tut="reactour__12">
        <Grid item xs={5} md={3}>
          <MenuBookIcon className={classes.iconsSite} />
          <Typography className={classes.titleRight}>
            Catalogue
          </Typography>
        </Grid>
        <Grid item xs={7} md={4}>
          <WebIcon className={classes.iconsCatalogue}/>
          <Typography className={classes.titleRight}>
            <a style={{color: 'black', textDecoration: 'none'}} href={producers(props.area)}>Site producteur</a>
          </Typography>
        </Grid>
      </Grid>
    </div> 
  );
}
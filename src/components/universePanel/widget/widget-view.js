import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import InfoIcon from '@material-ui/icons/Info';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
const screen = window.screen.width;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '94%',
    height: '80%',
    marginLeft: 10,
  },
  content1: {
    height: '80% !important',
    width: '90%',
    marginLeft: '6em',
    marginTop: '5em',
  },
  content2: {
    height: '80% !important',
    width: '90%',
    marginLeft: '6em',
    border: '5px solid #187EA0',
    marginTop: '5em',
  },
  buttinfo: {
    float: 'left',
    marginTop: '0.2em',
    marginLeft: '0.4em',
    color: '#9E1033',
  },
  right: {
    float: 'right',
    marginTop: 0,
    marginRight: '0.2em',
    color: '#187EA0',
  },
  right2: {
    float: 'right',
    marginTop: '1em',
    marginRight: '1.5em',
    color: '#187EA0',
  },
  image: {
    objectFit: 'cover',
  },
  title: {
    fontSize: 15,
  }
}));

export function WidgetView(props){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const margin = (name) => {
    if(name === 'Forecast uncertainty' && screen > 1900) {
      return '80px'
    }
    if(name === 'Estimated Accuracy Numbers time series' && screen > 1900 ) {
      return '40px'
    }
  }

  return (
    <div>
      <div className={classes.buttinfo}>
        <Tooltip title={props.info ? props.info : ''}>
          <InfoIcon />
        </Tooltip>
      </div>
      <div className={classes.right}>
        <ZoomOutMapIcon onClick={handleOpen} />
        {/* <GetAppIcon /> */}
      </div>
      <Grid container className={classes.root} direction="row" justify="center">
        <Grid item xs={props.title.length > 30 ? 10 : 7} md={props.title.length > 30 ? 10 : 7}>
          <div style={{fontSize: '18px', color: '#273b4b', marginTop: '-1.6em', marginBottom: '1em', fontFamily: 'ccl-heading--h5', marginLeft: 15}}>
            {props.title}
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={12}>
          {!open && props.smallContent}
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <DialogContent className={classes.content1}>
          <Card className={classes.content2}>
            <CloseIcon className={classes.right2} onClick={handleClose} />
            <Grid container className={classes.root} justify="center" alignItems="center">
              <Grid item xs={12} md={12}>
                {open && props.bigContent }
              </Grid>
            </Grid>
          </Card>
        </DialogContent>
      </Modal>
    </div>
  );
}

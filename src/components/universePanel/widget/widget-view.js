import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import InfoIcon from '@material-ui/icons/Info';
import GetAppIcon from '@material-ui/icons/GetApp';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100%'
  },
  content: {
    height: '100% !important',
    marginTop: '0px !important',
    marginBottom: '0px !important',
  },
  right: {
    float: 'right'
  },
  image: {
    objectFit: 'cover',
},
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

  return (
    <div>
      <Grid container className={classes.root} direction="row" justify="space-between">
        <Grid item xs={10} md={10}>
          {props.title}
          <Tooltip title={props.info ? props.info : ''}>
            <InfoIcon />
          </Tooltip>
        </Grid>
        <Grid item xs={2} md={2}>
          <FullscreenIcon onClick={handleOpen} />
          <GetAppIcon />
        </Grid>
      </Grid>
      <Grid container className={classes.root}>
        <Grid item xs={10} md={10}>
        {!open && props.smallContent}
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <DialogContent className={classes.content}>
          <Card className={classes.content}>
            <CloseIcon className={classes.right} onClick={handleClose} />
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
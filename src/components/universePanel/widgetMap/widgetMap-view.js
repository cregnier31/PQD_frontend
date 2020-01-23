import React from "react";
import Card from "./widgetMap-styles";
import {LeafletMap} from "./leafletMap";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import InfoIcon from '@material-ui/icons/Info';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import GetAppIcon from '@material-ui/icons/GetApp';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  right: {
    float: 'right',
  },
  left: {
    float: 'left',
    marginLeft: '10px',
    fontFamily: 'ccl-heading--h5',
    fontSize: '20px'
  },
  content: {
    height: '100% !important',
    marginTop: '0px !important',
    marginBottom: '0px !important',
  },
  label: {
    fontSize: '20px',
    fontFamily: 'ccl-paragraph--ms'
  }
}));

export function WidgetMapView(props){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [showFloats, setShowFloats] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggle = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setShowFloats(value);
  }
  return (
    <div>
      <Card>
        <div className={classes.left}>
          Estimated Accuracy Numbers Cartography
          <InfoIcon style={{ marginLeft: '5px'}}/>
        </div>
        <div className={classes.right}>
          <FullscreenIcon onClick={handleOpen} />
          <GetAppIcon />
        </div>
        {!open && 
          <LeafletMap open={open} showFloats={showFloats} />
        }
        <div>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-end"
            style={{height: '85%', marginTop: '30px'}}
          >
            <Grid container item xs={6} md={6}>
            <label className={classes.label} >
              Show all parameters :
              <input name="see_all" type="checkbox" checked={showFloats} onChange={toggle} />
            </label>
            </Grid>
          </Grid>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <DialogContent className={classes.content}>
            <Card className={classes.content}>
              <CloseIcon className={classes.right} onClick={handleClose} />
              <LeafletMap open={open} showFloats={showFloats} />
              <div>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-end"
                  style={{height: '85%', marginTop: '30px'}}
                >
                  <Grid container item xs={6} md={6}>
                  <label className={classes.label} >
                    Show all parameters :
                    <input name="see_all" type="checkbox" checked={showFloats} onChange={toggle} />
                  </label>
                  </Grid>
                </Grid>
              </div>
            </Card>
          </DialogContent>
        </Modal>
      </Card>
    </div>
  );
}
import React from "react";
import Card from "./widgetMap-styles";
import {LeafletMap} from "./leafletMap";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import InfoIcon from '@material-ui/icons/Info';
import GetAppIcon from '@material-ui/icons/GetApp';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  right: {
    float: 'right',
  },
  left: {
    float: 'left',
    marginLeft: '10px'
  },
  content: {
    height: '100% !important',
    marginTop: '0px !important',
    marginBottom: '0px !important',
  },
}));

export function WidgetMapView(props){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickPopover = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Card>
        <div className={classes.left}>
          Estimated Accuracy Numbers Cartography
          <InfoIcon style={{ marginLeft: '5px'}}/>
        </div>
        <div className={classes.right}>
          <FullscreenIcon onClick={handleOpen} />
          <GetAppIcon onClick={handleClickPopover} />
        </div>
        {!open && 
          <LeafletMap open={open} />
        }
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <DialogContent className={classes.content}>
            <Card className={classes.content}>
              <CloseIcon className={classes.right} onClick={handleClose} />
              <LeafletMap open={open} />
            </Card>
          </DialogContent>
        </Modal>
      </Card>
    </div>
  );
}
import React from "react";
import Card from "./widget-styles";
import {LeafletMap} from "../mapLeaflet";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import InfoIcon from '@material-ui/icons/Info';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  right: {
    float: 'right',
  },
  left: {
    float: 'left',
  },
  content: {
    height: '100% !important',
    marginTop: '0px !important',
    marginBottom: '0px !important',
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

  return (
    <div>
      <Card>
        <div className={classes.left}>
          title
          <InfoIcon />
        </div>
        <div className={classes.right}>
          <FullscreenIcon onClick={handleOpen} />
          <MoreVertSharpIcon />
        </div>
        {!open && 
          <LeafletMap area={props.area} />
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
              <LeafletMap area={props.area} />
            </Card>
          </DialogContent>
        </Modal>
      </Card>
    </div>
  );
}
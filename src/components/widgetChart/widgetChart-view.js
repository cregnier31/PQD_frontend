import React from "react";
import Card from "./widgetChart-styles";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import InfoIcon from '@material-ui/icons/Info';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  right: {
    float: 'right',
  },
  left: {
    float: 'left',
    marginLeft: '10px'
  },
  header: {
    height: '10%',
  },
  content: {
    height: '100% !important',
    marginTop: '0x !important',
    marginBottom: '0px !important',
  },
  divider: {
    width: '100% !important',
  },
}));

export function WidgetChartView(props){
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
        <div className={classes.header}>
          <div className={classes.left}>
            Title
            <InfoIcon style={{ marginLeft: '5px'}}/>
          </div>
          <div className={classes.right}>
            <FullscreenIcon onClick={handleOpen} />
            <MoreVertSharpIcon />
          </div>
        </div>
        <Divider className={classes.divider} />
        {!open &&
          <div className={classes.content}>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
          </div>
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
            </Card>
          </DialogContent>
        </Modal>
      </Card>
    </div>
  );
}
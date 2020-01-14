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
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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

export function WidgetView(props){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [area, setArea] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickPopover = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const getArea = (value) => {
    setArea(value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const openAnchor = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Card>
        <div className={classes.left}>
          Title
          <InfoIcon style={{ marginLeft: '5px'}}/>
        </div>
        <div className={classes.right}>
          <FullscreenIcon onClick={handleOpen} />
          <MoreVertSharpIcon onClick={handleClickPopover} />
          <Popover
            id={id}
            open={openAnchor}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'left',
            }}
          >
            <List className={classes.list}>
              <ListItem button key='partager'>
                Partager
              </ListItem>
              <ListItem button key='doc'>
                  Partager
              </ListItem>
              <ListItem button key='imprimer'>
                Partager
              </ListItem>
            </List>
          </Popover>
        </div>
        {!open && 
          <LeafletMap area={props.area} getArea={getArea} />
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
              <LeafletMap area={area} />
            </Card>
          </DialogContent>
        </Modal>
      </Card>
    </div>
  );
}
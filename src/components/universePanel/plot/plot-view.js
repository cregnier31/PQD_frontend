import React from "react";
import Card from "./plot-styles";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import InfoIcon from '@material-ui/icons/Info';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import Popover from '@material-ui/core/Popover';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { config } from './../../../utils';

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

function ImagePlot(props){
  return(
    <img 
      src={config['urls']['png']+props.data}
      alt="Plot"
    />
  )
}

export function PlotView(props){
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
  const openAnchor = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
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
        </div>
        <Divider className={classes.divider} />
        {!open &&
          <div className={classes.content}>
            <ImagePlot data={props.data}/>
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
              <ImagePlot data={props.data}/>
            </Card>
          </DialogContent>
        </Modal>
      </Card>
    </div>
  );
}
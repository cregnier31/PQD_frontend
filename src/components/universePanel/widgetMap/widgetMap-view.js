import React from "react";
import Card from "./widgetMap-styles";
import {LeafletMap} from "./leafletMap";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
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
    float: 'Left',
    marginTop: -30,
    marginLeft: 10,
    color: '#9E1033',
  },
  right: {
    float: 'right',
    marginTop: '-1.3em',
    marginRight: '0.15em',
    color: '#187EA0',
  },
  right2: {
    float: 'right',
    marginTop: '0.3em',
    marginRight: '0.4em',
    color: '#187EA0',
  },
  left: {
    fontFamily: 'ccl-font',
    fontSize: '18px',
    color: '#273b4b',
    textAlign: 'center',
    marginTop: 10,
  },
  content: {
    height: '90% !important',
    width: '95%',
    marginTop: '5em',
    marginLeft: '3em'
  },
  click: {
    float: 'left',
    marginTop: '0.35em',
    marginRight: '0.6em'
  },
  click2: {
    float: 'left',
    marginTop: '0.8em',
    marginRight: '-0.7em'
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'ccl-paragraph--ms',
    color: '#9E1033',
    marginTop: '-1.15em',
    marginLeft: '1.4em'
  },
  label2: {
    fontSize: '22px',
    fontWeight: 'bold',
    fontFamily: 'ccl-paragraph--ms',
    color: '#9E1033',
    marginTop: '-0.75em',
    marginLeft: '1.4em'
  }
}));

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 33,
    height: 18,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#273b4b',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 16,
    height: 16,
    border: '0.1px solid grey'
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid #273b4b`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export function WidgetMapView(props){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [showFloats, setShowFloats] = React.useState(true);
  const infoTooltip = 'Estimated Accuracy Numbers or EANs are computed on agiven geographical area for a given day. The EANs are mean or root mean square departures at several forecast lengths. These statistics provide an estimate of the uncertainty depending on the validation datasets available (you can choose between validation datasets available using the filters). It is acknowledged that the uncertainty as recorded by users can be larger than EANs locally, especially in high variability areas (strong currents, meanders, mesoscalevariability areas, coastal areas,upwelling areas etc...).'

  const [state, setState] = React.useState({
    checkedOn: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setShowFloats(value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div>
      <Card data-tut="reactour__13">
        <div className={classes.left}>
          Estimated Accuracy Numbers Cartography
        </div>
        <div className={classes.root}>
          <Tooltip title={props.info ? props.info : infoTooltip}>
            <InfoIcon />
          </Tooltip>
        </div>
        <div className={classes.right}>
          <ZoomOutMapIcon onClick={handleOpen} />
          {/* <GetAppIcon /> */}
        </div>
        {!open && 
          <LeafletMap open={open} showFloats={showFloats} />
        }
        <div>
          <Grid
            container
            direction="row"
            justify="left"
            alignItem="left"
            style={{height: '85%', marginTop: '1em', marginLeft: -15}}
          >
            <Grid container item xs={6} md={3}>
            <label className={classes.label} data-tut="reactour__14">
              <IOSSwitch checked={state.checkedOn} onChange={handleChange} name="checkedOn" />
              Show moorings
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
              <CloseIcon className={classes.right2} onClick={handleClose} />
              <LeafletMap open={open} showFloats={showFloats} />
              <div>
                <Grid
                  container
                  direction="row"
                  justify="left"
                  alignItems="left"
                  style={{height: '85%', marginTop: 33, marginLeft: 15}}
                >
                  <Grid item xs={6} md={3} lg={10}>
                  <label className={classes.label2} >
                    <IOSSwitch checked={state.checkedOn} onChange={handleChange} name="checkedOn" />                    
                    Show moorings
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

import React, {Component} from "react";
import Card from "./chart-styles";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import InfoIcon from '@material-ui/icons/Info';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import './../../../../../node_modules/react-vis/dist/style.css';
import {  
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  Crosshair,
  LineSeries,
} from 'react-vis';

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


export default class ChartContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: []
    };
  }


  _onMouseLeave = () => {
    this.setState({crosshairValues: []});
  };

  _onNearestX = (value, {index}) => {
    // const to_display = [value]
    // if multiple values
    const to_display = [this.props.data[index]]
    this.setState({crosshairValues: to_display});
  };

  yDomain = this.props.data.reduce(
    (res, row) => {
      return {
        max: Math.max(res.max, row.y),
        min: Math.min(res.min, row.y)
      };
    },
    {max: -Infinity, min: Infinity}
  );

  render() {
    return (
      <XYPlot onMouseLeave={this._onMouseLeave} width={this.props.width} height={this.props.height} yDomain={[this.yDomain['min'], this.yDomain['max']]} xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45}/>
        <YAxis />
        <VerticalBarSeries onNearestX={this._onNearestX} data={this.props.data} />
        <LineSeries onNearestX={this._onNearestX} data={this.props.data} />
        <Crosshair values={this.state.crosshairValues} />
      </XYPlot>
    );
  }
}

export function ChartView(props){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if( typeof(props.data) ==="undefined"){
    return null
  }

  return (
    <div>
      <Card>
        <div className={classes.left}>
          {props.kind}
          <InfoIcon />
        </div>
        <div className={classes.right}>
          <FullscreenIcon onClick={handleOpen} />
          <MoreVertSharpIcon />
        </div>
        {!open &&
          <ChartContent height={200} width={350} data={props.data[0].content} />
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
              {open &&
                <ChartContent height={500} width={750} data={props.data[0].content} />
              }
            </Card>
          </DialogContent>
        </Modal>
      </Card>
    </div>
  );
}
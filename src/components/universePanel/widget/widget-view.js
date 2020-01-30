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
import {MyDocument} from '../../pdfDocument';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();

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
  title: {
    fontSize: 20,
  }
}));
const options = {
  orientation: 'p',
  unit: 'mm',
  format: 'a0',
  putOnlyUsedFonts:true,
};

export function WidgetView(props){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false)
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  const Pdf = () => (
      <ReactToPdf targetRef={ref} filename="Resum_Stage.pdf" options={options}>
        {({ toPdf }) => <GetAppIcon onClick={toPdf} style={{color: '#ADB0B8'}} />}
      </ReactToPdf>
      
  )

  return (
    <div>
      <Grid container className={classes.root} direction="row" justify="space-between">
        <Grid item xs={props.title.length > 30 ? 10 : 7} md={props.title.length > 30 ? 10 : 7}>
          <div style={{fontSize: '20px',color: '#ADB0B8', marginBottom: props.title.length > 30 ? '0px' : '27px', fontFamily: 'ccl-heading--h5'}}>
            {props.title}
            <Tooltip title={props.info ? props.info : ''}>
              <InfoIcon />
            </Tooltip>
          </div>
        </Grid>
        <Grid item xs={2} md={2}>
          <FullscreenIcon onClick={handleOpen} style={{color: '#ADB0B8'}} />
          {/* {isClient && (
            <PDFDownloadLink document={<MyDocument text="Voila le texte" smallContent={props.smallContent}/>} fileName="resume.pdf">
              {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <GetAppIcon style={{color: '#ADB0B8'}} />)}
            </PDFDownloadLink> 
          )} */}
          <Pdf />
        </Grid>
      </Grid>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={12}>
          {/* <div style={{width: 500, height: 500, background: 'red'}}  ref={ref}> */}
            {!open && props.smallContent}
          {/* </div> */}
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
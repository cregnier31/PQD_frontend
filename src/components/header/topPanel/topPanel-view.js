import React from "react";
import ExpansionPanel from "./topPanel-styles";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import arcticImg from '../../../assets/images/arctic.jpg';
import balticseaImg from '../../../assets/images/balticsea.jpg';
import globalImg from '../../../assets/images/global.jpg';
import ibiImg from '../../../assets/images/ibi.jpg';
import medseaImg from '../../../assets/images/medsea.jpg';
import nwsImg from '../../../assets/images/nws.jpg';
import blackseaImg from '../../../assets/images/blacksea.jpg';
import tutoriel from '../../../assets/images/tutoriel.jpeg';

const useStyles = makeStyles(theme => ({
  cardRegion: {
    minWidth: 200,
    width: '100%',
  },
  cardTutoriel: {
    minWidth: 200,
    marginLeft: 30,
    width: '60%',
    backgroundColor: '#273b4b',
    color: 'white'
  },
  media: {
    height: 300,
  },
  mediaGlobal: {
    height: 400,
  },
  title: {
    fontFamily: 'ccl-heading--h5'
  },
  para: {
    fontFamily: 'ccl-paragraph--m'
  },
  content: {
    float: 'left'
  }
}));

export function TopPanelView(props){
  const classes = useStyles();
  const areaToImg = {
    arctic: arcticImg,
    balticsea: balticseaImg,
    global: globalImg,
    ibi: ibiImg,
    medsea: medseaImg,
    nws: nwsImg,
    blacksea: blackseaImg
  }
  const imageMap = areaToImg[props.area]
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Card className={classes.cardRegion}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediaGlobal}
                  image={imageMap}
                  title="Region"
                />
              </CardActionArea>
            </Card>
            <Card className={classes.cardTutoriel}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={tutoriel}
                  title="Tutoriel"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    New visitor ?
                  </Typography>
                  <Typography variant="body2" component="p">
                    Take a quick tour here.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    </Grid>
  );
}
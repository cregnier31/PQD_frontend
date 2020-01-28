import React, { useState, useEffect } from "react";
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
import tutoriel from '../../../assets/images/tutoriel.jpeg';
import { ReactComponent as Global } from '../../../assets/images/all_area_sphere.svg';
import { ReactComponent as Arctic } from '../../../assets/images/arctic_sphere.svg';
import { ReactComponent as Baltic } from '../../../assets/images/baltic_sphere.svg';
import { ReactComponent as Ibi } from '../../../assets/images/ibi_sphere.svg';
import { ReactComponent as Medsea } from '../../../assets/images/medsea_sphere.svg';
import { ReactComponent as Nws } from '../../../assets/images/nws_sphere.svg';
import { ReactComponent as BlackSea } from '../../../assets/images/blacksea_sphere.svg';

const useStyles = makeStyles(theme => ({
  cardRegion: {
    minWidth: 200,
    width: '100%',
    backgroundColor: '#286E9F'
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
  const [panel, setPanel] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);


  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    if(scrollTop >= 550) {
      setPanel(false)
    }
  }, [scrollTop])

  const displaySvg = () => {
    switch (props.area) {
      case 'arctic':
        return <Arctic style={{height: 400}} />
      case 'balticsea':
        return <Baltic style={{height: 400}} />
      case 'global':
        return <Global style={{height: 400}} />
      case 'ibi':
        return <Ibi style={{height: 400}} />
      case 'medsea':
        return <Medsea style={{height: 400}} />
      case 'nws':
        return <Nws style={{height: 400}} />
      case 'blacksea':
        return <BlackSea style={{height: 400}} />
      default:
        return <Global style={{height: 400}} />
    }
  }

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <ExpansionPanel onClick={() => setPanel(!panel)} expanded={panel}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Card className={classes.cardRegion}>
              <CardActionArea>
                {displaySvg()}
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
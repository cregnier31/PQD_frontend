import React, { useState, useEffect } from "react";
import ExpansionPanel from "./topPanel-styles";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { ReactComponent as Global } from '../../../assets/images/all_area_sphere_new.svg';
import { ReactComponent as Arctic } from '../../../assets/images/arctic_sphere_new.svg';
import { ReactComponent as Baltic } from '../../../assets/images/baltic_sphere_new.svg';
import { ReactComponent as Ibi } from '../../../assets/images/ibi_sphere_new.svg';
import { ReactComponent as Medsea } from '../../../assets/images/medsea_sphere_new.svg';
import { ReactComponent as Nws } from '../../../assets/images/nws_sphere_new.svg';
import { ReactComponent as BlackSea } from '../../../assets/images/blacksea_sphere_new.svg';
import blue from '../../../assets/images/blue.png';
import green from '../../../assets/images/green.png';
import white from '../../../assets/images/white.png';

const screen = window.screen.width;
const useStyles = makeStyles(theme => ({
  cardRegion: {
    minWidth: 60,
    width: '40%',
    marginLeft: 40,
    opacity: '1.0',
    backgroundColor: 'white',
    boxShadow: 'none',
  },
  cardTutoriel: {
    minWidth: 100,
    marginLeft: 70,
    width: '45%',
    backgroundColor: '#273b4b',
    color: 'white',
    boxShadow: 'none',
    border: '1px solid #273b4b'
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
  custom: {
    boxShadow: 'none',
  },
  expanded: {
    color: '#273b4b',
    top: 15,
  },
  content: {
    float: 'left',
    height: 100
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
    if(scrollTop >= 550 && !props.isTourOpen) {
      setPanel(false)
    }
  }, [scrollTop, props.isTourOpen])

  const displaySvg = () => {
    switch (props.area) {
      case 'arctic':
        return <Arctic style={{height: 400, marginTop: 0}} />
      case 'balticsea':
        return <Baltic style={{height: 400, marginTop: 0}} />
      case 'global':
        return <Global style={{height: 400, marginTop: 0}} />
      case 'ibi':
        return <Ibi style={{height: 400, marginTop: 0}} />
      case 'medsea':
        return <Medsea style={{height: 400, marginTop: 0}} />
      case 'nws':
        return <Nws style={{height: 400, marginTop: 0}} />
      case 'blacksea':
        return <BlackSea style={{height: 400, marginTop: 0}} />
      default:
        return <Global style={{height: 400, marginTop: 0}} />
    }
  }

  const displayPngTuto = () => {
    switch (props.universe) {
      case 'BLUE':
        return blue
      case 'GREEN':
        return green
      case 'WHITE':
        return white
      default:
        return blue
    }
  }

  return (
    <Grid container style={{marginTop: screen <= 400 ? 120 : 90, marginBottom: -20}} data-tut="reactour__6">
      <Grid item xs={12} md={12}>
        <ExpansionPanel className={classes.custom} expanded={panel}>
          <ExpansionPanelSummary classes={{expanded: classes.expanded}}
            onClick={() => setPanel(!panel)}
            expandIcon={<DoubleArrowIcon className={classes.expanded} style={{transform: 'rotate(90deg)', marginTop: 23}}/>}
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
            <Card className={classes.cardTutoriel} onClick={props.openTour}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={displayPngTuto()}
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

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
import globalImg from '../../../assets/images/global.jpg';
import tutoriel from '../../../assets/images/tutoriel.jpeg';

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightRegular,
  },
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
}));

export function TopPanelView(props){
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Title</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Card className={classes.cardRegion}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediaGlobal}
                  image={globalImg}
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
                <CardContent>
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
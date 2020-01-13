import React from "react";
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
      height: 30,
      borderColor: "black",
      fontSize: "20px",
      backgroundColor: "white"
    },
  },
}));
export function SelectorView(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.root}>
        <select value={props.value} onChange={ event => {props.updateValue(event.target.value)}}>
          <option default value="" hidden>{props.items.length > 0 ? props.name : 'No data'}</option>
          {props.items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
      </FormControl>
    </div>
  )
}
import React from "react";
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: 200,
      height: 50,
      borderColor: "#D1D1D1",
      fontSize: "20px",
      fontWeight: "normal",
      borderRadius: "20px"
    },
  },
}));
export function SelectorView(props) {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.root}>
        <select value={props.value} onChange={ event => {props.updateValue(event.target.value)}}>
          <option default value="">{props.name}</option>
          {props.items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
      </FormControl>
    </div>
  )
}
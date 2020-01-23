import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {changeNameFilter} from '../../../utils';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import './selector.css'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: '13px',
      width: 200,
      maxHeight: '35px !important',
      borderColor: "black",
      fontSize: "15px",
      backgroundColor: "white",
      marginTop: theme.spacing(3),
    },
  },
  label: {
    fontFamily: 'ccl-paragraph--ms',
    textAlign: 'start'
  },
}));

export function SelectorView(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
          id="standard-select-currency"
          select
          label={changeNameFilter(props.name)}
          value={props.value}
          onChange={ event => {props.updateValue(event.target.value)}}
          variant="outlined"
          size="small"
        >
          {props.items.length > 0 ? props.items.map(item => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          )) : 
            <MenuItem key={'empty'} value="">
              No data
            </MenuItem>
          }
        </TextField>
    </form>
  )
}
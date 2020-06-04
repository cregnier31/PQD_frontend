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
      maxHeight: '70px !important',
      fontSize:"15px",
      backgroundColor: '#DFEAF1',
      borderRadius: 6,
      height: '56px',
      boxShadow: '0px 0px 6px black',
      marginTop: '10px',
    },
  },
  input:{
    '& > *': {
      color: '#273b4b',
      fontSize: '16px',
      marginTop: '8px',
    },
  },
  input2: {
      background: '#DFEAF1',
      fontSize:"14px",
      color: '#9E1033',
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
          className={classes.input}
          InputProps={{
                      className: classes.input2
          }}
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

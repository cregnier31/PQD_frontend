import React from "react";
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import {changeNameFilter} from '../../../utils';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: '15px',
      width: 200,
      height: 30,
      borderColor: "black",
      fontSize: "20px",
      backgroundColor: "white",
      borderRadius: 5
    },
  },
}));


function sortFilters(props, classes) {
  if(props.generic) {
    switch (props.name) {
      case 'variable':
        return(
          <FormControl className={classes.root}>
            <select value={props.value} onChange={ event => {props.updateValue(event.target.value)}}>
              <option default value="" hidden>{props.items.length > 0 ? changeNameFilter(props.name) : 'No data'}</option>
              {props.items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
          </FormControl>
        )
      case 'dataset':
        return(
          <FormControl className={classes.root}>
            <select value={props.value} onChange={ event => {props.updateValue(event.target.value)}}>
              <option default value="" hidden>{props.items.length > 0 ? changeNameFilter(props.name) : 'No data'}</option>
              {props.items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
          </FormControl>
        )
      case 'product':
        return(
          <FormControl className={classes.root}>
            <select value={props.value} onChange={ event => {props.updateValue(event.target.value)}}>
              <option default value="" hidden>{props.items.length > 0 ? changeNameFilter(props.name) : 'No data'}</option>
              {props.items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
          </FormControl>
        )
      default:
    }
  } else {
    switch (props.name) {
      case 'subarea':
        return(
          <FormControl className={classes.root}>
            <select value={props.value} onChange={ event => {props.updateValue(event.target.value)}}>
              <option default value="" hidden>{props.items.length > 0 ? changeNameFilter(props.name) : 'No data'}</option>
              {props.items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
          </FormControl>
        )
      case 'depth':
        return(
          <FormControl className={classes.root}>
            <select value={props.value} onChange={ event => {props.updateValue(event.target.value)}}>
              <option default value="" hidden>{props.items.length > 0 ? changeNameFilter(props.name) : 'No data'}</option>
              {props.items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
          </FormControl>
        )
      case 'stat':
        return(
          <FormControl className={classes.root}>
            <select value={props.value} onChange={ event => {props.updateValue(event.target.value)}}>
              <option default value="" hidden>{props.items.length > 0 ? changeNameFilter(props.name) : 'No data'}</option>
              {props.items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
          </FormControl>
        )
      case 'plot_type':
        return(
          <FormControl className={classes.root}>
            <select value={props.value} onChange={ event => {props.updateValue(event.target.value)}}>
              <option default value="" hidden>{props.items.length > 0 ? changeNameFilter(props.name) : 'No data'}</option>
              {props.items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
          </FormControl>
        )
      default:
    }
  }
}

export function SelectorView(props) {
  const classes = useStyles();
  return (
    <div>
      {sortFilters(props, classes)}
    </div>
  )
}
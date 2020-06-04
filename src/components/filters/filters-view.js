import React from "react";
import {Search} from './search';
import {Selector} from './selector';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(theme => ({
  title: {
    margin: '9px',
    fontFamily: 'ccl-heading--h5'
  },
  section: {
    fontSize: '20px',
    fontWeight: 600,
    margin: 20,
    marginBottom: 2,
    fontFamily: 'ccl-heading--h5',
    color: '#9E1033',
  },
  click: {
    float: 'center',
  },
  disclaimer: {
    fontSize: '18px',
    fontFamily: 'ccl-heading--h5'
  }
}));

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 45,
    height: 21,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 0.9,
    '&$checked': {
      transform: 'translateX(24px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#273b4b',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 20.4,
    height: 20.4,
    border: '0.1px solid grey'
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid #273b4b`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function get_selector(name, items, props){
  return (
    <Selector
      key={name + "_selector"}
      items={items}
      name={name}
      value={props.filters[name]}
      updateValue={(n, v) => props.set(n, v)}
      filters={props.filters}
    />
  );
}

function filter_is_set_and_data_exists(filters, name, data){
  return data.filter(item => item.name === filters[name]).length
}

const SelectorList = ({props}) => {
  const classes = useStyles();
  const filters = props.filters
  const [showFloats, setShowFloats] = React.useState(true);
  const [state, setState] = React.useState({
    checkedOn: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setShowFloats(value);
  };

  if(typeof(props.data) !== "undefined" && typeof(props.data.variables) !== "undefined"){
    var list = []
    // Select Variable
    const variables = props.data.variables 
    list.push(get_selector("variable", variables, props))
    list.push(<Divider style={{marginTop: 30, background: '#31485E', height: '2px'}} key="divider"/>)
    list.push(<p className={classes.section} key="p" data-tut="reactour__5">Selection of validation expert metrics</p>)
    list.push(<IOSSwitch className={classes.click} checked={state.checkedOn} onChange={handleChange} name="checkedOn" />)
    list.push(<p className={classes.section} style={{marginTop: 20}} key="p" data-tut="reactour__5"></p>)
    // Activate expert selector
    if (showFloats == true){         
      // Select Dataset
      if(filter_is_set_and_data_exists(filters, "variable", variables)){
        const datasets = variables.filter(item => item.name === filters['variable'])[0].datasets
        list.push(get_selector("dataset", datasets, props))
        // Select Product
        if(filter_is_set_and_data_exists(filters, "dataset", datasets)){
          const products = datasets.filter(item => item.name === filters['dataset'])[0].products
          list.push(get_selector("product", products, props))
          // Select Subarea
          if(filter_is_set_and_data_exists(filters, "product", products)){
            // Add filters category title
            const subareas = products.filter(item => item.name === filters['product'])[0].subareas
            list.push(get_selector("subarea", subareas, props))
            // Select Depth
            if(filter_is_set_and_data_exists(filters, "subarea", subareas)){
              const depths = subareas.filter(item => item.name === filters['subarea'])[0].depths
              list.push(get_selector("depth", depths, props))
              // Select Stat
              if(filter_is_set_and_data_exists(filters, "depth", depths)){
                const stats = depths.filter(item => item.name === filters['depth'])[0].stats
                list.push(get_selector("stat", stats, props))
                if (filter_is_set_and_data_exists(filters, "stat", stats)){
                  list.push(get_validation_button(props))
                }
              } 
            }
          }
        }
      }
    }
    return list
  }
  return null
}

function get_validation_button(props){
  // If some filters are not selected yet
  var displayButton = true
  Object.keys(props.filters).map(key => {
    if(props.filters[key] === ""){
      displayButton = false
    }
    return null
  })
  if(displayButton){
    return (<Button data-tut="reactour__10" style={{marginTop: 16, background: '#273b4b', color: '#DFEAF1'}} onClick={() => props.apply()}>Apply</Button>)
  }
}

export function FiltersView(props){
  const classes = useStyles();

  // If no data exists for this area/universe
  if(typeof(props.data) === "undefined"){
    return (
      <div>
        <h4 className={classes.title}>Criteria</h4>
        <Divider />
        <div className={classes.disclaimer}>No validation diagnostics are available yet for this area and these parameters</div>
      </div>
    )
  }

  return (
    <div>
      <Divider style={{marginBottom: 25, background: '#31485E', height: '2px'}}/>
      <Search />
      <SelectorList props={props}/>
    </div>
  );
}

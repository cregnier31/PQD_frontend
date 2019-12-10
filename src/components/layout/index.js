import React, {Component} from 'react';
import './layout.css';
import {Header} from '../header';
import {Drawer} from '../drawer';



class Layout extends Component {

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Drawer />
      </div>
    )
          
  } 
}

export default Layout;

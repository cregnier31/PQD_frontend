import React from 'react';
import './app.css';
import {Header} from '../header';
import {Content} from '../content';

export function App() {
  
  return (
    <div className="App">
      <div className="App-header">
        <div className="container-header">
          <Header/>
        </div>
        <div className="container-content">
          <Content/>
        </div>
      </div>
    </div>
  );
}


import React, { Component } from 'react';
import './css/style.css';

import Tchip from './components/Tchip';
import AddTchipForm from './components/AddTchipForm';

class App extends Component {
  constructor() {
    super();

    this.addTchip =  this.addTchip.bind(this);

    this.state = {
      tchips: {}
    }
  }

  addTchip(tchip) {
    const tchips = {...this.state.tchips};
    const timestamp = Date.now();
    tchips[`tchip-${timestamp}`] = tchip;
    this.setState({ tchips });
  }

  render() {
    return (
      <div className="App">
        <AddTchipForm addTchip={this.addTchip}/>
        <div className="tchip-list">
          {
            Object
              .keys(this.state.tchips)
              .map(key => <Tchip key={key} index={key} details={this.state.tchips[key]}/>)
          }
        </div>
      </div>
    );
  }
}

export default App;

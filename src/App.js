import React, { PureComponent } from 'react';
import SelType from './SelType';
import ListItems from './ListItems'
import './App.css';
import {SELTYPE} from './types'

const defaultType = SELTYPE.SINGLE;

const EMPTY_CONTENT = {content: ""};

const EMPTY_SINGLE_ITEMS = 
[
  EMPTY_CONTENT,
  EMPTY_CONTENT,
  EMPTY_CONTENT
];

const EMPTY_MULTIPLE_ITEMS = 
[
  EMPTY_CONTENT,
  EMPTY_CONTENT,
  EMPTY_CONTENT,
  EMPTY_CONTENT
];

class App extends PureComponent {
  state = {
    selType: defaultType,
    options: EMPTY_SINGLE_ITEMS
  };
  
  handleGetTypeChange = (selType) => {
    let options = this.state.options;

    if (this.state.selType === selType) 
      return;
 
    if (selType === SELTYPE.MULTIPLE && (this.state.selType === SELTYPE.SINGLE && this.state.options === EMPTY_SINGLE_ITEMS)) {
      options = EMPTY_MULTIPLE_ITEMS;
    }

    if (selType === SELTYPE.SINGLE && (this.state.selType === SELTYPE.MULTIPLE && this.state.options === EMPTY_MULTIPLE_ITEMS)) {
      options = EMPTY_SINGLE_ITEMS;
    }

    this.setState(
      {
        selType,
        options
      }
    );
  };

  render() {
    const {selType, options} = this.state;

    return (
      <div className="App">
        <SelType value={selType} onChange={this.handleGetTypeChange}/>
        <ListItems selType={selType} options={options} onChange={this.handleChange}/>
      </div>
    );
  }

  handleChange = (options) => {
    this.setState({options});
  };
}

export default App;

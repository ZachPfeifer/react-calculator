//Main placeholder component

import React, { Component } from 'react'
import update from 'immutability-helper'
import math from 'mathjs'
import './App.css'
import Display from './Display.js'
import Button from './Button'
import Buttons from './Buttons'


class App extends Component {
  constructor() {
    super()
    this.state = { operations: [] }
  }


  render() {
    return (
      <div className="App">
        <Display data={this.StaticRange.operations} />
        <Buttons>
          <Button onClick={this.handleClick} label="C" value="clear" />
          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="1" value="1" />

          <Button onClick={this.handleClick} label="/" value="/" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <Button onClick={this.handleClick} label="." value="." />


          <Button onClick={this.handleClick} label="X" value="*" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <Button onClick={this.handleClick} label="3" value="3" />
          <Button label="" value="null" />

          <Button onClick={this.handleClick} label="-" value="-" />
          <Button onClick={this.handleClick} label="+" value="+" size="2" />
          <Button onClick={this.handleClick} label="=" value="equal" size="2" />


        </Buttons>
      </div>
    )
  }
}


export default App;

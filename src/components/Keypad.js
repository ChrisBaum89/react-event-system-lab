// Code Keypad Component Here
import React, {Component} from 'react';

export default class Keypad extends Component{

  handleInput = () => console.log('Entering password...')

  render(){
    return (
      <div>
        <input
        type="password"
        name="password"
        onKeyUp = {this.handleInput}
        />
      </div>
    )
  }
}

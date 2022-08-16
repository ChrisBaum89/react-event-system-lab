// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component {

  eventBlur = () => {console.log("Hey! Eyes on me!")}
  eventFocus = () => {console.log("Good!")}

  render(){
    return(
      <div>
        <button
          onFocus={this.eventFocus}
          onBlur={this.eventBlur}>Button
        </button>
      </div>
    )
  }
}

import React, { Component } from 'react';
import Keyboard from 'react-virtual-keyboard';
import './style.css'

class Keybor extends Component {
  onInputChanged = (data) => {
  this.setState({ input: data });
}
 
onInputSubmitted = (data) => {
  console.log("Input submitted:", data);
}
 
  render() {
       
    return (
      <div>
        <div class="group"> 
            <Keyboard 
                value=''
                name='keyboard'
                required
                className = 'pb'
                options={{
                    type:"input",
                    layout: "qwerty",
                    alwaysOpen: false,
                    usePreview: false,
                    useWheel: false,
                    stickyShift: false,
                    appendLocally: true,
                    color: "white",
                    updateOnChange: true,
                    initialFocus: true,
                    display: {
                    "accept" : "Aceptar",
                    "cancel": "↑"
                    }
                }}
                onChange={this.onInputChanged}
                //onAccepted={this.onInputSubmitted}
                ref={k => this.keyboard = k}
                />
        </div>

      </div>
    );
  }
}

export default Keybor;


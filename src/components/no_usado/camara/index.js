import React, { Component } from 'react';

import Webcam from 'react-webcam';
import getUserMedia from 'getusermedia';

class Camara extends Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  componentDidMount() {
    getUserMedia((err, stream) => {
      if (err) {
        console.log(err);
        console.log('failed');
      } else {
        console.log('got a stream', stream);
      }
    });
  }
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
    
  };
  
 
  render() {
    return (
      <div>
        <div className="mostrar">
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
          />
        </div>
          <button onClick={this.capture}>Capture photo</button>
          
        
      </div>
    );
  }
}

export default Camara;


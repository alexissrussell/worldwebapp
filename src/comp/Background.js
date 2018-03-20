import React, { Component } from 'react';
import mySocket from "socket.io-client";
import '../App.css';

class Background extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "https://worldsockets.herokuapp.com/",
      
      ///
      color: 'gray'
      ///
      
    };
  }

  // sending sockets
  send = () => {
    const socket = mySocket(this.state.endpoint);
    socket.emit('change color', this.state.color) // change 'red' to this.state.color
  }

  ///
  
  // adding the function
  setColor = (color) => {
    this.setState({ color })
  }
  
  ///

  render() {
    // testing for socket connections

    const socket = mySocket(this.state.endpoint);
    socket.on('change color', (col) => {
      document.body.style.backgroundColor = col
      document.body.style.height = "100vh"
    })

    return (
      <div style={{ textAlign: "center" }}>
        
    <br/>
        <br/>
            <br/>
        <br/>

<h1 id="bgTitle"> 1) Pick Your Favorite Color, <br/> 2) Hit the Change Color Button  <br/> 3) See Yours & Other Users Backgrounds Change! </h1>
          
        <button id="blue" className="BGbutt" onClick={() => this.setColor('pink')}> Pink </button>
        <button id="red" className="BGbutt" onClick={() => this.setColor('MediumOrchid')}> Purple </button>
        <button id="blue" className="BGbutt" onClick={() => this.setColor('IndianRed')}> Red </button>
        <button id="red"  className="BGbutt" onClick={() => this.setColor('DarkSalmon')}> Salmon </button>
        <br/>
        <br/>
 <button onClick={() => this.send() } id="changeBG">Change Color</button>

      </div>
    )
  }
}
export default Background;



import React, { Component } from 'react';
import mySocket from "socket.io-client";
import '../App.css';

class Background extends Component {
	constructor(props){
		super(props);
		this.state={
		}
	}
	
	componentDidMount(){
		this.socket = mySocket("http://localhost:10000");
	}

  render() {
	 
    return (
      <div>
		<h1>test</h1>
		
      </div>
    );
  }
}

export default Background;
import React, { Component } from 'react';
import mySocket from "socket.io-client";
import '../App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
		}
	}
	
	componentDidMount(){
		
	}

  render() {
	 
    return (
      <div id="butsWrapper">
		<div id="buts" onClick={this.props.changePage.bind(this,"room1")}>Room 1</div>
		<div id="buts" onClick={this.props.changePage.bind(this,"room2")}>Room 2</div>
      </div>
    );
  }
}

export default App;
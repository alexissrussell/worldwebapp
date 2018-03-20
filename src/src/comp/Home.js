import React, { Component } from 'react';
import mySocket from 'socket.io-client';
import '../App.css';

class Home extends Component {
    constructor(props){
        super(props);
        
    }
	componentDidMount(){
		this.socket = mySocket("http://worldsockets.herokuapp.com");
			
		};

    
  render() {
    return (
     <div class="wrapper">
        <h1 class="glitch"> HELLO </h1>
        <h2 class="welcome"> Welcome To Our World! </h2>
        
    </div>
    );

  }
}

export default Home;
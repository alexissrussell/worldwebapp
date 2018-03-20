import React, { Component } from 'react';
import '../App.css';

class Control extends Component {
    constructor(props){
        super(props);
        
        this.changePage4 = this.changePage4.bind(this);
        this.changePage3 = this.changePage3.bind(this);
        this.changePage2 = this.changePage2.bind(this);
        this.changePage1 = this.changePage1.bind(this);
        
    }
	
	
    changePage1(){
        this.props.changePage1(true);
        
    }
    changePage2(){
        this.props.changePage2(true);
        
	}
	changePage3(){
        this.props.changePage3(true);
        
    }
	changePage4(){
        this.props.changePage4(true);
        
    }

  render() {
    return (
        
      <div id="butsWrapper">
        
        <div id="buts" onClick = {this.changePage1}> CHATROOM </div>
        <div id="buts" onClick = {this.changePage2}> STICKER PAGE </div>
        <div id="buts" onClick = {this.changePage3}> QUIZ </div>
		<div  id="buts" onClick = {this.changePage4}> BACKGROUND </div>
        
      </div>
        
    );
  }
}

export default Control;
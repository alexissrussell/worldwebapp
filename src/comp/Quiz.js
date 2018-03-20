import React, { Component } from 'react';
import '../App.css';
import mySocket from 'socket.io-client';

class Quiz extends Component {
 constructor(props){
		super(props);
		this.state={
			stage:0,
			host:null,
			qobj:{q:null, o1:null, o2:null}
		}
	}
	

	componentDidMount(){
		this.socket = mySocket("https://worldsockets.herokuapp.com/");
		this.socket.on("newq", (data)=>{
			this.setState({
				qobj:data	
			})
			
		});
		
		this.socket.on("result", (data)=>{
			alert(data);
		})
	}
	
	handleStage = (num,roomStr)=>{
		this.setState({
			stage:num
		});
		
		this.socket.emit("joinroom", roomStr);
	}
		
	
	handlePlayers = (isHost) =>{
		this.setState({
			host:isHost,
			stage:2
		})
	}
	
	handleQuestion = () =>{
		var obj = {
			q:this.refs.q.value,
			o1:this.refs.o1.value,
			o2:this.refs.o2.value,
			a:this.refs.a.value
		};
		
		this.socket.emit("qsubmit", obj);
		
		this.refs.q.value = "";
		this.refs.o1.value = "";
		this.refs.o2.value = "";
	}
	
	handleAnswer = (num) =>{
		this.socket.emit("answer", num);
	};

  render() {
	 var comp2 = null;
	  
	  
	  if(this.state.stage === 0){
	  comp2 = (
	  	<div id="butsWrapper">
			<div id="buts" onClick={this.handleStage.bind(this, 1, "room1")}>Quiz 1</div>
			<div id="buts" onClick={this.handleStage.bind(this, 1, "room2")}>Quiz 2</div>
		</div>
		  
	  );
	  }else if(this.state.stage ===  1){
		  comp2 = (
	  	<div id="butsWrapper">
			<div id="buts" onClick={this.handlePlayers.bind(this, true)}>HOST</div>
			<div id="buts" onClick={this.handlePlayers.bind(this, false)}>PLAYER</div>
		</div>
		  
	  );
		}
	  else if(this.state.stage === 2){
		  if(this.state.host ===true){
			  comp2 = (
	  	<div id ="quizWrapper">
			<input id="buts" ref="q" type="text" placeholder="Type Question" />
    
			<input  id = "buts" ref="o1" type="text" placeholder="Option 1" /> 
			<input id = "buts" ref="o2" type="text" placeholder="Option 2" /> 
			<select ref="a">
				  <option value="1">Option 1</option>
				  <option value="2">Option 2</option>
			</select>
			<div id="buts" onClick={this.handleQuestion}>Submit Question</div>
		</div>  
	  );
		  }
		  else if(this.state.host === false){
			  comp2 = (
	  	<div id="quizWrapper">
			<div>{this.state.qobj.q}</div>
			<button onClick = {this.handleAnswer.bind(this, "1")}>{this.state.qobj.o1}A </button>
			<button onClick = {this.handleAnswer.bind(this, "2")}>{this.state.qobj.o2}B </button>
		</div>
		  
	  );
		  }
	  }
	  
	  
    return (
      <div>
		{comp2}
      </div>
    );
  }
}


export default Quiz;

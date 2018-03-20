import React, { Component } from 'react';
import Home from "./comp/Home.js";
import Control from "./comp/Control.js";
import Chat from './comp/Chat.js';
import Stickers from './comp/Stickers.js';
import Quiz from './comp/Quiz.js';
import Background from './comp/Background.js';
import mySocket from 'socket.io-client';
import './App.css';

class App extends Component {
    
    constructor(props){
        super(props);
        
         this.state ={
            showpage1: true, 
			showPage2: false,
			showPage3: false,
            showPage4: false,
			showPage5: false,
        }
        
		this.changePage4 = this.changePage4.bind(this);
        this.changePage3 = this.changePage3.bind(this);
        this.changePage2 = this.changePage2.bind(this);
        this.changePage1 = this.changePage1.bind(this);
    }
    
    changePage1(show){
        this.setState({
            showPage1: show,
            showPage2: false,
			showPage3: false,
			showPage4: false,
        })
    }
    
     changePage2(show){
        this.setState({
            showPage1: false,
            showPage2: show,
			showPage3: false,
			showPage4: false,
        })
    }
	
	 changePage3(show){
        this.setState({
            showPage1: false,
            showPage2: false,
			showPage3: show,
			showPage4: false,
        })
    }
	
	 changePage4(show){
        this.setState({
            showPage1: false,
            showPage2: false,
			showPage3: false,
			showPage4: show,
        })
    }
    
  render() {
      
      var mycomp = <Home />;
      
      
      if(this.state.showPage1 === true){
          mycomp = <Chat />      
      }
       else if(this.state.showPage2 === true){
          mycomp = <Stickers />
              
      } else if(this.state.showPage3 === true){
          mycomp = <Quiz />
			  
      } else if(this.state.showPage4 === true){
          mycomp = <Background />
      };
      
      
    return (
    <div >
    
        
        <Control 
        changePage1={this.changePage1}
        changePage2={this.changePage2}
		changePage3={this.changePage3}
		changePage4={this.changePage4}
        />
        {mycomp}
        
      </div>
    );
  }
}

export default App;
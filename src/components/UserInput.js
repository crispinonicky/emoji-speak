import React, { Component } from 'react';
import '../App.css';

class UserInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      userString: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {

    let emojiString = event.target.value

    this.setState({
      userString: emojiString
    });
  }

  handleSubmit(event) {

    let emojiArray = ['😀', '😂', '🤩']

    let emojiString = this.state.userString

    console.log(emojiString.length)

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    
    for (var i = 0; i < emojiString.length; i++) {
        if (emojiString[i] === ' '){
          document.write(emojiArray[getRandomInt(emojiArray.length)])
      }
    }

    document.write(emojiString);
    event.preventDefault();
  }

  

  render() {

    console.log(this.state.userString)


    return (
      <div className="user-input boxsizingBorder">

      <form onSubmit = {this.handleSubmit}>
        <label>
          Got anything to say? 
          <br/><br/>
          <textarea 
          rows = "20"
          cols = "50"
          type = "text" 
          value = {this.state.userString} 
          onChange = {this.handleChange}
          />
          <br/> <br/>
        </label>
        <input 
        type = "submit"
        value = "Submit"
        />

      
      </form>      


      </div>

      
    );

    

  }

  
  
}



export default UserInput;

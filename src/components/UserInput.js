import React, { Component } from "react";
import "../App.css";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userString: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // function getRandomEmoji(max) {
    //   return Math.floor(Math.random() * Math.floor(max));
    // }

    // get random emoji: emojiArray[getRandomEmoji(emojiArray.length)]

    // let emojiArray = ["😀", "😂", "🤩"];
    let emojiString = event.target.value;
    let testArray = [];

    // for (var i = 0; i < emojiString.length; i++) {
    //   if (emojiString[i] === " ") {
    //     console.log("Found a space!");
    //     testArray.push(emojiArray[getRandomEmoji(emojiArray.length)]);
    //   } else {
    //     testArray.push(emojiString[i]);
    //   }
    // }

    testArray = testArray.toString();

    

    console.log(testArray);

    this.setState({
      userString: emojiString
    });
  }

  handleSubmit(event) {
    function getRandomEmoji(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let emojiArray = ["😂", "🤩", "😎", "😫", "😬", "😱", "😵",
  "👌", "🖕", "🔥", "💦", "🍆", "🍆", "🍑"
  ];
    let emojiString = this.state.userString;
    let testArray = [];

    for (var i = 0; i < emojiString.length; i++) {
      if (emojiString[i] === " ") {
        console.log("Found a space!");
        testArray.push(" " + emojiArray[getRandomEmoji(emojiArray.length)] + " ");
      } else {
        testArray.push(emojiString[i]);
      }
    }

    testArray = testArray.join("");

    console.log(testArray);

    document.write(testArray);
    event.preventDefault();
  }

  render() {
    console.log(this.state.userString);

    return (
      <div className="user-input boxsizingBorder">
        <form onSubmit={this.handleSubmit}>
          <label>
            Got anything to say?
            <br />
            <br />
            <textarea
              rows="20"
              cols="50"
              type="text"
              value={this.state.userString}
              onChange={this.handleChange}
            />
            <br /> <br />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UserInput;

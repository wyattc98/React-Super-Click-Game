import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Images from "./images";

class ClickGame extends Component {
  state = {
    score: 0,
    highScore: 0,
    navMsgColor: "",
    navMessage: "Click an image to begin!",
    allCharacters: this.shuffleArray(),
    wasClicked: [],
    shake: false
  };

  clickEvent = this.checkClicked.bind(this);

  shuffleArray() {
    const newArr = Images.slice();
    const shuffleArr = [];
    while (newArr.length > 0) {
      shuffleArr.push(
        newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]
      );
    }
    return shuffleArr;
  }

  checkClicked(clickedE) {
    const prevState = this.state.wasClicked.slice();
    const shuffled = this.shuffleArray();
    let score = this.state.score;
    let highScore = this.state.highScore;

    if (!this.state.wasClicked.includes(clickedE)) {
      if (score === highScore) {
        score++;
        highScore++;
      } else {
        score++;
      }
      prevState.push(clickedE);
    }

    if (this.state.wasClicked.includes(clickedE)) {
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        navMsgColor: "incorrect",
        navMessage: "Incorrect guess!",
        allCharacters: shuffled,
        wasClicked: [],
        shake: true
      });
    }

    this.setState({
      score: score,
      highScore: highScore,
      navMsgColor: "correct",
      navMessage: "You Guessed Correct!",
      allCharacters: shuffled,
      wasClicked: prevState,
      shake: false
    });

    return setTimeout(() => this.setState({ navMsgColor: "" }), 500);
  }

  render() {
    const state = this.state;
    return (
      <div>
        <Navbar
          score={state.score}
          highScore={state.highScore}
          navMessage={state.navMessage}
          navMsgColor={state.navMsgColor}
        />
        <Header />
        <Container
          shake={state.shake}
          Character={state.allCharacters}
          clickEvent={this.clickEvent}
        />
        <Footer />
      </div>
    );
  }
}

export default ClickGame;

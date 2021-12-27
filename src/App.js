import { Component } from "react";
import "./styles.css";
import Card from "./Card/Card";
import Menu from "./Menu/Menu";

export default class App extends Component {
  state = {
    cards: [],
    fliped: [],
    animationIsRunning: false,
    found: [],
    turn: null,
    score: 0,
    isPlayed: false
  };

  newGame = async () => {
    await this.setState({
      cards: [],
      fliped: [],
      animationIsRunning: false,
      turn: 5,
      score: 0,
      found: [],
      isPlayed: true
    });
    fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=6&offset=${
        Math.floor(Math.random() * 1000) * 6
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        let cards = [...data.data, ...data.data];
        cards = cards.sort(() => (Math.random() > 0.5 ? 1 : -1));
        this.setState({ cards });
        console.log(cards);
      });
  };

  toogleFlip = async (i) => {
    if (
      this.state.animationIsRunning ||
      this.state.fliped.includes(i) ||
      this.state.found.includes(i) ||
      this.state.turn === 0
    )
      return;
    let flip = [...this.state.fliped];
    flip.push(i);
    await this.setState({ fliped: flip });
    if (flip.length === 2) {
      if (
        this.state.cards[this.state.fliped[0]].id ===
        this.state.cards[this.state.fliped[1]].id
      ) {
        await this.setState((prevState) => ({
          found: [...prevState.found, ...this.state.fliped],
          fliped: [],
          score: prevState.score + 1
        }));
      } else {
        this.setState((prev) => ({ turn: prev.turn - 1 }));
        this.setState({ animationIsRunning: true });
        setTimeout(() => {
          this.setState({ animationIsRunning: false, fliped: [] });
        }, 1000);
      }
    }
  };

  render() {
    let menu =
      this.state.cards.length === 0 ||
      this.state.turn === 0 ||
      this.state.found.length === 12 ? (
        <Menu
          click={this.newGame}
          isPlayed={this.state.isPlayed}
          isWinner={this.state.found.length === 12 ? true : false}
        />
      ) : null;

    let content = this.state.cards.length === 0 ? null : (
      <div>
        <div className="moves-div">
          <h1>
            Moves left: <span>{this.state.turn}</span>
          </h1>
        </div>
        <div className="App">
          {this.state.cards &&
            this.state.found !== 12 &&
            this.state.cards.map((e, i) => (
              <Card
                click={() => {
                  this.toogleFlip(i);
                }}
                flip={
                  this.state.fliped.includes(i) ||
                  this.state.found.includes(i)
                    ? 1
                    : 0
                }
                card={e}
                key={i}
              />
            ))}
        </div>
        <div className="score-div">Score: {this.state.score}</div>
      </div>
    )

    return (
      <>
        {menu}
        {content}
      </>
    );
  }
}

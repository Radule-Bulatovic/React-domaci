import { Component } from "react";
import styles from "./styles.module.css";
import Menu from "./Components/Menu/Menu";
import Cards from "./Components/Cards/Cards"

export default class App extends Component {
  state = {
    cards: [],
    fliped: [],
    animationIsRunning: false,
    found: [],
    turn: null,
    score: 0,
    isWinner: null
  };

  newGame = async () => {
    await this.setState({
      cards: [],
      fliped: [],
      animationIsRunning: false,
      turn: 5,
      score: 0,
      found: [],
    });
    fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=6&offset=${Math.floor(Math.random() * 1000) * 6
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
          score: prevState.score + 1,
          isWinner: [...prevState.found, ...this.state.fliped].length === 12 ? true : false
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
          isWinner={this.state.isWinner}
        />
      ) : null;

    let content = (this.state.cards.length === 0)? null : (
      <div>
        <div className={styles.movesDiv}>
          <h1>
            Moves left: <span>{this.state.turn}</span>
          </h1>
        </div>
        <div className={styles.App}>
          <Cards
            flip={this.state.flip}
            fliped={this.state.fliped}
            found={this.state.found}
            click={this.toogleFlip}
            cards={this.state.cards} />
        </div>
        <div className={styles.scoreDiv}>Score: {this.state.score}</div>
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

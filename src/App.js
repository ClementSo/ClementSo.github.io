import React from 'react';
import './App.css';
import './framework.min.css';
import Navbar from './Navbar';
import Plateau from './Plateau';
import Line from './Line';
import Control from './Control';
import Modal from './Modal';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentCase: 0,
      currentLine: 0,
      combination: [],
      combinationToFind: this.generateCombination(),
      game: [
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
      ],
      showModal: "hidden",
      nameModal: "you win",
      score: 0
    };
    this.change = this.change.bind(this);
    this.undo = this.undo.bind(this);
    this.compare = this.compare.bind(this);
    this.submit = this.submit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.score = this.score.bind(this);
  }
  change(color) {
    const gameBis = [...this.state.game]
    const combination = [...this.state.combination]

    if (this.state.currentCase < 4) {
      gameBis[this.state.currentLine][0].push(color)

      this.setState((state) => ({
        game: gameBis,
        currentCase: state.currentCase + 1,
      }));
    }

  }

undo() {
  const gameBis = [...this.state.game];

  if (this.state.currentCase > 0) {
    gameBis[this.state.currentLine][0].pop();

    this.setState(state => ({
      game: gameBis,
      currentCase: state.currentCase - 1
    }))
  }
}

submit() {
  let gameBis = [...this.state.game]
  if (this.state.currentCase == 4) {
    let result = this.compare();
    for (let index = 0; index < result[0]; index++) {
      gameBis[this.state.currentLine][1].push(" black")
    }
    for (let index = 0; index < result[1]; index++) {
      gameBis[this.state.currentLine][1].push(" grey")
    }

    this.setState(state => ({
      game: gameBis,
      currentLine:  state.currentLine + 1,
      currentCase: 0
    }))
  }
}

compare() {
  let combination = [...this.state.game[this.state.currentLine][0]]
  let combinationToFind = [...this.state.combinationToFind]
  let good = 0
  let bad = 0

  for (let index = 0; index < combination.length; index++) {
    if (combination[index] == combinationToFind[index]) {
      good++
      combinationToFind[index] = "x"
      combination[index] = "a"
    }
  }

  for (var index = 0; index < combinationToFind.length; index++) {
    if (combinationToFind.includes(combination[index])) {
      bad++
      combinationToFind[combinationToFind.indexOf(combination[index])] = "x"
      combination[index] = "a"
    }
  }
  console.log(this.state.combinationToFind);
  if (good == 4) {
    let score = this.state.score + 1;
    this.setState({
      showModal: "show",
      score: score,
      nameModal: "you win"
    })
  }
  if (this.state.currentLine == 9) {
    let score = this.state.score - 1;
    this.setState({
      showModal: "show",
      score: score,
      nameModal: "game over"
    })
  }
  return [good,bad];
}

closeModal() {
  if (!(this.state.nameModal == "scores : "+this.state.score)) {
    this.setState({
      game: [
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
      ],
      currentCase: 0,
      currentLine: 0,
      combinationToFind: this.generateCombination()
    })
  }
  this.setState({
    showModal: "hidden"
  })
}

generateCombination() {
  let combination = []
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random()*6)
    let colors = ["red","blue","green","yellow","orange","purple"]
    combination.push(colors[random])
  }
  return combination;
}

score() {
  this.setState({
    showModal: "show",
    nameModal: "scores : "+this.state.score
  })
}
  render() {
  return (
    <div className="App">
    <title>Mastermind</title>
      <Navbar score={this.score}></Navbar>
      <main>
        <Plateau game={this.state.game}></Plateau>
        <Control colorize={this.change} undo={this.undo} submit={this.submit}></Control>
        <Modal showModal={this.state.showModal} closeModal={this.closeModal} nameModal={this.state.nameModal}></Modal>
      </main>
    </div>
  );
  }
}

export default App;

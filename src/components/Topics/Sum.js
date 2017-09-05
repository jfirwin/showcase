import React, { Component } from 'react'

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  handleChangeOne(val) {
    this.setState({number1: parseInt(val, 10)})
  }

  handleChangeTwo(val) {
    this.setState({number2: parseInt(val, 10)})
  }

  sum() {
    this.setState({sum: (this.state.number1 + this.state.number2)})
  }

  render () {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={ (e) => this.handleChangeOne(e.target.value)}></input>
        <input className="inputLine" onChange={ (e) => this.handleChangeTwo(e.target.value)}></input>
        <button className="confirmationButton" onClick={ () => this.sum()}>Add</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum;

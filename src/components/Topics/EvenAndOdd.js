import React, { Component } from 'react'

class EvenAndOdd extends Component {
  constructor(){
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }

  assignEvensAndOdds(userInput) {
    let arr = userInput.split(',');
    let even = [];
    let odd = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push( parseInt(arr[i], 10));
      } else if (arr[i] % 2 !== 0) {
        odd.push( parseInt(arr[i], 10));
      }
    }

    this.setState({evenArray: even, oddArray: odd})
  }

  render () {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={ (e) => this.assignEvensAndOdds(this.state.userInput) }> Split </button>
        <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
        <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) }</span>
        </div>
    )
  }
}

export default EvenAndOdd;

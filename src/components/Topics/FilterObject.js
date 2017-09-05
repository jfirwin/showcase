import React, { Component } from 'react'

class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      unfilteredArray: [
        {
          name: 'Luke',
          favoriteAnimal: 'Whale Shark',
          gifSkill: 100
        },
        {
          name: 'Mark',
          favoriteTopic: 'Belize'
        },
        {
          name: 'Zack',
          motivational: false
        }
      ],

      userInput: '',
      filteredArray: []
    }
  }

  handleChange(userText) {
    this.setState({userInput: userText})
  }

  filterArray(userInput) {
    let arr = this.state.unfilteredArray;
    let filtered = [];

    arr.forEach(function(person) {
      if (person.hasOwnProperty(userInput)) {
        filtered.push(person);
      }
    })

    this.setState({filteredArray: filtered})
  }

  render () {
    return (
      <div className="puzzleBox filterObjectPB">
      <h4> Filter Object </h4>
      <span className="puzzleText"> Original: { JSON.stringify(this.state.unfilteredArray, null, 10) } </span>
      <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
      <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }> Filter DevMountain Peeps </button>
      <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
      </div>
    )
  }
}

export default FilterObject;

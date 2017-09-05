import React, { Component } from 'react'

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: ['Pikachu', 'Eevee', 'Snorlax', 'Ditto', 'Charizard', 'Squirtle', 'Charmander', 'Mew'],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(input) {
    this.setState( {userInput: input } );
  }

  filterString(input) {
    let update = [];
    var pokemonNames = this.state.pokemon;
    for (var i = 0; i < this.state.pokemon.length; i++) {
      if (pokemonNames[i].includes(this.state.userInput))
      update.push(pokemonNames[i]);
    }
    this.setState({filteredArray: update})
  }

  render () {
    return (
      <div className="puzzleBox filterStringPB">
      <h4> Filter String </h4>
      <span className="puzzleText"> Unfiltered Array: {JSON.stringify(this.state.pokemon)} </span>
      <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
      <button className="confirmationButton" onClick={ () => this.filterString(this.state.userInput) }> Filter Pokemon </button>
      <span className="resultsBox filterStringPB">{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

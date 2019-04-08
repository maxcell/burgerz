import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'
import BurgerForm from './components/BurgerForm'

/*
                       App
         |              |               |
    BurgerContainer   BurgerDisplay   BurgerForm
         |       |
      BurgerList BurgerFilter
         |
      BurgerItem
*/


class App extends Component {

  state = {
    burgers: [],
    displayedBurger: null
  }

  componentDidMount() {
    fetch("http://localhost:3001/burgers")
    .then(res => res.json())
    .then(burgersJSON => {
      this.setState({
        burgers: burgersJSON
      })
    })
  }

  handleAdd = (e, burger) => {
    e.preventDefault()

    this.setState({
      burgers: [burger, ...this.state.burgers]
    })
  }

  handleDelete = (burger) => {
   // I want to remove it from my array

   // Show everything that doesn't have this id
   const newArray = this.state.burgers.filter(burg => burg.id !== burger.id)

   this.setState({
     burgers: newArray,
     displayedBurger: null
   })
  }

  handleClick = (burger) => {
    // I will use the event to let me know what I'm clicking
    this.setState({
      displayedBurger: burger
    })
  }


  // Bonus
  handleChange = (e) => {
    // GOAL: Update the category of a specific object and then update the array
    const newBurger = {...this.state.displayedBurger}
    // 1. A copy of my "new Burger"
    // 2. Update the category for the new burger
    newBurger.category = e.target.value
    // 3. Set state to update all of the burgers
    // I want to EDIT A BURGER, 10 IN => 10 OUT
    const newListOfBurgers = this.state.burgers.map( burger => {
      if(burger.id === newBurger.id) {
        return newBurger
      } else {
        return {...burger}
      }
    })
    this.setState({
      displayedBurger: newBurger,
      burgers: newListOfBurgers
    })
  }

  // 3 Ways to make BurgerDisplay work
  // state being null
  //   1. Conditionally Render
  //   2. We spread the props in BurgerDisplay
  //  state being an empty object
  //   3. Keep using the things

  render() {
    return (
      <div id="App">
        <BurgerContainer handleDelete={this.handleDelete} burgers={this.state.burgers} handleClick={this.handleClick}/>
        {this.state.displayedBurger ? <BurgerDisplay handleChange={this.handleChange} burger={this.state.displayedBurger}/> : null }
        <BurgerForm handleAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default App;

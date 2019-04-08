import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

/*
                App
         |              |
    BurgerContainer   BurgerDisplay
         |       |
      BurgerList BurgerFilter
         |
      BurgerItem
*/


class App extends Component {

  state = {
    displayedBurger: null
  }

  handleClick = (burger) => {
    // I will use the event to let me know what I'm clicking
    this.setState({
      displayedBurger: burger
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
        <BurgerContainer handleClick={this.handleClick}/>
        {this.state.displayedBurger ? <BurgerDisplay burger={this.state.displayedBurger}/> : null }
      </div>
    );
  }
}

export default App;

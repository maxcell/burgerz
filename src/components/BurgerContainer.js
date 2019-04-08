import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  // For step 2
  // We need state to keep track of the information
  state = {
    burgers: [],
    filteredBurgers: []
  }


  // Step 4
  // We need to consider
  //  - The data we're sending to BurgerFilter
  //  - The data we're sending to BurgerList

  componentDidMount() {
    fetch("http://localhost:3001/burgers")
    .then(res => res.json())
    .then(burgersJSON => {
      this.setState({
        burgers: burgersJSON,
        filteredBurgers: burgersJSON
      })
    })
  }

  handleChange = (e) => {
    let filteredBurgers
    if(e.target.value === 'All'){
      filteredBurgers = this.state.burgers
    } else {
      filteredBurgers = this.state.burgers.filter(burger => burger.category === e.target.value)
    }
    this.setState({
      filteredBurgers
    })


    // if(e.target.value === 'All'){
    //   this.setState({
    //     filteredBurgers: [...this.state.burgers]
    //   })
    // } else if(e.target.value === 'Bougie') {
    //   this.setState({
    //     filteredBurgers: [...this.state.burgers].filter(burger => burger.category === 'Bougie')
    //   })
    // } else if(e.target.value === 'Relatable') {
    //   this.setState({
    //     filteredBurgers: [...this.state.burgers].filter(burger => burger.category === 'Relatable')
    //   })
    // }
  }


  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter handleChange={this.handleChange}/>
        <BurgerList handleClick={this.props.handleClick} burgers={this.state.filteredBurgers} />
      </div>
    )
  }
}












//

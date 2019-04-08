import React from 'react'

export default class BurgerForm extends React.Component {
  // A form requires to have state
  state = {
    name: '',
    imgURL: '',
    category: 'Relatable'
  }



  handleChange = (e) => {
    // This will be the method that handles the state change
    console.log('This is the name of the input: ', e.target.name)
    console.log('This is the value of the input: ', e.target.value)

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    // A controlled input means that state is controlling the value
    // Each time state changes, the values will change
      return (
        <form onSubmit={(e) => { this.props.handleAdd(e, this.state)}}>
          <input value={this.state.name} onChange={this.handleChange} name="name"/>
          <input value={this.state.imgURL} onChange={this.handleChange} name="imgURL"/>
          <select value={this.state.category} name="category" onChange={this.handleChange}>
            <option value="Relatable">Relatable</option>
            <option value="Bougie">Bougie</option>
          </select>
          <input type="submit" value="Create Burger"/>
        </form>
      )
  }
}

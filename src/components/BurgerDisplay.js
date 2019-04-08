import React, { Component } from 'react';

const BurgerDisplay = (props) => {

  const burger = {...props.burger} // {}
  return (
    <div className="BurgerDisplay">
      <img src={burger.imgURL}/>
      <br/>
      <h1>{burger.name}</h1>
      <br/>
      <select value={burger.category} onChange={console.log}>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay

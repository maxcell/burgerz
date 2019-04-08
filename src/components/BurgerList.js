import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {

  const burgerArray = props.burgers.map(burger =>{
    return <BurgerItem handleDelete={props.handleDelete} handleClick={props.handleClick} key={burger.id} burger={burger}/>
  })

  return (
    <div className="BurgerList">
      {burgerArray}
    </div>
  )
}

export default BurgerList

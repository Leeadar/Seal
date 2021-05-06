import './App.css';
import Recipes from './Components/Recipes'
import Recipe from './Components/Recipe';
import RecipesArr from './data.json'
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: RecipesArr,
      currentPage: 'Home'
    };
  }

  onClickHandler = (type,time) => {
    console.log(type);
    let newArr = [...this.state.recipes];
    const filteredArr = newArr.filter((recipe) => (recipe.makingTime <= time ) && (type.toLowerCase() == recipe.type.toLowerCase()))
    this.setState({
      recipes: filteredArr,
      currentPage: 'Recipes'
    });
  }

  render = () => {
      return (
        <div>
          {this.state.currentPage == 'Home' ? <Home onClickHandler={this.onClickHandler}></Home> : <Recipes Recipes={this.state.recipes}></Recipes>}
        </div>
       
      )
  }
  
}
export default App;

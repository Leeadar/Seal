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

  onClickHandler = () => {
    this.setState({
      currentPage: 'Recipes'
    });
  }

  render = () => {
    console.log("fdfdf")
      return (
        
        <div>
          {this.state.currentPage = 'Home' ? <Home onClickHandler={this.onClickHandler}></Home> :  <h1>gggg</h1>}
        </div>
       
      )
  }
  
}
export default App;

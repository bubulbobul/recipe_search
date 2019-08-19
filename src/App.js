import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "8fd715836ce66fb44473ee47c22db392";
// const API_KEY = "G8fd715836ce66fb44473ee47c22db392";
const URL = `https://www.food2fork.com/api/search?key=${API_KEY}`;

class App extends Component {
  state = {
    recipes: []
  };

  //First
  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    // console.log("Working from getRecipe", recipeName);
    const api_call = await fetch(`${URL}&q=${recipeName}&count=100`);
    const data = await api_call.json();
    // console.log(data.recipes);
    this.setState({
      recipes: data.recipes
    });
  };

  //Third
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({
      recipes
    });
  };

  //Second
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;

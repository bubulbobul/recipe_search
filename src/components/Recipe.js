import React, { Component } from "react";
import { Link } from "react-router-dom";

const API_KEY =
  "GET_YOUR_API_KEY on the following website https://www.food2fork.com";
const URL = `https://www.food2fork.com/api/search?key=${API_KEY}`;

export default class Recipe extends Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    // console.log(this.props);
    const title = this.props.routerProps.location.state.recipe;
    const req = await fetch(`${URL}&q=${title}`);
    const res = await req.json();
    // console.log(res.recipes[0]);
    this.setState({
      activeRecipe: res.recipes[0]
    });
  };

  render() {
    // console.log(this.props.routerProps);
    const recipe = this.state.activeRecipe;
    // // console.log(this.props)
    return (
      <div className='container'>
        {recipe.length !== 0 && (
          <div className='active-recipe'>
            <img
              className='active-recipe__img'
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className='active-recipe__title'>{recipe.title}</h3>
            <h4 className='active-recipe__publisher'>
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className='active-recipe__website'>
              Website:
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </span>
            </p>
            <button className='active-recipe__button'>
              <Link to={`/`}>Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Recipes(props) {
  // console.log("Redcipes props");
  // console.log("Redcipes props", props);
  return (
    <div className='container'>
      <div className='row'>
        {props.recipes === null ? (
          <div style={{ textAlign: "center" }}>
            <h3>
              Search for any recipe such as chicken, sandwich, shrimp, pizza etc
            </h3>
          </div>
        ) : (
          <Fragment>
            {props.recipes.map(recipe => (
              <div
                className='col-md-4'
                key={recipe.recipe_id}
                style={{ marginBottom: "2rem" }}
              >
                <div className='recipes__box'>
                  <img
                    className='recipes__box-img'
                    src={recipe.image_url}
                    alt={recipe.title}
                  />
                  <div className='recipe__text'>
                    <h5 className='recipes__title'>
                      {recipe.title.length < 20
                        ? `${recipe.title}`
                        : `${recipe.title.substring(0, 24)}...`}
                    </h5>
                    <p className='recipes__subtitle'>
                      Publisher: <span>{recipe.publisher}</span>
                    </p>
                  </div>
                  <button className='recipe_buttons'>
                    {/* <Link to={`/recipe/${recipe.recipe_id}`}>View Recipe</Link> */}
                    <Link
                      to={{
                        pathname: `/recipe/${recipe.recipe_id}`,
                        state: { recipe: recipe.title }
                      }}
                    >
                      {" "}
                      View Recipe
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Recipes;

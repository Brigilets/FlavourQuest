import React from "react";
import "./Recipe.css";

type RecipeProps = {
  ingredients: string[];
  keyVal: string[];
};
const Recipe: React.FC<RecipeProps> = (props) => {
  return (
    <>
      <h3>Ingredients</h3>
      <ul>
        {props.ingredients.map((ingredient: string, index) => (
          <>
            <li key={props.keyVal[index]}>{ingredient}</li>
          </>
        ))}
      </ul>
    </>
  );
};

export default Recipe;

import React from "react";
import "./Recipe.css";

// type Ingredient = {
//   name: string;
//   measure: string;
//   quantity: number;
// };

type RecipeProps = {
  ingredients: string[];
  keyVal: "string";
};
const Recipe: React.FC<RecipeProps> = (props) => {
  return (
    <>
      <h3>Ingredients</h3>
      <ul>
        {props.ingredients.map((ingredient: string) => (
          <>
            <li key={props.keyVal}>{ingredient}</li>
          </>
        ))}
      </ul>
    </>
  );
};

export default Recipe;

import React, { lazy, useMemo } from "react";
import "./Page.css";
import { useParams } from "react-router-dom";
import { useRecipes } from "../utils";
import NutritionalInfo from "../components/NutritionalInfo";
import NotFoundPage from "./NotFoundPage";
import Loading from "../components/Loading";
const Recipe = lazy(() => import("../components/Recipe"));

const RecipePage: React.FC = () => {
  const { name } = useParams();
  const { cuisine } = useParams();
  const recipesContext = useRecipes();
  const recipes = recipesContext !== null ? recipesContext.recipes : null;
  const isLoading = recipesContext !== null ? recipesContext.loading : null;
  const specificRecipe = useMemo(
    () =>
      recipes?.find(
        (recipe) =>
          recipe.recipe.cuisineType[0] === cuisine &&
          recipe.recipe.label === name
      ),

    [recipes, cuisine, name]
  );

  if (!specificRecipe) {
    isLoading ? <Loading /> : <NotFoundPage />;
  }

  return (
    <>
      <main className="recipePage">
        <h2>{specificRecipe?.recipe.label}</h2>
        <section style={{ display: "flex", flexDirection: "row" }}>
          <img
            className="img"
            src={specificRecipe.recipe.images.REGULAR.url}
          ></img>

          <section className="recipeInfo">
            <Recipe
              ingredients={specificRecipe.recipe.ingredientLines}
              keyVal={specificRecipe.recipe.ingredientLines.toString()}
            />
            <h4>
              Find the full recipe{" "}
              <a
                className="recipeLink"
                href={specificRecipe.recipe.url}
                target="_blank"
              >
                Here
              </a>
            </h4>
            <NutritionalInfo
              quantity={
                specificRecipe.recipe.totalNutrients.ENERC_KCAL.quantity
              }
              unit={specificRecipe.recipe.totalNutrients.ENERC_KCAL.unit}
              noServings={specificRecipe.recipe.yield}
            />
          </section>
        </section>
      </main>
    </>
  );
};

export default RecipePage;

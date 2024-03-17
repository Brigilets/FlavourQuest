import React, { lazy, useMemo } from "react";
import "./Page.css";
import { useParams } from "react-router-dom";
import { useRecipes } from "../utils";
import NutritionalInfo from "../components/NutritionalInfo";
const Recipe = lazy(() => import("../components/Recipe"));

const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

const RecipePage: React.FC = () => {
  const { name } = useParams();
  const recipesContext = useRecipes();
  const recipes = recipesContext !== null ? recipesContext.recipes : null;
  const specificRecipe = useMemo(
    () => recipes?.find((recipe) => recipe.recipe.label === name),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [name]
  );
  console.log("name", name);
  console.log("specificRecipe", specificRecipe);
  if (!specificRecipe) {
    return <div>Recipe not found</div>;
  }
  return (
    <>
      <Header />
      <main className="recipePage">
        <h1>{specificRecipe?.recipe.label}</h1>
        <section style={{ display: "flex", flexDirection: "row" }}>
          <img
            className="img"
            src={specificRecipe.recipe.images.REGULAR.url}
          ></img>

          <section className="recipeInfo">
            <Recipe
              ingredients={specificRecipe.recipe.ingredientLines}
              keyVal={
                specificRecipe?.recipe.label + specificRecipe.recipe.source
              }
            />
            <NutritionalInfo
              quantity={
                specificRecipe.recipe.totalNutrients.ENERC_KCAL.quantity
              }
              unit={specificRecipe.recipe.totalNutrients.ENERC_KCAL.unit}
            />
            <h4>
              Find the original source{" "}
              <a href={specificRecipe.recipe.url}>Here</a>
            </h4>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RecipePage;

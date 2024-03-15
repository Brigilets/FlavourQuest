import React, { lazy, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useRecipes } from "../utils";

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
      <main>
        <h1>{specificRecipe?.recipe.label}</h1>
        <img
          className="img"
          src={specificRecipe.recipe.images.REGULAR.url}
        ></img>
        <section className="recipeInfo">
          <h4>
            Find the recipe <a href={specificRecipe.recipe.url}>Here</a>
          </h4>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RecipePage;

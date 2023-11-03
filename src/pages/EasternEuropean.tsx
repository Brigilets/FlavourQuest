import React, { lazy, useMemo } from "react";
import "./Page.css";
import { useRecipes } from "../utils";

const Footer = lazy(() => import("../components/Footer"));
const Header = lazy(() => import("../components/Header"));
const RecipeCard = lazy(() => import("../components/RecipeCard"));

const EasternEuropean: React.FC = () => {
  const recipeContext = useRecipes();

  const recipes = recipeContext !== null ? recipeContext.recipes : null;

  const easternEuropeanRecipes = useMemo(
    () =>
      recipes?.filter((recipe) =>
        recipe.recipe.cuisineType.includes("eastern europe")
      ),
    [recipes]
  );

  console.log(easternEuropeanRecipes);

  return (
    <>
      <Header />
      <h2>Enjoy our Eastern European recipes!</h2>
      <div className="cardGrid">
        {easternEuropeanRecipes !== undefined &&
        easternEuropeanRecipes.length > 0 ? (
          easternEuropeanRecipes.map((recipe) => (
            <>
              <RecipeCard
                key={recipe.recipe.label + recipe.recipe.source}
                name={recipe.recipe.label}
                cuisine={
                  recipe.recipe.cuisineType.length > 1
                    ? recipe.recipe.cuisineType.join(", ")
                    : recipe.recipe.cuisineType
                }
                imgURL={recipe.recipe.images.REGULAR.url}
              />
            </>
          ))
        ) : (
          <div>There are no Eastern European recipes at the moment</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default EasternEuropean;

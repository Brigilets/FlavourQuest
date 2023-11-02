import React, { lazy, useMemo } from "react";
import "./Page.css";
import { useRecipes } from "../RecipesContext";
const Footer = React.lazy(() => import("../components/Footer"));
const Header = React.lazy(() => import("../components/Header"));
const RecipeCard = lazy(() => import("../components/RecipeCard"));

const Asian: React.FC = () => {
  const recipeContext = useRecipes();
  const recipes = recipeContext !== null ? recipeContext.recipes : null;

  const asianRecipes = useMemo(
    () =>
      recipes?.filter((recipe) => recipe.recipe.cuisineType.includes("asian")),
    [recipes]
  );
  return (
    <>
      <Header />
      <h2>Enjoy our asian recipes!</h2>
      <div className="cardGrid">
        {asianRecipes !== undefined ? (
          asianRecipes.map((recipe) => (
            <>
              <RecipeCard
                key={recipe.recipe.label + recipe.recipe.source}
                name={recipe.recipe.label}
                cuisine={recipe.recipe.cuisineType}
                imgURL={recipe.recipe.images.REGULAR.url}
              />
            </>
          ))
        ) : (
          <div>There are no asian recipes at the moment</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Asian;

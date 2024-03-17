import React, { lazy, useMemo } from "react";
import "./Page.css";
import { useRecipes } from "../utils";
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
      <h1>Enjoy our asian recipes!</h1>
      <div className="cardGrid">
        {asianRecipes !== undefined && asianRecipes.length > 0 ? (
          asianRecipes.map((recipe) => (
            <React.Fragment key={recipe.recipe.label + recipe.recipe.source}>
              <RecipeCard
                name={recipe.recipe.label}
                cuisine={
                  recipe.recipe.cuisineType.length > 1
                    ? recipe.recipe.cuisineType.join(", ")
                    : recipe.recipe.cuisineType
                }
                imgURL={recipe.recipe.images.REGULAR.url}
              />
            </React.Fragment>
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

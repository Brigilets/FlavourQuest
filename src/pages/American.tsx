import React, { lazy, useMemo } from "react";
import { useRecipes } from "../utils";

import "./Page.css";

const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
const RecipeCard = lazy(() => import("../components/RecipeCard"));

const American: React.FC = () => {
  const recipeContext = useRecipes();

  const recipes = recipeContext !== null ? recipeContext.recipes : null;

  const americanRecipes = useMemo(
    () =>
      recipes?.filter((recipe) =>
        recipe.recipe.cuisineType.includes("american")
      ),
    [recipes]
  );

  return (
    <>
      <Header />
      <div className="cardGrid">
        {americanRecipes !== undefined && americanRecipes.length >0? (
          americanRecipes.map((recipe) => (
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
          <div>There are no american recipes at the moment</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default American;

import React, { lazy, useMemo } from "react";
import { useRecipes } from "../utils";

const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
const RecipeCard = lazy(() => import("../components/RecipeCard"));

const Italian: React.FC = () => {
  const recipeContext = useRecipes();
  const recipes = recipeContext !== null ? recipeContext.recipes : null;
  const italianRecipes = useMemo(
    () =>
      recipes?.filter((recipe) =>
        recipe.recipe.cuisineType.includes("italian")
      ),
    [recipes]
  );
  return (
    <>
      <Header />
      <h2>Enjoy our italian recipes!</h2>
      <div className="cardGrid">
        {italianRecipes !== undefined && italianRecipes.length > 0 ? (
          italianRecipes.map((recipe) => (
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
          <div>There are no italian recipes at the moment</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Italian;

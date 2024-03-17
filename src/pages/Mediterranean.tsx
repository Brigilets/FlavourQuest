import React, { lazy, useMemo } from "react";
import "./Page.css";

import { useRecipes } from "../utils";

const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
const RecipeCard = lazy(() => import("../components/RecipeCard"));

const Mediterranean: React.FC = () => {
  const recipesContext = useRecipes();
  const recipes = recipesContext !== null ? recipesContext.recipes : null;
  const mediterraneanRecipes = useMemo(
    () =>
      recipes?.filter((recipe) =>
        recipe.recipe.cuisineType.includes("mediterranean")
      ),
    [recipes]
  );

  console.log(mediterraneanRecipes);

  return (
    <>
      <Header />
      <h2>Enjoy our mediterranean recipes!</h2>
      <div className="cardGrid">
        {mediterraneanRecipes !== undefined &&
        mediterraneanRecipes.length > 0 ? (
          mediterraneanRecipes.map((recipe) => (
            <React.Fragment key={recipe.recipe.label + recipe.recipe.source}>
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
            </React.Fragment>
          ))
        ) : (
          <div>There are no mediterranean recipes at the moment</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Mediterranean;

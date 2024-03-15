import React, { lazy, useMemo } from "react";
import { useRecipes } from "../utils";

import "./Page.css";
import { Outlet, useNavigate } from "react-router-dom";

const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
const RecipeCard = lazy(() => import("../components/RecipeCard"));

const American: React.FC = () => {
  const recipeContext = useRecipes();
  const redirect = useNavigate();
  const currentUrl = window.location.pathname;

  const recipes = recipeContext !== null ? recipeContext.recipes : null;

  const americanRecipes = useMemo(
    () =>
      recipes?.filter((recipe) =>
        recipe.recipe.cuisineType.includes("american")
      ),
    [recipes]
  );

  const handleClick = (name: string) => {
    redirect(`${currentUrl}/${name}`);
  };

  return (
    <>
      <Header />
      <h1>Enjoy our american recipes!</h1>
      <div className="cardGrid">
        {americanRecipes !== undefined && americanRecipes.length > 0 ? (
          americanRecipes.map((recipe) => (
            <React.Fragment key={recipe.recipe.label + recipe.recipe.source}>
              <RecipeCard
                name={recipe.recipe.label}
                cuisine={
                  recipe.recipe.cuisineType.length > 1
                    ? recipe.recipe.cuisineType.join(", ")
                    : recipe.recipe.cuisineType
                }
                imgURL={recipe.recipe.images.REGULAR.url}
                onClick={() => handleClick(recipe.recipe.label)}
              />
            </React.Fragment>
          ))
        ) : (
          <div>There are no american recipes at the moment</div>
        )}
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default American;

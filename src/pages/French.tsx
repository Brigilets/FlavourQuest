import React, { lazy, useMemo } from "react";
import { useRecipes } from "../utils";
import "./Page.css";

const Footer = React.lazy(() => import("../components/Footer"));
const Header = React.lazy(() => import("../components/Header"));
const RecipeCard = lazy(() => import("../components/RecipeCard"));

const French: React.FC = () => {
  const recipesContext = useRecipes();
  const recipes = recipesContext !== null ? recipesContext.recipes : null;
  const frenchRecipes = useMemo(
    () =>
      recipes?.filter((recipe) => recipe.recipe.cuisineType.includes("french")),
    [recipes]
  );
  console.log("french recipes", frenchRecipes);
  return (
    <>
      <Header />
      <h2>Enjoy our French recipes!</h2>
      <section className="cardGrid">
        {frenchRecipes !== undefined && frenchRecipes.length >0 ? (
          frenchRecipes.map((recipe) => (
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
          <div>There are no French recipes at the moment</div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default French;

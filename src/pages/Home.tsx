import "./Page.css";
import React, { lazy } from "react";
import { useRecipes } from "../utils";
const Footer = React.lazy(() => import("../components/Footer"));
const Header = React.lazy(() => import("../components/Header"));
const RecipeCard = lazy(() => import("../components/RecipeCard"));

const Home: React.FC = () => {
  const recipesContext = useRecipes();
  const recipes = recipesContext !== null ? recipesContext.recipes : null;

  if (recipes && recipes.length > 0) {
    // minimizing the amount of data rendered

    const randomRecipes = [...recipes]
      .sort(() => Math.random() - 0.5)
      .slice(0, 25);

    return (
      <>
        <Header />
        <section className="cardGrid">
          {randomRecipes?.map((recipe) => (
            <>
              <RecipeCard
                key={recipe.recipe.source + recipe.recipe.label}
                name={recipe.recipe.label}
                cuisine={recipe.recipe.cuisineType}
                imgURL={recipe.recipe.images.REGULAR.url}
              />
            </>
          ))}
        </section>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div>No recipes available at this time</div>
        <Footer />
      </>
    );
  }
};

export default Home;

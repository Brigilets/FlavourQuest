import "./Page.css";
import React, { lazy } from "react";
import { useRecipes } from "../utils";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const Footer = React.lazy(() => import("../components/Footer"));
const Header = React.lazy(() => import("../components/Header"));
const RecipeCard = lazy(() => import("../components/RecipeCard"));

const Home: React.FC = () => {
  const recipesContext = useRecipes();
  const recipes = recipesContext !== null ? recipesContext.recipes : null;

  // const navigate = useNavigate();

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
            <React.Fragment key={recipe.recipe.label + recipe.recipe.source}>
              {/* <Link to={`${recipe.recipe.cuisineType}/${recipe.recipe.label}`}> */}
              <RecipeCard
                key={recipe.recipe.label + recipe.recipe.source}
                name={recipe.recipe.label}
                cuisine={recipe.recipe.cuisineType}
                imgURL={recipe.recipe.images.REGULAR.url}
                // navigate={navigate}
              />
              {/* </Link> */}
            </React.Fragment>
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

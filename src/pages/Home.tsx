import React from "react";
import useSearch, { useRecipes } from "../utils";
import RecipeCard from "../components/RecipeCard";
import Loading from "../components/Loading";
import NotFoundPage from "./NotFoundPage";
import SearchBar from "../components/Searchbar";

const Home: React.FC = () => {
  const recipesContext = useRecipes();
  const recipes = recipesContext?.recipes;
  const isLoading = recipesContext?.loading;

  const { filteredRecipes, handleSearchSubmit } = useSearch({
    recipes,
  });

  const randomRecipes =
    recipes && [...recipes].sort(() => Math.random() - 0.5).slice(0, 50);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : recipes && recipes.length > 0 ? (
        <>
          <SearchBar onSubmit={handleSearchSubmit} />
          <section className="cardGrid">
            {filteredRecipes.length > 0
              ? filteredRecipes.map((recipe) => (
                  <React.Fragment
                    key={recipe.recipe.label + recipe.recipe.source}
                  >
                    <RecipeCard
                      name={recipe.recipe.label}
                      cuisine={recipe.recipe.cuisineType}
                      imgURL={recipe.recipe.images.REGULAR.url}
                    />
                  </React.Fragment>
                ))
              : randomRecipes?.map((recipe) => (
                  <React.Fragment
                    key={recipe.recipe.label + recipe.recipe.source}
                  >
                    <RecipeCard
                      data-testid="loading-element"
                      name={recipe.recipe.label}
                      cuisine={recipe.recipe.cuisineType}
                      imgURL={recipe.recipe.images.REGULAR.url}
                    />
                  </React.Fragment>
                ))}
          </section>
        </>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default Home;

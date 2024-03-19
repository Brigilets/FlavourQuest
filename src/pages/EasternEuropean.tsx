import React, { lazy, useMemo } from "react";
import "./Page.css";
import useSearch, { useRecipes } from "../utils";
import NotFoundPage from "./NotFoundPage";
import Loading from "../components/Loading";
import SearchBar from "../components/Searchbar";

const RecipeCard = lazy(() => import("../components/RecipeCard"));

const EasternEuropean: React.FC = () => {
  const recipesContext = useRecipes();
  const recipes =
  recipesContext !== undefined && recipesContext !== null
    ? recipesContext.recipes
    : undefined;
const isLoading = recipesContext !== null ? recipesContext.loading : null;

const { filteredRecipes, handleSearchSubmit } = useSearch({
  recipes,
});


  const easternEuropeanRecipes = useMemo(
    () =>
      recipes?.filter((recipe) =>
        recipe.recipe.cuisineType.includes("eastern europe")
      ),
    [recipes]
  );

  console.log(easternEuropeanRecipes);

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
                    key={recipe.recipe.label + recipe.recipe.source}
                    name={recipe.recipe.label}
                    cuisine={recipe.recipe.cuisineType}
                    imgURL={recipe.recipe.images.REGULAR.url}
                  />
                </React.Fragment>
              ))
            : easternEuropeanRecipes?.map((recipe) => (
                <React.Fragment
                  key={recipe.recipe.label + recipe.recipe.source}
                >
                  <RecipeCard
                    key={recipe.recipe.label + recipe.recipe.source}
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

export default EasternEuropean;

import React, { lazy, useMemo } from "react";
import "./Page.css";

import useSearch, { useRecipes } from "../utils";
import NotFoundPage from "./NotFoundPage";
import SearchBar from "../components/Searchbar";
import Loading from "../components/Loading";

const RecipeCard = lazy(() => import("../components/RecipeCard"));

const Mediterranean: React.FC = () => {
  const recipesContext = useRecipes();
  const recipes =
    recipesContext !== undefined && recipesContext !== null
      ? recipesContext.recipes
      : undefined;
  const isLoading = recipesContext !== null ? recipesContext.loading : null;

  const {  filteredRecipes, handleSearchSubmit } = useSearch({
    recipes,
  });

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
              : mediterraneanRecipes?.map((recipe) => (
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

export default Mediterranean;

import React, { lazy, useMemo } from "react";
import useSearch, { useRecipes } from "../utils";
import "./Page.css";
import SearchBar from "../components/Searchbar";
import Loading from "../components/Loading";
import NotFoundPage from "./NotFoundPage";

const RecipeCard = lazy(() => import("../components/RecipeCard"));

const French: React.FC = () => {
  const recipesContext = useRecipes();
  const recipes =
    recipesContext !== undefined && recipesContext !== null
      ? recipesContext.recipes
      : undefined;
  const isLoading = recipesContext !== null ? recipesContext.loading : null;

  const { filteredRecipes, handleSearchSubmit } = useSearch({ recipes });

  const frenchRecipes = useMemo(
    () =>
      recipes?.filter((recipe) => recipe.recipe.cuisineType.includes("french")),
    [recipes]
  );

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
              : frenchRecipes?.map((recipe) => (
                  <React.Fragment
                    key={recipe.recipe.label + recipe.recipe.source}
                  >
                    <RecipeCard
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

export default French;

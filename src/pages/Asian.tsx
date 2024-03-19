import React, { lazy, useMemo } from "react";
import "./Page.css";
import useSearch, { useRecipes } from "../utils";
import Loading from "../components/Loading";
import SearchBar from "../components/Searchbar";
import NotFoundPage from "./NotFoundPage";

const RecipeCard = lazy(() => import("../components/RecipeCard"));

const Asian: React.FC = () => {
  const recipesContext = useRecipes();
  const recipes =
    recipesContext !== undefined && recipesContext !== null
      ? recipesContext.recipes
      : undefined;
  const isLoading = recipesContext !== null ? recipesContext.loading : null;

  const { filteredRecipes, handleSearchSubmit } = useSearch({
    recipes,
  });
  const asianRecipes = useMemo(
    () =>
      recipes?.filter((recipe) => recipe.recipe.cuisineType.includes("asian")),
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
              : asianRecipes?.map((recipe) => (
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

export default Asian;

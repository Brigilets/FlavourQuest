import React, { lazy, useMemo } from "react";
import useSearch, { useRecipes } from "../utils";

const RecipeCard = lazy(() => import("../components/RecipeCard"));
import "./Page.css";
import SearchBar from "../components/Searchbar";
import NotFoundPage from "./NotFoundPage";
import Loading from "../components/Loading";

const Italian: React.FC = () => {
  const recipesContext = useRecipes();
  const recipes =
    recipesContext !== undefined && recipesContext !== null
      ? recipesContext.recipes
      : undefined;
  const isLoading = recipesContext !== null ? recipesContext.loading : null;

  const { filteredRecipes, handleSearchSubmit } = useSearch({
    recipes,
  });

  const italianRecipes = useMemo(
    () =>
      recipes?.filter((recipe) =>
        recipe.recipe.cuisineType.includes("italian")
      ),
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
                      key={recipe.recipe.label + recipe.recipe.source}
                      name={recipe.recipe.label}
                      cuisine={recipe.recipe.cuisineType}
                      imgURL={recipe.recipe.images.REGULAR.url}
                    />
                  </React.Fragment>
                ))
              : italianRecipes?.map((recipe) => (
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

export default Italian;

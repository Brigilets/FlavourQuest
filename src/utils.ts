import { useContext } from "react";
import { RecipesContext } from "./RecipesContext";

import { useCallback, useState } from "react";

export const useRecipes = () => useContext(RecipesContext);

type SearchProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recipes?: any[];
};

export const useSearch = ({ recipes }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [filteredRecipes, setFilteredRecipes] = useState<any[]>([]);

  const handleSearchSubmit = useCallback(
    (updatedSearchTerm: string) => {
      setSearchTerm(updatedSearchTerm);
      const filtered = recipes?.filter((recipe) =>
        recipe.recipe.label
          .toLowerCase()
          .includes(updatedSearchTerm.toLowerCase())
      );
      filtered && setFilteredRecipes(filtered);
    },
    [recipes]
  );

  return { searchTerm, filteredRecipes, handleSearchSubmit };
};

export default useSearch;

import { useContext } from "react";
import { RecipesContext } from "./RecipesContext";

export const useRecipes = () => useContext(RecipesContext);

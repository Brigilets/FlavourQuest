import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  lazy,
  Suspense,
} from "react";

export const RecipesContext = createContext<RecipesContextType | null>(null);

export const useRecipes = () => useContext(RecipesContext);

export interface RecipesContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recipes: any[];
  loading: boolean;
}

const cuisineTypes = [
  "American",
  "Asian",
  "Eastern Europe",
  "Italian",
  "Mediterranean",
  "French",
];

const Loading = lazy(() => import("./components/Loading"));

export const RecipesProvider = ({ children }: { children: ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  const appID = import.meta.env.VITE_REACT_APP_EDAMAM_APP_ID;
  const appKey = import.meta.env.VITE_REACT_APP_EDAMAM_APP_KEY;

  useEffect(() => {
    async function fetchData() {
      const fetchedRecipes = [];
      try {
        for (const cuisine of cuisineTypes) {
          setLoading(true);

          const res = await fetch(
            `https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=${appID}&app_key=${appKey}&cuisineType=${cuisine}`
          );
          const data = await res.json();

          fetchedRecipes.push(...data.hits);
        }
        console.log(fetchedRecipes);
        setRecipes(fetchedRecipes);
        setLoading(false);
        setIsFetched(true);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    if (!isFetched) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetched]);

  return (
    <RecipesContext.Provider value={{ recipes, loading }}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </RecipesContext.Provider>
  );
};

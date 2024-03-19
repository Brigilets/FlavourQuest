import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  lazy,
  Suspense,
  memo,
  useCallback,
} from "react";

export const RecipesContext = createContext<RecipesContextType | null>(null);

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

export const RecipesProvider = memo(({ children }: { children: ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  const appID = import.meta.env.VITE_REACT_APP_EDAMAM_APP_ID;
  const appKey = import.meta.env.VITE_REACT_APP_EDAMAM_APP_KEY;

  const fetchData = useCallback(
    async (appID: string, appKey: string, cuisineTypes: string[]) => {
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
    },
    [setLoading, setRecipes, setIsFetched]
  );

  useEffect(() => {
    const getData = async () => {
      if (!isFetched) {
        fetchData(appID, appKey, cuisineTypes);
      }
    };
    getData();
  }, [isFetched, fetchData, appID, appKey]);

  useEffect(() => {
    if (isFetched && recipes.length) {
      // Store fetched recipes in local storage only after successful retrieval
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
  }, [isFetched, recipes]);

  return (
    <RecipesContext.Provider value={{ recipes, loading }}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </RecipesContext.Provider>
  );
});

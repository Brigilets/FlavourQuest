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

        setRecipes(fetchedRecipes);
        setLoading(false);
        setIsFetched(true);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    },
    [setLoading, setRecipes, setIsFetched]
  );
  // add comments if might forget why
  useEffect(() => {
    // done to prevent UI blocks
    const getData = async () => {
      const numItemsLocalStorage = localStorage.getItem("recipes")?.length;

      if (numItemsLocalStorage !== undefined && numItemsLocalStorage > 0) {
        // if local storage is not empty and num exists, retreive data from local storage in order to make less api calls and have faster data retrieval
        try {
          const storedRecipes = localStorage.getItem("recipes");
          const parsedRecipes =
            storedRecipes !== null ? JSON.parse(storedRecipes) : null;
          setRecipes(parsedRecipes);
          setIsFetched(true);
          console.log("using recipes from local storage");
        } catch (error) {
          console.error("Error parsing stored recipes:", error);
        }
      }

      if (!isFetched && numItemsLocalStorage && numItemsLocalStorage < 0) {
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

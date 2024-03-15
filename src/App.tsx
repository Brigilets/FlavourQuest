import "./App.css";
import { lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const Asian = lazy(() => import("./pages/Asian"));
const American = lazy(() => import("./pages/American"));
const EasternEuropean = lazy(() => import("./pages/EasternEuropean"));
const French = lazy(() => import("./pages/French"));
const Italian = lazy(() => import("./pages/Italian"));
const Mediterranean = lazy(() => import("./pages/Mediterranean"));
const RecipePage = lazy(() => import("./pages/RecipePage"));
// import RecipePage from "./pages/RecipePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //   const recipeContext = useRecipes();
  // const recipes = recipeContext !== null ? recipeContext.recipes : null;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":cuisine" element={<RecipePage />}>
              <Route path=":name" element={<RecipePage />} />
            </Route>
          </Route>
          <Route path="asian" element={<Asian />}>
            <Route path=":name" element={<RecipePage />} />
          </Route>
          <Route path="american" element={<American />}>
            <Route path=":name" element={<RecipePage />} />
          </Route>
          <Route path="eastern-european" element={<EasternEuropean />}>
            <Route path=":name" element={<RecipePage />} />
          </Route>
          <Route path="french" element={<French />}>
            <Route path=":name" element={<RecipePage />} />
          </Route>
          <Route path="italian" element={<Italian />}>
            <Route path=":name" element={<RecipePage />} />
          </Route>
          <Route path="mediterranean" element={<Mediterranean />}>
            <Route path=":name" element={<RecipePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

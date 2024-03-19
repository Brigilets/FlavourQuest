/* eslint-disable react-refresh/only-export-components */
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { RecipesProvider } from "./RecipesContext.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Asian = lazy(() => import("./pages/Asian"));
const American = lazy(() => import("./pages/American"));
const EasternEuropean = lazy(() => import("./pages/EasternEuropean"));
const French = lazy(() => import("./pages/French"));
const Italian = lazy(() => import("./pages/Italian"));
const Mediterranean = lazy(() => import("./pages/Mediterranean"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.tsx"));
const RecipePage = lazy(() => import("./pages/RecipePage"));
const Layout = lazy(() => import("./pages/Layout"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />{" "}
        <Route
          path="asian"
          element={<Asian />}
          errorElement={<NotFoundPage />}
        />{" "}
        <Route
          path="american"
          element={<American />}
          errorElement={<NotFoundPage />}
        />
        <Route
          path="eastern-european"
          element={<EasternEuropean />}
          errorElement={<NotFoundPage />}
        />
        <Route
          path="french"
          element={<French />}
          errorElement={<NotFoundPage />}
        />
        <Route
          path="italian"
          element={<Italian />}
          errorElement={<NotFoundPage />}
        />
        <Route
          path="mediterranean"
          element={<Mediterranean />}
          errorElement={<NotFoundPage />}
        />
        <Route
          path=":cuisine/:name"
          element={<RecipePage />}
          errorElement={<NotFoundPage />}
        />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecipesProvider>
      <RouterProvider router={router} />
    </RecipesProvider>
  </React.StrictMode>
);

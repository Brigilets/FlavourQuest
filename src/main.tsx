import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { RecipesProvider } from "./RecipesContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Asian = lazy(() => import("./pages/Asian"));
const American = lazy(() => import("./pages/American"));
const EasternEuropean = lazy(() => import("./pages/EasternEuropean"));
const French = lazy(() => import("./pages/French"));
const Italian = lazy(() => import("./pages/Italian"));
const Mediterranean = lazy(() => import("./pages/Mediterranean"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.tsx"));
const RecipePage = lazy(() => import("./pages/RecipePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/asian",
    element: <Asian />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/american",
    element: <American />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/eastern-european",
    element: <EasternEuropean />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/french",
    element: <French />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/italian",
    element: <Italian />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/mediterranian",
    element: <Mediterranean />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/:cuisine/:name",
    element: <RecipePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecipesProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
    </RecipesProvider>
  </React.StrictMode>
);

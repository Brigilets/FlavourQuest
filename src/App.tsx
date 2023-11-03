import "./App.css";
import { lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const Asian = lazy(() => import("./pages/Asian"));
const American = lazy(() => import("./pages/American"));
const EasternEuropean = lazy(() => import("./pages/EasternEuropean"));
const French = lazy(() => import("./pages/French"));
const Italian = lazy(() => import("./pages/Italian"));
const Mediterranean = lazy(() => import("./pages/Mediterranean"));
// const RecipePage = lazy(() => import("./pages/RecipePage"));

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asian" element={<Asian />} />
          <Route path="/american" element={<American />} />
          <Route path="/eastern-european" element={<EasternEuropean />} />
          <Route path="/french" element={<French />} />
          <Route path="/italian" element={<Italian />} />
          <Route path="/mediterranean" element={<Mediterranean />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

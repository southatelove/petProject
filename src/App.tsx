import { Link, Route, Routes } from "react-router-dom";

import "./index.scss";

import { AboutPageAsync } from "./Pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./Pages/MainPage/MainPage.async";
import { Suspense } from "react";

export default function App() {
  return (
    <div className="app">
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

import "./styles/index.scss";

import { Link, Route, Routes } from "react-router-dom";

import { useTheme } from "./providers/ThemeProvider";

import { Suspense } from "react";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/classNames/classNames";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={classNames("app", { hovered: true, selected: false }, [
        theme,
        "cls2",
        "cls3",
      ])}
    >
      <button onClick={toggleTheme}>toggle</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

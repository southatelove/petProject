import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export default function App() {
  const { theme } = useTheme();
  return (
    <div
      className={classNames("app", { hovered: true, selected: false }, [
        theme,
        "cls2",
        "cls3",
      ])}
    >
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}

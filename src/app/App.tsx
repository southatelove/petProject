import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

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
      <AppRouter />
    </div>
  );
}

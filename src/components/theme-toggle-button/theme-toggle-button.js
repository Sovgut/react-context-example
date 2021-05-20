import clsx from "clsx";
import { useContext } from "react";
import { AppContext } from "../../app-context";
import styles from "./theme-toggle-button.module.css";

export default function ThemeToggleButton() {
  const appContext = useContext(AppContext);
  const classNames = clsx({
    [styles["theme-toggle-button"]]: true,
    [styles.dark]: appContext.theme === "dark",
    [styles.light]: appContext.theme === "light",
  });

  return (
    <button className={classNames} onClick={appContext.toggleTheme}>
      {appContext.theme === "dark" ? "Light Theme" : "Dark Theme"}
    </button>
  );
}

import { useContext } from "react";
import { AppContext } from "../../app-context";
import styles from "./header.module.css";
import clsx from "clsx";

export default function Header() {
  const appContext = useContext(AppContext);
  const classNames = clsx({
    [styles.header]: true,
    [styles.dark]: appContext.theme === "dark",
    [styles.light]: appContext.theme === "light",
  });

  const usernameStateIcon = appContext.usernameState ? null : (
    <span title="Data isn't saved!" style={{ cursor: "default" }}>
      ⚠
    </span>
  );
  const usernameStateIconStyle = clsx({
    [styles["user-dirt-state"]]: !appContext.usernameState,
    [styles["user-saved-state"]]: appContext.usernameState,
  });

  return (
    <div className={classNames}>
      Context Usage example
      <div>
        {appContext.username}{" "}
        <span className={usernameStateIconStyle}>{usernameStateIcon}</span>
      </div>
    </div>
  );
}

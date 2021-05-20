import clsx from "clsx";
import { useContext } from "react";
import { AppContext } from "../../app-context";
import styles from "./username-form.module.css";

export default function UsernameForm() {
  const appContext = useContext(AppContext);
  const classNames = clsx({
    [styles["username-form"]]: true,
    [styles.dark]: appContext.theme === "dark",
    [styles.light]: appContext.theme === "light",
  });

  return (
    <form className={classNames} onSubmit={appContext.onUsernameSubmit}>
      <label>
        <span>Username</span>
        <div>
          <input
            defaultValue={appContext.username}
            onChange={appContext.onUsernameChange}
          />
          <button type="submit">Save</button>
        </div>
      </label>
    </form>
  );
}

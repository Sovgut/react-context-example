import clsx from "clsx";
import { useContext } from "react";
import { AppContext } from "../../app-context";
import styles from "./footer.module.css";

export default function Footer() {
  const appContext = useContext(AppContext);
  const classNames = clsx({
    [styles.footer]: true,
    [styles.dark]: appContext.theme === "dark",
    [styles.light]: appContext.theme === "light",
  });

  const onCreatedDate = new Date("1/1/2021");
  const currentDate = new Date();
  const dateString =
    onCreatedDate.getFullYear() +
    (currentDate.getFullYear() > onCreatedDate.getFullYear()
      ? " - " + currentDate.getFullYear()
      : null);

  return (
    <div className={classNames}>
      <a href="https://sovgut.com" rel="noreferrer" target="_blank">
        Sergey Sovgut
      </a>{" "}
      &copy; {dateString}
    </div>
  );
}

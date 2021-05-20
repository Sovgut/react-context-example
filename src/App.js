import Header from "./components/header/header";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import ThemeToggleButton from "./components/theme-toggle-button/theme-toggle-button";
import { useContext } from "react";
import { AppContext } from "./app-context";
import styles from "./app.module.css";
import clsx from "clsx";
import UsernameForm from "./components/username-form/username-form";

function App() {
  const appContext = useContext(AppContext);
  const classNames = clsx({
    [styles.app]: true,
    [styles.dark]: appContext.theme === "dark",
    [styles.light]: appContext.theme === "light",
  });

  return (
    <div className={classNames}>
      <Header />
      <Content>
        <ThemeToggleButton />
        <UsernameForm />
        <div>
          After saving or changing any data, look at browser local storage.
        </div>
      </Content>
      <Footer />
    </div>
  );
}

export default App;

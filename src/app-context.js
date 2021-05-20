import { createContext, useState } from "react";

const AppContext = createContext();

function AppContextProvider(props) {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme"));
  const [username, setUsername] = useState(() =>
    localStorage.getItem("username")
  );
  const [usernameState, setUsernameState] = useState(true);

  function toggleTheme() {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", nextTheme);

      return nextTheme;
    });
  }

  function onUsernameChange(syntethicEvent) {
    setUsername(() => {
      setUsernameState(false);

      return syntethicEvent.target.value;
    });
  }

  function onUsernameSubmit(syntethicEvent) {
    syntethicEvent.preventDefault();

    setUsernameState(() => {
      localStorage.setItem("username", username);

      return true;
    });
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        username,
        usernameState,
        onUsernameChange,
        onUsernameSubmit,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };

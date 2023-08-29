import React, { useContext } from "react";
import themesConfig from "../themes.config";
import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeType = {
   LIGHT: "light",
   DARK: "dark",
   RAINBOW: "rainbow",
};

export const themeStyle = (themeType) => {
   return themesConfig.theme[themeType];
};

const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = React.useState(themeStyle(ThemeType.DARK));

   const toggleTheme = () => {
      if (theme.type === ThemeType.DARK) setTheme(themeStyle(ThemeType.LIGHT));
      else setTheme(themeStyle(ThemeType.DARK));

      return theme;
   };

   return (
      <ThemeContext.Provider value={[theme, setTheme, toggleTheme]}>
         <div className={theme.background}>{children}</div>
      </ThemeContext.Provider>
   );
};

export const useTheme = () => {
   return useContext(ThemeContext);
};

export { ThemeProvider };

import React, { useContext } from "react";
import { createContext } from "react";
import theme from "../themes.json";

const ThemeContext = createContext();

export const ThemeType = {
   LIGHT: "light",
   DARK: "dark",
};

export const ThemeStyle = (themeType) => {
   switch (themeType) {
      case ThemeType.LIGHT:
         return theme.light;
      case ThemeType.DARK:
         return theme.dark;
   }
};

const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = React.useState(ThemeStyle(ThemeType.DARK));

   return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
   return useContext(ThemeContext);
};

export { ThemeProvider };

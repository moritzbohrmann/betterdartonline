import React, { useContext } from "react";
import { createContext } from "react";
import themesConfig from "../../themes.config";

const ThemeContext = createContext();

export const ThemeType = {
   LIGHT: "light",
   DARK: "dark",
};

export const themeStyle = (themeType) => {
   switch (themeType) {
      case ThemeType.LIGHT:
         return themesConfig.theme.light;
      case ThemeType.DARK:
         return themesConfig.theme.dark;
      default:
         return themesConfig.theme.dark;
   }
};

const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = React.useState(themeStyle(ThemeType.DARK));

   return <ThemeContext.Provider value={[theme, setTheme]} children={children} />;
};

export const useTheme = () => {
   return useContext(ThemeContext);
};

export { ThemeProvider };

import React, { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeType = {
   LIGHT: "light",
   DARK: "dark",
};

const darkTheme = {
   type: "dark",
   backgroundColor: "bg-dark-background",
   textColor: "text-white-default",
   color: "text-white-default",
   windowColor: "bg-dark-window",
};

const lightTheme = {
   type: "light",
   backgroundColor: "bg-light-background",
   textColor: "text-black-default",
   color: "text-black-default",
   windowColor: "bg-light-window",
};

export const ThemeStyle = (themeType) => {
   switch (themeType) {
      case ThemeType.LIGHT:
         return lightTheme;
      case ThemeType.DARK:
         return darkTheme;
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

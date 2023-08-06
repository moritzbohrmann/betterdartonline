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
   textColor: {
      default: "text-white-default",
      descent: "text-zinc-500",
      button: "text-black-default",
   },
   color: "text-white-default",
   windowColor: "bg-dark-window",
   borderColor: {
      light: "border-zinc-900",
      heavy: "border-zinc-500",
   },
};

const lightTheme = {
   type: "light",
   backgroundColor: "bg-light-background",
   textColor: {
      default: "text-black-default",
      descent: "text-zinc-300",
      button: "text-white-default",
   },
   color: "text-black-default",
   windowColor: "bg-light-window",
   borderColor: {
      light: "border-zinc-300",
      heavy: "border-zinc-700",
   },
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

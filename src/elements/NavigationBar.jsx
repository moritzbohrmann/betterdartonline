import * as Navigation from "../components/Navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";
import { Flex } from "../components/@ui/Flex";
import { SearchProvider } from "../context/SearchContext";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/style";

function NavBar() {
   const [theme] = useTheme();

   const className = cn("sticky top-0 w-full border-b-[1px]", theme.backgroundColor, theme.borderColor.light);

   return (
      <NavigationMenu.Root className={className}>
         <NavigationMenu.List className="flex h-16 w-screen items-center justify-between gap-2.5 px-4 sm:px-8 md:justify-normal md:px-16 2xl:px-64">
            <SearchProvider>
               <Flex justify="between" align="center" className="h-full w-full">
                  <Navigation.Left />
                  <Navigation.Right />
               </Flex>
            </SearchProvider>
         </NavigationMenu.List>
      </NavigationMenu.Root>
   );
}

export default NavBar;

import * as Navigation from "../components/Navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";
import { Flex } from "../components/@ui/Flex";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/style";

function NavBar() {
   const [theme] = useTheme();

   return (
      <NavigationMenu.Root className={cn("sticky top-0 w-full border-b-[1px]", theme.backgroundColor, theme.borderColor.light)}>
         <NavigationMenu.List className="flex h-16 w-screen items-center justify-between gap-2.5 px-4 sm:px-8 md:justify-normal md:px-16 lg:px-36 2xl:px-64">
            <Flex justify="between" align="center" className="h-full md:w-full">
               <Navigation.PC />
            </Flex>
            <Navigation.Mobile />
         </NavigationMenu.List>
      </NavigationMenu.Root>
   );
}

export default NavBar;

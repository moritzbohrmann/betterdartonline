import * as Switch from "@radix-ui/react-switch";
import React from "react";
import { Flex, Separator, Text } from "../components/@ui/_collection";
import { ThemeType, useTheme } from "../context/ThemeContext";

function SettingsMenu() {
   const [theme, , toggleTheme] = useTheme();

   return (
      <>
         <Flex align="center" justify="between" className="h-10 w-full px-4">
            <Text>Lightmode</Text>
            <Switch.Root
               onCheckedChange={toggleTheme}
               checked={theme.type === ThemeType.LIGHT}
               className={`relative h-[25px] w-[42px] rounded-full border-[1px]  ${
                  theme.type === ThemeType.DARK ? "border-white-default bg-white-default" : "border-dark-background bg-dark-background"
               } outline-none`}>
               <Switch.Thumb
                  className={`block h-[21px] w-[21px] translate-x-0.5 rounded-full ${
                     theme.type === ThemeType.DARK ? "bg-dark-background" : "bg-white-default"
                  } transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[18px]`}
               />
            </Switch.Root>
         </Flex>
         <Separator orientation="horizontal" />
         <Flex align="center" justify="between" className="h-10 w-full px-4">
            <Text>Caller</Text>
            <Switch.Root
               className={`relative h-[25px] w-[42px] rounded-full border-[1px]  ${
                  theme.type === ThemeType.DARK ? "border-white-default bg-white-default" : "border-dark-background bg-dark-background"
               } outline-none`}>
               <Switch.Thumb
                  className={`block h-[21px] w-[21px] translate-x-0.5 rounded-full ${
                     theme.type === ThemeType.DARK ? "bg-dark-background" : "bg-white-default"
                  } transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[18px]`}
               />
            </Switch.Root>
         </Flex>
      </>
   );
}

export default SettingsMenu;

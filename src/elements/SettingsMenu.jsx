import * as Switch from "@radix-ui/react-switch";
import React from "react";
import Separator from "../components/@ui/Separator";
import { Card, Title } from "../components/@ui/Card";
import { Flex } from "../components/@ui/Flex";
import { ThemeType, themeStyle, useTheme } from "../context/ThemeContext";
import { cn } from "../utils/style";

function SettingsMenu() {
   const [theme, setTheme] = useTheme();

   const toggleTheme = () => {
      const newTheme = theme.type === ThemeType.LIGHT ? themeStyle(ThemeType.DARK) : themeStyle(ThemeType.LIGHT);

      setTheme(newTheme);
   };

   return (
      <Card className="absolute">
         <Title subTitle="Customize the app according to your preferences.">Settings</Title>
         <Flex align="center" justify="between" className="w-full px-8 pb-4">
            <h2>Lightmode</h2>
            <Switch.Root
               onCheckedChange={toggleTheme}
               checked={theme.type === ThemeType.LIGHT}
               className={`relative h-[25px] w-[42px] rounded-full border-[1px]  ${
                  theme.type === ThemeType.DARK ? "border-white bg-white" : "border-dark-background bg-dark-background"
               } outline-none`}>
               <Switch.Thumb
                  className={`block h-[21px] w-[21px] translate-x-0.5 rounded-full ${
                     theme.type === ThemeType.DARK ? "bg-dark-background" : "bg-white"
                  } transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[18px]`}
               />
            </Switch.Root>
         </Flex>
         <Separator orientation="horizontal" />
         <Flex align="center" justify="between" className="w-full px-8 pt-4">
            <h2>Caller</h2>
            <Switch.Root
               className={`relative h-[25px] w-[42px] rounded-full border-[1px]  ${
                  theme.type === ThemeType.DARK ? "border-white bg-white" : "border-dark-background bg-dark-background"
               } outline-none`}>
               <Switch.Thumb
                  className={`block h-[21px] w-[21px] translate-x-0.5 rounded-full ${
                     theme.type === ThemeType.DARK ? "bg-dark-background" : "bg-white"
                  } transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[18px]`}
               />
            </Switch.Root>
         </Flex>
      </Card>
   );
}

export default SettingsMenu;
